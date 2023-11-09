'use client'
import React, { useState } from "react";
const SignInAndSignOut = () => {
  const storedAccessToken = localStorage.getItem("accessToken");
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!storedAccessToken 
  );
  const SignIn = () => {
    

    if(storedAccessToken === null){
      window.location.replace('/signin')
    } 
    
  };

  const SignOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
  };

  return (
    <div className="auth-component">
      {!isLoggedIn ? (
        <div>
          <button onClick={SignIn}>Sign In</button>
        </div>
      ) : (
        <div>
          <button onClick={SignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default SignInAndSignOut;
