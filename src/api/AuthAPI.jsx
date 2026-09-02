import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export const LoginAPI = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const RegisterAPI = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
