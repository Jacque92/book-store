import * as React from "react";

import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

import { useState } from "react";
import verified from "../../routes/verifyToken";

async function loginUser(credentials) {
  const response = await fetch("/user/login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(credentials),
  });
  const message = await response.text();
  const header = await response.header;

  if (response.ok) {
    //token
    console.log(message);
    return { authToken: message };
  } else {
    return { error: message };
  }
}

export const Authorization = (props) => {
  const { dispatch, token, setToken } = props;
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

  return (
    <div className="authForm">
      <h1 className="pageTitle">Login to Your Account</h1>
      <div className="userOnBoard">
        <form onSubmit={handleLoginSubmit}>
          <TextField
            required
            name="email"
            id="outlined-helperText"
            label="Email"
            //defaultValue="token"
            // helperText="token"
            style={{ marginBottom: 30 }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            name="password"
            id="outlined-helperText"
            label="Password"
            //defaultValue="test123"
            // helperText="test123"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={{ marginTop: "0.5rem", height: 24, color: "red" }}>
            {errorMessage}
          </p>

          <button
            className="btn"
            type="submit"
            style={{ marginLeft: 0, height: 50 }}
          >
            Log in
          </button>

          <a href="#">Register</a>
        </form>
        <button
          className="btn"
          type="submit"
          style={{ height: 50, marginLeft: 0 }}
        >
          Login with google
        </button>
        <p>{token}</p>
      </div>
    </div>
  );
};

Authorization.propTypes = {
  setToken: PropTypes.func.isRequired,
};
