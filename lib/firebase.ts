// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYwSV04x5gu3cNYzpVY363GrN01cslcrw",
  authDomain: "obx-studio.firebaseapp.com",
  projectId: "obx-studio",
  storageBucket: "obx-studio.firebasestorage.app",
  messagingSenderId: "483149842894",
  appId: "1:483149842894:web:d593fb64429378f962439f",
  measurementId: "G-1TWLZG6CN2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics };
