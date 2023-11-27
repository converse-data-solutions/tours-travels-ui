"use client";
import React, { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const SignInAndSignOut = () => {
  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    setIsLoggedIn(!!storedAccessToken);
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const SignIn = () => {
    if (!isLoggedIn) {
      window.location.replace("/signin");
    }
  };

  const SignOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    setAlertMessage("You are signed out successfully!");

    setTimeout(() => {
      setAlertMessage("");
      window.location.replace("/");
    }, 2000);
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
