import * as React from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
import { Stack } from "@mui/material";

import { useState } from "react";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      Content_Type: "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export const SignUp = (props) => {
  const { dispatch, setToken } = props;

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      userName,
      password,
    });
    setToken(token);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: "auto",
          width: 440,
          height: 560,
        },
      }}
    >
      <Paper elevation={0} style={{ backgroundColor: "rgb(237, 238, 238)" }}>
        <Stack
          spacing={2}
          style={{
            width: 440,
            height: 560,
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "3rem",
          }}
        >
          <h1>Login to Your Account</h1>
          <form
            onSubmit={handleLoginSubmit}
            style={{
              width: "100%",
              height: 280,
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <TextField
              required
              name="email"
              id="outlined-helperText"
              label="Email"
              //defaultValue="token"
              helperText="token"
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              required
              name="password"
              id="outlined-helperText"
              label="Password"
              //defaultValue="test123"
              helperText="test123"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" style={{ height: 50 }} variant="contained">
              Log In
            </Button>
            <a href="#">sign up</a>
          </form>
          <Button type="submit" style={{ height: 50 }} variant="outlined">
            Login with google
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

Authorization.propTypes = {
  setToken: PropTypes.func.isRequired,
};
