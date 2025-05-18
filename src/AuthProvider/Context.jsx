import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/FirebaseConfig.';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const Context = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] =useState(true)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser=>{
            setUser(currentUser)
            setLoading(false)
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
 


    const authInfo ={
        user,
        loading,
        createUser,
        login,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;