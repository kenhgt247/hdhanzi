import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';
import { DailyPlan, DailyTask } from '../types/study';
import { studyPlanService, getTodayDateString } from '../services/studyPlanService';

interface DailyPlanContextData {
  plan: DailyPlan | null;
  loading: boolean;
  updateTaskProgress: (taskId: string, completedCount: number) => Promise<void>;
  refreshPlan: () => Promise<void>;
}

const DailyPlanContext = createContext<DailyPlanContextData | undefined>(undefined);

export const useDailyPlan = () => {
  const context = useContext(DailyPlanContext);
  if (!context) {
    throw new Error('useDailyPlan must be used within a DailyPlanProvider');
  }
  return context;
};

export const DailyPlanProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [plan, setPlan] = useState<DailyPlan | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchPlan = async () => {
    try {
      setLoading(true);
      const userId = user?.id || 'guest';
      const level = user?.targetLevel || 'Beginner';
      const currentPlan = await studyPlanService.getPlan(userId, level);
      setPlan(currentPlan);
    } catch (error) {
      console.error('Failed to fetch daily plan:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlan();
  }, [user?.id]);

  const updateTaskProgress = async (taskId: string, completedCount: number) => {
    if (!plan) return;
    try {
      const userId = user?.id || 'guest';
      const updatedPlan = await studyPlanService.updateTaskProgress(userId, plan.date, taskId, completedCount);
      if (updatedPlan) {
        setPlan(updatedPlan);
      }
    } catch (error) {
      console.error('Failed to update task progress:', error);
    }
  };

  const refreshPlan = async () => {
    await fetchPlan();
  };

  return (
    <DailyPlanContext.Provider value={{ plan, loading, updateTaskProgress, refreshPlan }}>
      {children}
    </DailyPlanContext.Provider>
  );
};
