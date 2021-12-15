import React from "react";
import { useState } from "react";
import { LoginForm } from "../../components/form/LoginForm";
import { SignUpForm } from "../../components/form/SignUpForm";
import { Routes, Route } from "react-router";

async function loginUser(credentials) {
  const response = await fetch("/user/login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(credentials),
  });
  const message = await response.text();

  if (response.ok) {
    //token
    console.log(message);
    return { authToken: message };
  } else {
    return { error: message };
  }
}
//user sign up
async function signupUser(credentials) {
  const response = await fetch("/user/register", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(credentials),
  });
  const message = await response.text();
  console.log(message);

  if (response.ok) {
    console.log(message);
    return { userInfo: message };
  } else {
    return { error: message };
  }
}

export const Authorization = (props) => {
  const { dispatch, token, setToken } = props;
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { authToken, error } = await loginUser({
      email,
      password,
    });
    setToken(authToken);
    setErrorMessage(error);
    console.log(token);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const { userInfo, error } = await signupUser({
      name,
      email,
      password,
    });
    if (!error) {
      const { authToken, error } = await loginUser({
        email,
        password,
      });
      setToken(authToken);
      setErrorMessage(error);
      console.log(token);
    } else {
      setErrorMessage(error);
    }
  };
  const [isNewUser, setIsNewUser] = useState(false);
  const handleReturnUser = () => {
    setIsNewUser(false);
  };
  const handleNewUser = () => {
    setIsNewUser(true);
  };

  return !isNewUser ? (
    <LoginForm
      handleNewUser={handleNewUser}
      handleLoginSubmit={handleLoginSubmit}
      setToken={setToken}
      token={token}
      dispatch={dispatch}
      errorMessage={errorMessage}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  ) : (
    <SignUpForm
      handleReturnUser={handleReturnUser}
      handleSignupSubmit={handleSignupSubmit}
      dispatch={dispatch}
      errorMessage={errorMessage}
      setEmail={setEmail}
      setPassword={setPassword}
      setName={setName}
    />
  );
};
