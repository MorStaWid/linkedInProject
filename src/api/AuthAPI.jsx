import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const LoginAPI = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const RegisterAPI = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const GoogleSignInAPI = async (email, password) => {
  try{
    let googleProvider = new GoogleAuthProvider();
    let res = signInWithPopup(auth, googleProvider);
    return res;
  } catch (err) {
    return err;
  }
};