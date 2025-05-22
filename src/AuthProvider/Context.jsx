import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/FirebaseConfig.';
import { GoogleAuthProvider } from 'firebase/auth';
import axios from 'axios';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const Context = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] =useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser)
            if(currentUser){
                axios.post(`https://petuk-palace-server.vercel.app/authentication`, {email: currentUser?.email})
                .then(res => {
                    if(res.data){
                        localStorage.setItem('access-token', res?.data?.token)
                        setLoading(false)
                    }
                }) 
            }
            else{
                localStorage.removeItem('access-token')
                setLoading(false)
            }
        });

        return ()=>{
            unsubscribe()
        }
    }, []);

  // registration
    const createUser =( email , password ) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
   // login 
    const login = ( email, password ) =>{
        setLoading(true)    
        return signInWithEmailAndPassword( auth, email, password)
    }

    // Logout
    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    // google login

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
 


    const authInfo ={
        user,
        loading,
        createUser,
        login,
        logout,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;