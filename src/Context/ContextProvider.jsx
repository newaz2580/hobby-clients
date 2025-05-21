import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const ContextProvider = ({children}) => {
    const [user,setUser]=useState(null)
       const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }
    const provider = new GoogleAuthProvider();
    const signWithGoogle=()=>{
        return signInWithPopup(auth,provider)
    }
   const logoutUser=()=>{
    return signOut(auth)
   }

   const updateUser=(updateData)=>{
    return updateProfile(auth.currentUser,updateData)
   }
    useEffect(()=>{
        const Unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
            setUser(currentUser)
              setLoading(false)
        }
        })
        return ()=>{
            Unsubscribe()
        }
    },[])
    const userInfo={
        createUser,
        loginUser,
        signWithGoogle,
        user,
        logoutUser,
        loading,
        updateUser
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default ContextProvider;