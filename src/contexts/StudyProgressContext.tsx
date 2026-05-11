import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from 'react';
import { doc, getDoc, updateDoc, setDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { useAuth, GUEST_USER } from './AuthContext';

interface DailyStats {
  date: string; // YYYY-MM-DD
  minutesStudied: number;
  wordsLearned: number;
  lessonsCompleted: number;
}

interface StudyProgressData {
  targetLevel: string;
  setTargetLevel: (level: string) => void;
  dailyStats: Record<string, DailyStats>;
  currentStreak: number;
  totalDaysActive: number;
  totalWordsLearned: number;
  todayStats: DailyStats;
  lastLessonId: string | null;
  learnedWordIds: string[];
  completedLessonIds: string[];
  setLastLessonId: (id: string) => void;
  markAttendance: () => void;
  addStudyTime: (minutes: number) => void;
  addLearnedWord: (id: string) => void;
  addCompletedLesson: (id: string) => void;
}

const defaultContext: StudyProgressData = {
  targetLevel: 'TOCFL Band A2',
  setTargetLevel: () => {},
  dailyStats: {},
  currentStreak: 0,
  totalDaysActive: 0,
  totalWordsLearned: 0,
  todayStats: { date: '', minutesStudied: 0, wordsLearned: 0, lessonsCompleted: 0 },
  lastLessonId: null,
  learnedWordIds: [],
  completedLessonIds: [],
  setLastLessonId: () => {},
  markAttendance: () => {},
  addStudyTime: () => {},
  addLearnedWord: () => {},
  addCompletedLesson: () => {},
};

const StudyProgressContext = createContext<StudyProgressData>(defaultContext);

export const useStudyProgress = () => useContext(StudyProgressContext);

const getTodayDateString = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

export const StudyProgressProvider = ({ children }: { children: ReactNode }) => {
  const { user, firebaseUser } = useAuth();
  const [targetLevel, setTargetLevelState] = useState('TOCFL Band A2');
  const [dailyStats, setDailyStats] = useState<Record<string, DailyStats>>({});
  const [currentStreak, setCurrentStreak] = useState(0);
  const [lastActiveDate, setLastActiveDate] = useState<string | null>(null);
  const [lastLessonId, setLastLessonIdState] = useState<string | null>(null);
  const [learnedWordIds, setLearnedWordIds] = useState<string[]>([]);
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>([]);
  const syncingRef = useRef(false);

  // Today's date string
  const todayStr = getTodayDateString();

  // 1. Initial Load from LocalStorage (for guests or quick startup)
  useEffect(() => {
    const savedStats = localStorage.getItem('studyStats');
    if (savedStats) {
      try {
        const parsed = JSON.parse(savedStats);
        setDailyStats(parsed.dailyStats || {});
        setCurrentStreak(parsed.currentStreak || 0);
        setLastActiveDate(parsed.lastActiveDate || null);
        setLastLessonIdState(parsed.lastLessonId || null);
        setLearnedWordIds(parsed.learnedWordIds || []);
        setCompletedLessonIds(parsed.completedLessonIds || []);
        if (parsed.targetLevel) setTargetLevelState(parsed.targetLevel);
      } catch (e) {
        console.error('Failed to parse study stats', e);
      }
    }
  }, []);

  // 2. Firebase Sync - Subscribe to user changes
  useEffect(() => {
    if (!firebaseUser) return;

    const userRef = doc(db, 'users', firebaseUser.uid);
    const unsubscribe = onSnapshot(userRef, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        if (data) {
          syncingRef.current = true;
          if (data.targetLevel) setTargetLevelState(data.targetLevel);
          if (data.currentStreak !== undefined) setCurrentStreak(data.currentStreak);
          if (data.lastActiveDate) setLastActiveDate(data.lastActiveDate);
          if (data.lastLessonId) setLastLessonIdState(data.lastLessonId);
          if (data.learnedWordIds) setLearnedWordIds(data.learnedWordIds || []);
          if (data.completedLessonIds) setCompletedLessonIds(data.completedLessonIds || []);
          if (data.dailyStats) setDailyStats(data.dailyStats || {});
          syncingRef.current = false;
        }
      }
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, `users/${firebaseUser.uid}`);
    });

    return () => unsubscribe();
  }, [firebaseUser]);

  // 3. Save to LocalStorage and Firebase whenever state changes
  useEffect(() => {
    // Only save if not currently syncing from Firebase to avoid loops
    if (syncingRef.current) return;

    const dataToSave = {
      dailyStats,
      currentStreak,
      lastActiveDate,
      lastLessonId,
      learnedWordIds,
      completedLessonIds,
      targetLevel
    };
    localStorage.setItem('studyStats', JSON.stringify(dataToSave));

    // Firebase update (debounce or throttled if needed, but for these infrequent stats it's okay)
    if (firebaseUser) {
      const userRef = doc(db, 'users', firebaseUser.uid);
      updateDoc(userRef, {
        targetLevel,
        currentStreak,
        lastActiveDate,
        lastLessonId,
        learnedWordIds,
        completedLessonIds,
        dailyStats: dailyStats, // Syncing the map for now since it's relatively small
        updatedAt: serverTimestamp()
      }).catch(e => {
        // If document doesn't exist yet, we'll wait for AuthContext to create it
      });
    }
  }, [dailyStats, currentStreak, lastActiveDate, targetLevel, lastLessonId, firebaseUser]);

  // Track study time automatically while tab is active
  useEffect(() => {
    const interval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        addStudyTime(1);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const markAttendance = () => {
    if (lastActiveDate !== todayStr) {
      let newStreak = 1;
      if (lastActiveDate) {
        const lastDateObj = new Date(lastActiveDate);
        const todayObj = new Date(todayStr);
        const diffTime = Math.abs(todayObj.getTime() - lastDateObj.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        
        if (diffDays === 1) {
          newStreak = currentStreak + 1;
        } else if (diffDays > 1) {
          newStreak = 1; 
        } else {
          newStreak = currentStreak;
        }
      }
      
      setCurrentStreak(newStreak);
      setLastActiveDate(todayStr);
      
      setDailyStats(prev => ({
        ...prev,
         [todayStr]: prev[todayStr] || { date: todayStr, minutesStudied: 0, wordsLearned: 0, lessonsCompleted: 0 }
      }));
    }
  };

  useEffect(() => {
    if (lastActiveDate !== todayStr) {
      markAttendance();
    }
  }, [todayStr, lastActiveDate]);

  const addStudyTime = (minutes: number) => {
    setDailyStats(prev => ({
      ...prev,
      [todayStr]: {
        ...(prev[todayStr] || { date: todayStr, minutesStudied: 0, wordsLearned: 0, lessonsCompleted: 0 }),
        minutesStudied: (prev[todayStr]?.minutesStudied || 0) + minutes
      }
    }));
  };

  const addLearnedWord = (id: string) => {
    if (learnedWordIds.includes(id)) return;
    
    setLearnedWordIds(prev => [...prev, id]);
    setDailyStats(prev => ({
      ...prev,
      [todayStr]: {
        ...(prev[todayStr] || { date: todayStr, minutesStudied: 0, wordsLearned: 0, lessonsCompleted: 0 }),
        wordsLearned: (prev[todayStr]?.wordsLearned || 0) + 1
      }
    }));
  };

  const addCompletedLesson = (id: string) => {
    if (completedLessonIds.includes(id)) return;

    setCompletedLessonIds(prev => [...prev, id]);
    setDailyStats(prev => ({
      ...prev,
      [todayStr]: {
        ...(prev[todayStr] || { date: todayStr, minutesStudied: 0, wordsLearned: 0, lessonsCompleted: 0 }),
        lessonsCompleted: (prev[todayStr]?.lessonsCompleted || 0) + 1
      }
    }));
  };

  const setTargetLevel = (level: string) => {
    setTargetLevelState(level);
  };
  
  const setLastLessonId = (id: string) => {
    setLastLessonIdState(id);
  };

  const todayStats = dailyStats[todayStr] || { date: todayStr, minutesStudied: 0, wordsLearned: 0, lessonsCompleted: 0 };
  const totalDaysActive = Object.keys(dailyStats).length;
  const totalWordsLearned = Object.values(dailyStats).reduce((sum, day) => sum + (day.wordsLearned || 0), 0);
  
  return (
    <StudyProgressContext.Provider value={{
      targetLevel,
      setTargetLevel,
      dailyStats,
      currentStreak,
      totalDaysActive,
      totalWordsLearned,
      todayStats,
      lastLessonId,
      learnedWordIds,
      completedLessonIds,
      setLastLessonId,
      markAttendance,
      addStudyTime,
      addLearnedWord,
      addCompletedLesson
    }}>
      {children}
    </StudyProgressContext.Provider>
  );
};

