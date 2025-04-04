/* eslint-disable react/prop-types */
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import AuthContext from "./AuthContext";
  import { useEffect, useState } from "react";
  import axios from "axios";
import auth from "@/firebase/firebase.init";
  
  const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    //register user
    const userRegister = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    // update profile
    const profileUpdate = (name, photo) => {
      return updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    };
  
    //User Login
    const userLogin = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    //google login
    const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
  
    //logOut
    const userLogout = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    //-------
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        // console.log("from authProvider", currentUser);
  
        if (currentUser?.email) {
          setUser(currentUser);
          // console.log(currentUser)
           // save user info in db
        await axios.post(
          `${import.meta.env.VITE_API_URL}/users/${currentUser?.email}`,
          {
            name: currentUser?.displayName,
            image: currentUser?.photoURL,
            email: currentUser?.email,
          }
        )
          //generate token
          // const { data } = await axios.post(
          //   `${import.meta.env.VITE_API_URL}/jwt`,
          //   {
          //     email: currentUser?.email,
          //   },
          //   { withCredentials: true }
          // );
  
         
        } else {
          setUser(currentUser);
          // const { data } = await axios.get(
          //   `${import.meta.env.VITE_API_URL}/logout`,
  
          //   { withCredentials: true }
          // );
        }
        setLoading(false);
      });
      return () => {
        unsubscribe();
      };
    }, []);
  
    const authInfo = {
      user,
      setUser,
      loading,
      userRegister,
      profileUpdate,
      userLogin,
      userLogout,
      googleLogin,
    };
  
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;