import React from "react";
import { Authorization } from "../features/authorization/Authorization";

export const LogIn = (props) => {
  const { logIn, dispatch } = props;

  if (logIn) {
    return (
      <h1 style={{ width: 460, margin: "auto", marginTop: 200 }}>
        You've login.
      </h1>
    );
  }
  return (
    <div style={{ marginTop: 200 }}>
      <Authorization logIn={logIn} dispatch={dispatch} />
    </div>
  );
};
