import React, { useEffect, useState } from "react";
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";
import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);

    // Initializing the providers
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Function to create a new user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Function to login a user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Function to sign in with Google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // Function to sign in with GitHub
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
    };

    // Function to log out a user
    const logOut = () => {
        return signOut(auth);
    };

    // Function to update user profile
    const updateUserProfile = (name, photo) => {
        console.log(name, photo);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };

    // useEffect hook to track the user's auth state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            setUser(loggedUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    // Creating an object containing all the auth info
    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        googleSignIn,
        githubSignIn,
        updateUserProfile,
    };

    // Rendering the component with the auth info passed through the context
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
