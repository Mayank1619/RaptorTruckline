// Firebase Configuration
// TODO: Replace with your actual Firebase credentials from Firebase Console
// Steps:
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project or select existing
// 3. Add Web app to project
// 4. Copy the config object below and replace the placeholder values

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || 'YOUR_API_KEY',
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || 'your-project.firebaseapp.com',
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || 'your-project-id',
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || 'your-project.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || 'your-sender-id',
  appId: process.env.REACT_APP_FIREBASE_APP_ID || 'your-app-id',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Services
// These will be used for authentication, database, and file storage
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

// TODO: Implement these functions as needed
// - User authentication (signup, login, logout)
// - Contact form submissions
// - Career application submissions
// - Real-time chat for dispatch
// - Document storage for certifications

export default app
