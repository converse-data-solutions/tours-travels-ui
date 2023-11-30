"use client";
import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { signIn, signOut,useSession} from 'next-auth/react';
import { getSession } from "next-auth/react";
import Link from "next/link";
import { User } from "next-auth";
const  SignInAndSignOut = () => {
  const { data: session,status } = useSession();
  const userEmail = session?.user?.email;
  
   useEffect(() => {
   const storedAccessToken = localStorage.getItem("accessToken");
     setIsLoggedIn(!!storedAccessToken);
   }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  if (status === 'loading') {
    // Session is loading
    return <p>Loading...</p>;
  }

  if (status === 'authenticated') {
    // User is authenticated, you can access session data
    console.log('Authenticated user:', session);
   console.log(".....",userEmail)
   
    
    
  } else {
    // User is not authenticated
    console.log('User not authenticated');
   
  }

 
  

  const SignOut = async() => {
   
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    setAlertMessage("You are signed out successfully!");
    await signOut();
    window.location.replace("/")
    

    // setTimeout(() => {
    //   setAlertMessage("");
    //   window.location.replace("/");
    // }, 2000);
    
  };

  return (
    <div className="auth-component">
     
      {status === 'authenticated'? (
        <div>
        <button onClick={SignOut}>Sign Out</button>
      
        </div>
        
      ) : (
        <div>
          
          <Link href={'/signin'}> <button>Sign In</button></Link> 
        </div>
      )}
      <div className="text-center flex justify-center items-center">
        <Stack sx={{ width: "100%" }} spacing={2}>
          {alertMessage && (
            <Alert onClose={() => setAlertMessage("")}>{alertMessage}</Alert>
          )}
        </Stack>
      </div>
    </div>
  );
};

export default SignInAndSignOut;
