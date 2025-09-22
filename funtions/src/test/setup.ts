// Jest setup file for Firebase Functions testing
import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK for testing
if (!admin.apps.length) {
  admin.initializeApp({
    projectId: 'healthtech-backend-test',
  });
}
