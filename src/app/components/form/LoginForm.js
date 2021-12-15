import * as React from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";

import { useState } from "react";
import verified from "../../routes/verifyToken";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export const LoginForm = (props) => {
  const {
    dispatch,
    token,
    setToken,
    handleNewUser,
    handleLoginSubmit,
    errorMessage,
    setEmail,
    setPassword,
  } = props;

  return (
    <div className="authForm">
      <div className="userOnBoard">
        <form onSubmit={handleLoginSubmit}>
          <h1 style={{ marginBottom: 30, textAlign: "center" }}>Log in</h1>
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
          <p style={{ height: 22, color: "red" }}>{errorMessage}</p>
          <a href="#" style={{ marginBottom: 20 }}>
            Forget password
          </a>
          <Button size="large" type="submit" variant="contained">
            Log in
          </Button>
        </form>
        {/* <Button
          size="large"
          variant="outlined"
          //  startIcon={<DeleteIcon />}
        >
          Login with Google
        </Button> */}
        <p>{token}</p>

        <p>
          New User?
          <Link to="/signup" onClick={handleNewUser}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};
