import React from "react";
import { Authorization } from "../features/authorization/Authorization";
import login from "../../images/loginPage.jpg";

export const LogIn = (props) => {
  const { logIn, dispatch, setToken, token } = props;

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%", height: "100vh", overflow: "hidden" }}>
        <img src={login} style={{ width: "100%" }}></img>
      </div>

      {token ? (
        <div>
          <h1
            className="pageTitle"
            style={{ width: 460, margin: "auto", marginTop: 100 }}
          >
            You've Logged in.
          </h1>
          <button className="btn">Go Shopping</button>
        </div>
      ) : (
        <Authorization
          logIn={logIn}
          dispatch={dispatch}
          setToken={setToken}
          token={token}
        />
      )}
    </div>
  );
};
