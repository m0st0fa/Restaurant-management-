import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/Firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null)
const Auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(Auth, provider)
    }
    const logout = () => {
        setLoading(true)
        return signOut(Auth)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(Auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, currentUser => {
            setUser(currentUser)
            // console.log('current user', currentUser)
            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                        setLoading(false)
                    })
            }
            else {
                // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
                localStorage.removeItem('access-token');
                setLoading(false)
            }
           
        })
        return () => {
            return unsubscribe
        }
    }, [axiosPublic])
    const AuthInfo = {
        user,
        loading,
        createUser,
        signIn,
        logout,
        updateUserProfile,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;