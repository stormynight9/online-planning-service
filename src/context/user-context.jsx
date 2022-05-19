import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const UserContext = createContext({
    user: null,
    setUser: () => { },
    isLoaded: false,
    signIn: () => { },
    signOut: () => { },
});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, res => {
            res ? setUser(res) : setUser(null)
            setError("")
            setLoading(false)
        })
        return () => unsubscribe
    }, [])

    const registerUser = (email, name, password) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                return updateProfile(auth, { displayName: name })
                    .then(() => {
                        setLoading(false);
                        setUser(auth.currentUser);
                    })
                    .catch(() => {
                        setLoading(false);
                        setError("Error while updating profile");
                    })
            }).then(res => console.log(res))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }

    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(res => console.log(res))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false));
    }

    const logoutUser = () => {
        signOut(auth)
    }


    return (
        <UserContext.Provider value={{
            user,
            loading,
            error,
            registerUser,
            loginUser,
            logoutUser
        }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
