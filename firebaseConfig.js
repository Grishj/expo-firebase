// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqY_pTpX-VuFPZ6-zZmu3NBfZljLZpSpg",
  authDomain: "expo-firebase-e18e6.firebaseapp.com",
  projectId: "expo-firebase-e18e6",
  storageBucket: "expo-firebase-e18e6.firebasestorage.app",
  messagingSenderId: "429267301029",
  appId: "1:429267301029:web:d5c1de9266636d88bf534c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
