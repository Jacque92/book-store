import * as React from "react";

import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";
import verified from "../../routes/verifyToken";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export const SignUpForm = (props) => {
  const {
    dispatch,
    token,
    setToken,
    handleReturnUser,
    handleSignupSubmit,
    errorMessage,
    setEmail,
    setPassword,
    setName,
  } = props;

  return (
    <div className="authForm">
      <div className="userOnBoard">
        <form onSubmit={handleSignupSubmit}>
          <h1 style={{ marginBottom: 30, textAlign: "center" }}>Sign up</h1>
          <TextField
            required
            name="userName"
            id="outlined-helperText"
            label="User name"
            //defaultValue="test123"
            // helperText="test123"
            style={{ marginBottom: 30 }}
            onChange={(e) => setName(e.target.value)}
          />
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
            style={{ marginBottom: 30 }}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p style={{ height: 22, color: "red" }}>{errorMessage}</p>
          <Button size="large" type="submit" variant="contained">
            Sign up
          </Button>
        </form>
        {/* <Button
          size="large"
          variant="outlined"
          //  startIcon={<DeleteIcon />}
        >
          Signup with Google
        </Button> */}
        <p>{token}</p>

        <p>
          Have an account?
          <Link to="/login" onClick={handleReturnUser}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

SignUpForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};
