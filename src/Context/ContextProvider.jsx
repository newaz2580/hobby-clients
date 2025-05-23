import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const syncTheme = (value) => {
    if (value) {
      document.querySelector("body").classList.add("dark");
      document.querySelector("body").classList.remove("light");
    } else {
      document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");
    }
  };

  const toggleTheme = (value) => {
    syncTheme(value);
    const nextTheme = value ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const provider = new GoogleAuthProvider();
  const signWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };
  const logoutUser = () => {
    return signOut(auth);
  };

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    syncTheme(theme == "dark");

    return () => unsubscribe();
  }, [theme]);

  const userInfo = {
    createUser,
    loginUser,
    signWithGoogle,
    user,
    logoutUser,
    loading,
    updateUser,
    toggleTheme,
    theme,
  };
  return (
    <div className="App" id={theme}>
      <AuthContext value={userInfo}>{children}</AuthContext>;
    </div>
  );
};

export default ContextProvider;
