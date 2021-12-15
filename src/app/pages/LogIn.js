import React from "react";
import { Authorization } from "../features/authorization/Authorization";
import Button from "@mui/material/Button";
import login from "../../images/loginPage.jpg";
import { Link } from "react-router-dom";

export const LogIn = (props) => {
  const { logIn, dispatch, setToken, token } = props;

  return (
    <div className="login" style={{ display: "flex" }}>
      <div style={{ width: "50%", height: "100vh", overflow: "hidden" }}></div>

      {token ? (
        <div>
          <h1
            className="pageTitle"
            style={{ width: 460, margin: "auto", marginTop: 100 }}
          >
            You've Logged in.
          </h1>
          <Link to="/shop" style={{ textDecoration: "none" }}>
            <Button size="large" type="submit" variant="contained">
              Shop Now
            </Button>
          </Link>
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
