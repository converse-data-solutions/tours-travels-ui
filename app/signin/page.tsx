"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import FormInput from "./FormInput";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Password } from "@mui/icons-material";
import { signIn } from "next-auth/react";
import { getSession } from "next-auth/react";

const SignInForm: React.FC = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const errorMessage = validateInput(name, value);

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const validateInput = (fieldName: string, value: string) => {
    let errorMessage = "";

    if (fieldName === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.match(emailRegex)) {
        errorMessage = "Invalid email address";
      }
    }

    if (fieldName === "password") {
      if (value.length < 6) {
        errorMessage = "Password must be at least 6 characters long";
      } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        errorMessage = "Password must contain at least one special character";
      } else if (!/\d/.test(value)) {
        errorMessage = "Password must contain at least one number";
      }
    }

    if (
      isSignUp &&
      fieldName === "confirmPassword" &&
      value !== data.password
    ) {
      errorMessage = "Passwords do not match";
    }

    return errorMessage;
  };

  const session = getSession();

  const SignIn = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/user/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (response.status === 200) {
        const user = await response.json();
        console.log(user);

        await signIn("credentials", {
          redirect: false,
          username: user.data.email,
          password: user.data.password,
          role: user.data.role_name,
          id: user.data.id,
          file_name: user.data.file_name,
        });

        console.log(user.data);

        localStorage.setItem("accessToken", user.accessToken);
        localStorage.setItem("refreshToken", user.refreshToken);
        setIsSuccess(true);

        window.location.replace("/admin/users");
      } else if (response.status === 404) {
        setError("User not found. Please check your email and password.");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while signing in.");
    }
  };
  const signUp = async () => {
    if (!data.email || !data.password) {
      setError("Both email and password are required.");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DOMAIN}/user/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authourization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        },
      );

      if (response.status === 200) {
        const user = await response.json();
        localStorage.setItem("token", user.token);
        setSuccessMessage("Signup successful!");
        setTimeout(() => {
          window.location.replace("/");
        }, 2000);
      } else {
        setError("Error occurred during sign-up. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while signing up.");
    }
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSignUp) {
      if (data.password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      await signUp();
    } else {
      if (!data.email || !data.password) {
        setError("Both email and password are required.");
        return;
      }

      await SignIn();
    }
  };

  return (
    <div className="lg:my-40 lg:mx-96 p-10 bg-white shadow-md gap-4 rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="m-2">
          <FormInput
            type="email"
            name="email"
            label=""
            value={data.email}
            onChange={handleInputChange}
            placeholder="Email"
            required={true}
          />
          <div className="text-red-500">{errors.email}</div>
        </div>
        <div className="m-2">
          <FormInput
            type="password"
            label=""
            name="password"
            value={data.password}
            onChange={handleInputChange}
            placeholder="Password"
            required={true}
          />
          <div className="text-red-500">{errors.password}</div>
        </div>

        {isSignUp && (
          <div className="m-2">
            <FormInput
              type="password"
              label=""
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required={true}
            />
          </div>
        )}
        <div className="flex text-center justify-center ">
          <button
            type="submit"
            className="bg-[hsl(180,82%,35%)] text-white py-3 px-4 rounded-lg hover:bg-yellow-400 m-4"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </div>
        <div className="flex justify-center ">
          {isSuccess && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="success" onClose={() => setIsSuccess(true)}>
                You are signed in successfully!
              </Alert>
            </Stack>
          )}
        </div>

        <div className="flex justify-center">
          {successMessage && (
            <div style={{ color: "green" }}>{successMessage}</div>
          )}
          {error && <div style={{ color: "red" }}>{error}</div>}
        </div>
      </form>
      <div className="flex justify-end px-8">
        {" "}
        If you don't have an account?{" "}
        <button
          className="text-blue-600 px-2"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {" "}
          {isSignUp ? "Sign In" : "Sign Up"}
        </button>{" "}
        here.
      </div>
    </div>
  );
};
export default SignInForm;
