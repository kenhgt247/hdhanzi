import { doc, getDoc, setDoc, serverTimestamp, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../lib/firebase';
import { DailyPlan, DailyTask, TaskType } from '../types/study';

const STORAGE_KEY = 'hd_chinese_daily_plan';

export const getTodayDateString = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const DEFAULT_TASKS: Omit<DailyTask, 'id'>[] = [
  { type: 'new_vocab', title: 'Học 20 từ mới', targetCount: 20, completedCount: 0, status: 'not_started', points: 100 },
  { type: 'review_vocab', title: 'Ôn 30 từ cũ', targetCount: 30, completedCount: 0, status: 'not_started', points: 150 },
  { type: 'listening', title: 'Làm 1 bài nghe', targetCount: 1, completedCount: 0, status: 'not_started', points: 50 },
  { type: 'quiz', title: 'Làm 1 bài quiz', targetCount: 1, completedCount: 0, status: 'not_started', points: 50 },
  { type: 'speaking', title: 'Luyện nói 5 câu', targetCount: 2, completedCount: 0, status: 'not_started', points: 80 },
  { type: 'lesson', title: 'Hoàn thành 1 bài học nhỏ', targetCount: 1, completedCount: 0, status: 'not_started', points: 120 },
];

export const generateDefaultPlan = async (userId: string | 'guest', date: string, level: string = 'Beginner'): Promise<DailyPlan> => {
  let tasks = [...DEFAULT_TASKS];

  // Check for weak words if not guest
  if (userId !== 'guest') {
    try {
      const q = query(
        collection(db, 'users', userId, 'weakWords'),
        where('strengthLevel', 'in', ['weak', 'medium'])
      );
      const weakWordsSnap = await getDocs(q);
      if (!weakWordsSnap.empty) {
        tasks.push({
          type: 'weak_words',
          title: `Ôn tập ${weakWordsSnap.size} từ yếu`,
          targetCount: weakWordsSnap.size,
          completedCount: 0,
          status: 'not_started',
          points: weakWordsSnap.size * 10
        });
      }
    } catch (e) {
      console.error("Error fetching weak words for plan:", e);
    }
  }

  const finalTasks = tasks.map((t, i) => ({
    ...t,
    id: `task_${i}_${Date.now()}`
  })) as DailyTask[];

  return {
    date,
    level,
    tasks: finalTasks,
    totalTasks: finalTasks.length,
    completedTasks: 0,
    progressPercent: 0,
    totalPoints: 0,
    studyMinutes: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
};

export const studyPlanService = {
  async getPlan(userId: string | 'guest', level: string = 'Beginner'): Promise<DailyPlan> {
    const today = getTodayDateString();

    if (userId === 'guest') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const plan = JSON.parse(stored) as DailyPlan;
        if (plan.date === today) return plan;
      }
      const newPlan = await generateDefaultPlan('guest', today, level);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newPlan));
      return newPlan;
    }

    // Firebase flow
    const planRef = doc(db, 'users', userId, 'dailyPlans', today);
    try {
      const planSnap = await getDoc(planRef);

      if (planSnap.exists()) {
        return planSnap.data() as DailyPlan;
      }

      const newPlan = await generateDefaultPlan(userId, today, level);
      // Use serverTimestamp for Firebase
      const firebasePlan = {
        ...newPlan,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };
      await setDoc(planRef, firebasePlan);
      return newPlan;
    } catch (error) {
      handleFirestoreError(error, OperationType.GET, `users/${userId}/dailyPlans/${today}`);
      return await generateDefaultPlan('guest', today, level);
    }
  },

  async updateTaskProgress(userId: string | 'guest', date: string, taskId: string, completedCount: number): Promise<DailyPlan | null> {
    let plan: DailyPlan | null = null;

    if (userId === 'guest') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        plan = JSON.parse(stored) as DailyPlan;
      }
    } else {
      const planRef = doc(db, 'users', userId, 'dailyPlans', date);
      try {
        const planSnap = await getDoc(planRef);
        if (planSnap.exists()) {
          plan = planSnap.data() as DailyPlan;
        }
      } catch (error) {
        handleFirestoreError(error, OperationType.GET, `users/${userId}/dailyPlans/${date}`);
      }
    }

    if (!plan) return null;

    const taskIndex = plan.tasks.findIndex(t => t.id === taskId);
    if (taskIndex === -1) return null;

    const task = plan.tasks[taskIndex];
    task.completedCount = Math.min(completedCount, task.targetCount);
    
    if (task.completedCount >= task.targetCount) {
      task.status = 'completed';
    } else if (task.completedCount > 0) {
      task.status = 'in_progress';
    } else {
      task.status = 'not_started';
    }

    // Recalculate plan stats
    plan.completedTasks = plan.tasks.filter(t => t.status === 'completed').length;
    plan.progressPercent = Math.round((plan.completedTasks / plan.totalTasks) * 100);
    plan.totalPoints = plan.tasks.reduce((sum, t) => sum + (t.status === 'completed' ? t.points : 0), 0);
    const updatedAt = userId === 'guest' ? new Date().toISOString() : serverTimestamp();

    if (userId === 'guest') {
      plan.updatedAt = updatedAt;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(plan));
    } else {
      const planRef = doc(db, 'users', userId, 'dailyPlans', date);
      try {
        await updateDoc(planRef, {
          tasks: plan.tasks,
          completedTasks: plan.completedTasks,
          progressPercent: plan.progressPercent,
          totalPoints: plan.totalPoints,
          updatedAt: updatedAt
        });
      } catch (error) {
        handleFirestoreError(error, OperationType.WRITE, `users/${userId}/dailyPlans/${date}`);
      }
    }

    return plan;
  },

  async syncLocalPlanWithFirebase(userId: string, level: string) {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return;

    const localPlan = JSON.parse(stored) as DailyPlan;
    const today = getTodayDateString();

    if (localPlan.date === today) {
      const planRef = doc(db, 'users', userId, 'dailyPlans', today);
      try {
        const planSnap = await getDoc(planRef);
        
        // Only sync if Firebase doesn't have a more advanced plan for today
        if (!planSnap.exists() || (planSnap.data() as DailyPlan).progressPercent < localPlan.progressPercent) {
          await setDoc(planRef, {
            ...localPlan,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
          });
        }
        localStorage.removeItem(STORAGE_KEY);
      } catch (error) {
        handleFirestoreError(error, OperationType.WRITE, `users/${userId}/dailyPlans/${today}`);
      }
    }
  }
};
