import React, { createContext, useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const ProviderLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
        },[]);

    const authInfo = { 
        user, 
        ProviderLogin,
    
    };
    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;