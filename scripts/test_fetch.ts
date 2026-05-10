import { fetchLessons } from './src/services/lessonService';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import dotenv from 'dotenv';
dotenv.config();

// Since we run in node, we need to polyfill fetch if needed, and import db directly
// Wait, the previous debug_fb.js could not connect due to missing .env in workspace root.
