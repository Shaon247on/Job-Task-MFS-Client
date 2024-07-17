import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = new createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
    const signUp = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password) 
    }

    const profileUpdate = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    useEffect(()=>{
        const UnSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            UnSubscribe()
        }
    },[])
    
    const info = {
        signUp,
        signIn,
        user,
        loading,
        profileUpdate
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;