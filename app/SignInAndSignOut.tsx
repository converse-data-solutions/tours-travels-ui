"use client";
import React, { useState, useEffect } from "react";

const SignInAndSignOut = () => {
  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    setIsLoggedIn(!!storedAccessToken);
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const SignIn = () => {
    if (!isLoggedIn) {
      window.location.replace("/signin");
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
