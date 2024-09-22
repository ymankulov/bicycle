import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB71EQbcG_4XtRyInzlUemAifSOtYSqHAY",
  authDomain: "authregister-34dbe.firebaseapp.com",
  projectId: "authregister-34dbe",
  storageBucket: "authregister-34dbe.appspot.com",
  messagingSenderId: "636858870147",
  appId: "1:636858870147:web:cabefd6520e5ac94752eb6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
