import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { StudyProgressProvider } from './contexts/StudyProgressContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Login } from './pages/Auth/Login';
import { StudentLayout } from './components/layout/StudentLayout';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { StudentDashboard } from './pages/Student/Dashboard';
import { Lessons } from './pages/Student/Lessons';
import { LessonDetail } from './pages/Student/Lessons/LessonDetail';
import { Vocabulary } from './pages/Student/Vocabulary';
import { Dictionary } from './pages/Student/Dictionary';
import { TOCFL } from './pages/Student/TOCFL';
import { MockTestSession } from './pages/Student/TOCFL/MockTestSession';
import { MockTestResultPage } from './pages/Student/TOCFL/MockTestResult';
import { InterviewPrep } from './pages/Student/Interview';
import { StudyPlan } from './pages/Student/StudyPlan';
import { TodayLearning } from './pages/Student/TodayLearning';
import { WeakWords } from './pages/Student/WeakWords';
import { Profile } from './pages/Student/Profile';
import { StudentAI } from './pages/Student/Assistant';
import { TeacherDashboard } from './pages/Teacher/Dashboard';
import { AdminDashboard } from './pages/Admin/Dashboard';
import { AdminClasses } from './pages/Admin/Classes';
import { AdminStudents } from './pages/Admin/Students';
import { StudentDetail } from './pages/Admin/Students/StudentDetail';
import { AdminVocabulary } from './pages/Admin/Vocabulary';
import { AdminLessons } from './pages/Admin/Lessons';
import { AdminMockTests } from './pages/Admin/TOCFL';
import { AdminDialogues } from './pages/Admin/Dialogues';
import { AdminReports } from './pages/Admin/Reports';
import { DailyPlanProvider } from './contexts/DailyPlanContext';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <StudyProgressProvider>
          <DailyPlanProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
            
            <Route path="/student" element={
              <ProtectedRoute allowedRoles={['student', 'admin']}>
                <StudentLayout />
              </ProtectedRoute>
            }>
              <Route index element={<StudentDashboard />} />
              <Route path="today" element={<TodayLearning />} />
              <Route path="weak-words" element={<WeakWords />} />
              <Route path="lessons" element={<Lessons />} />
              <Route path="lessons/:id" element={<LessonDetail />} />
              <Route path="vocabulary" element={<Vocabulary />} />
              <Route path="dictionary" element={<Dictionary />} />
              <Route path="ai" element={<StudentAI />} />
              <Route path="tocfl" element={<TOCFL />} />
              <Route path="interview" element={<InterviewPrep />} />
              <Route path="study-plan" element={<StudyPlan />} />
              <Route path="profile" element={<Profile />} />
            </Route>

            {/* Test Pages Full Screen without Navigation */}
            <Route path="/student/tocfl-mock-test/:testId" element={
              <ProtectedRoute allowedRoles={['student', 'admin']}>
                <MockTestSession />
              </ProtectedRoute>
            } />
            <Route path="/student/tocfl-result/:resultId" element={
              <ProtectedRoute allowedRoles={['student', 'admin']}>
                <MockTestResultPage />
              </ProtectedRoute>
            } />

          <Route path="/teacher" element={
            <ProtectedRoute allowedRoles={['teacher', 'admin']}>
              <DashboardLayout role="teacher" />
            </ProtectedRoute>
          }>
            <Route index element={<TeacherDashboard />} />
            <Route path="classes" element={<AdminClasses />} />
            <Route path="students" element={<AdminStudents />} />
            <Route path="students/:id" element={<StudentDetail />} />
          </Route>

          <Route path="/admin" element={
            <ProtectedRoute allowedRoles={['admin']}>
              <DashboardLayout role="admin" />
            </ProtectedRoute>
          }>
            <Route index element={<AdminDashboard />} />
            <Route path="classes" element={<AdminClasses />} />
            <Route path="students" element={<AdminStudents />} />
            <Route path="students/:id" element={<StudentDetail />} />
            <Route path="vocabulary" element={<AdminVocabulary />} />
            <Route path="lessons" element={<AdminLessons />} />
            <Route path="mock-tests" element={<AdminMockTests />} />
            <Route path="dialogues" element={<AdminDialogues />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="settings" element={<div className="p-4">Settings (WIP)</div>} />
          </Route>

            <Route path="/" element={<ProtectedRoute><Navigate to="/student" replace /></ProtectedRoute>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          </DailyPlanProvider>
        </StudyProgressProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
