import React from "react";
import { Authorization } from "../features/authorization/Authorization";

export const LogIn = (props) => {
  const { logIn, dispatch, setToken, token } = props;

  return (
    <div>
      {token ? (
        <h1 style={{ width: 460, margin: "auto", marginTop: 100 }}>
          You've Logged in.
        </h1>
      ) : (
        <Authorization logIn={logIn} dispatch={dispatch} setToken={setToken} />
      )}
    </div>
  );
};
