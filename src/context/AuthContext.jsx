import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../firebase";
import { useSelector } from "react-redux";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const initialState = {
  user: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const AuthContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const googleProvider = new GoogleAuthProvider();

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function getUser() {
    return onAuthStateChanged(auth, (user) => {
      dispatch({ type: "GET_USER", payload: user });
    });
  }
  async function signInWithGoogle() {
    try {
      return await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error.message);
    }
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    getUser();
  }, []);

  const value = {
    register,
    signIn,
    user: state.user,
    signInWithGoogle,
    logOut,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContext;
