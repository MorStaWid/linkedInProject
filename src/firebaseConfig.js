// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

//Firebase configs
const firebaseConfig = {
  apiKey: "AIzaSyDjnIgbjckPMpc9sVKVEn1vwAZmPuDU3zk",
  authDomain: "linkedinproject-f53fa.firebaseapp.com",
  projectId: "linkedinproject-f53fa",
  storageBucket: "linkedinproject-f53fa.firebasestorage.app",
  messagingSenderId: "983843805474",
  appId: "1:983843805474:web:87c0f5ad351abe7b962d7b",
  measurementId: "G-1ETM04JK8X"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

isSupported().then((supported) => {
  if (supported) getAnalytics(app);
});