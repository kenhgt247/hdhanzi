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
  const skipNextSaveRef = useRef(false);
  const lastSavedRef = useRef<string | null>(null);

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
          // Compare to what we last saved to prevent bounce-back infinite loop
          const incomingDataToSave = {
            dailyStats: data.dailyStats || {},
            currentStreak: data.currentStreak || 0,
            lastActiveDate: data.lastActiveDate || null,
            lastLessonId: data.lastLessonId || null,
            learnedWordIds: data.learnedWordIds || [],
            completedLessonIds: data.completedLessonIds || [],
            targetLevel: data.targetLevel || 'TOCFL Band A2'
          };
          const incomingStr = JSON.stringify(incomingDataToSave);
          if (incomingStr === lastSavedRef.current) {
             return; // Ignore echo from our own write
          }

          skipNextSaveRef.current = true;
          if (data.targetLevel) setTargetLevelState(data.targetLevel);
          if (data.currentStreak !== undefined) setCurrentStreak(data.currentStreak);
          if (data.lastActiveDate) setLastActiveDate(data.lastActiveDate);
          if (data.lastLessonId) setLastLessonIdState(data.lastLessonId);
          if (data.learnedWordIds) setLearnedWordIds(data.learnedWordIds || []);
          if (data.completedLessonIds) setCompletedLessonIds(data.completedLessonIds || []);
          if (data.dailyStats) setDailyStats(data.dailyStats || {});
        }
      }
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, `users/${firebaseUser.uid}`);
    });

    return () => unsubscribe();
  }, [firebaseUser]);

  // 3. Save to LocalStorage and Firebase whenever state changes
  useEffect(() => {
    const dataToSave = {
      dailyStats: Object.fromEntries(
        Object.entries(dailyStats).map(([key, val]) => [
          key,
          {
            ...val,
            // Ensure values are plain primitives and dates are strings
            date: String(val.date || key),
            minutesStudied: Number(val.minutesStudied || 0),
            wordsLearned: Number(val.wordsLearned || 0),
            lessonsCompleted: Number(val.lessonsCompleted || 0)
          }
        ])
      ),
      currentStreak,
      lastActiveDate,
      lastLessonId,
      learnedWordIds: learnedWordIds.filter(id => typeof id === 'string'),
      completedLessonIds: completedLessonIds.filter(id => typeof id === 'string'),
      targetLevel
    };
    
    const stringified = JSON.stringify(dataToSave);
    if (lastSavedRef.current === stringified) {
      return; // Skip if nothing actually changed
    }
    
    if (skipNextSaveRef.current) {
      skipNextSaveRef.current = false;
      lastSavedRef.current = stringified; // Still update what we consider the "current" state
      return; 
    }

    lastSavedRef.current = stringified;

    try {
      localStorage.setItem('studyStats', stringified);
    } catch (e) {
      console.error('Safe save to localStorage failed:', e);
      // Fallback: try to save without dailyStats if that's the culprit
      try {
        const fallbackData = { ...dataToSave, dailyStats: {} };
        localStorage.setItem('studyStats', JSON.stringify(fallbackData));
      } catch (e2) {}
    }

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
  }, [dailyStats, currentStreak, lastActiveDate, targetLevel, lastLessonId, learnedWordIds, completedLessonIds, firebaseUser]);

  // Track study time automatically while tab is active
  useEffect(() => {
    const interval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        addStudyTime(1);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const markAttendance = React.useCallback(() => {
    if (lastActiveDate !== todayStr) {
      setDailyStats(prev => ({
        ...prev,
        [todayStr]: prev[todayStr] || { date: todayStr, minutesStudied: 0, wordsLearned: 0, lessonsCompleted: 0 }
      }));
      
      setCurrentStreak(prev => {
        let newStreak = 1;
        if (lastActiveDate) {
          const lastDateObj = new Date(lastActiveDate);
          const todayObj = new Date(todayStr);
          const diffTime = Math.abs(todayObj.getTime() - lastDateObj.getTime());
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
          
          if (diffDays === 1) {
            newStreak = prev + 1;
          } else if (diffDays > 1) {
            newStreak = 1; 
          } else {
            newStreak = prev;
          }
        }
        return newStreak;
      });
      
      setLastActiveDate(todayStr);
    }
  }, [lastActiveDate, todayStr]);

  useEffect(() => {
    if (lastActiveDate !== todayStr) {
      markAttendance();
    }
  }, [todayStr, lastActiveDate, markAttendance]);

  const addStudyTime = React.useCallback((minutes: number) => {
    setDailyStats(prev => ({
      ...prev,
      [todayStr]: {
        ...(prev[todayStr] || { date: todayStr, minutesStudied: 0, wordsLearned: 0, lessonsCompleted: 0 }),
        minutesStudied: (prev[todayStr]?.minutesStudied || 0) + minutes
      }
    }));
  }, [todayStr]);

  const addLearnedWord = React.useCallback((id: string) => {
    setLearnedWordIds(prev => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
    
    setDailyStats(prev => ({
      ...prev,
      [todayStr]: {
        ...(prev[todayStr] || { date: todayStr, minutesStudied: 0, wordsLearned: 0, lessonsCompleted: 0 }),
        wordsLearned: (prev[todayStr]?.wordsLearned || 0) + 1
      }
    }));
  }, [todayStr]);

  const addCompletedLesson = React.useCallback((id: string) => {
    setCompletedLessonIds(prev => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
    
    setDailyStats(prev => ({
      ...prev,
      [todayStr]: {
        ...(prev[todayStr] || { date: todayStr, minutesStudied: 0, wordsLearned: 0, lessonsCompleted: 0 }),
        lessonsCompleted: (prev[todayStr]?.lessonsCompleted || 0) + 1
      }
    }));
  }, [todayStr]);

  const setTargetLevel = React.useCallback((level: string) => {
    setTargetLevelState(level);
  }, []);
  
  const setLastLessonId = React.useCallback((id: string) => {
    setLastLessonIdState(id);
  }, []);

  const todayStats = dailyStats[todayStr] || { date: todayStr, minutesStudied: 0, wordsLearned: 0, lessonsCompleted: 0 };
  const totalDaysActive = Object.keys(dailyStats).length;
  const totalWordsLearned = Object.values(dailyStats).reduce((sum, day) => sum + (day.wordsLearned || 0), 0);
  
  const contextValue = React.useMemo(() => ({
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
  }), [
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
  ]);

  return (
    <StudyProgressContext.Provider value={contextValue}>
      {children}
    </StudyProgressContext.Provider>
  );
};

