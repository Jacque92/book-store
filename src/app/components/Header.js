import * as React from "react";
import { Link, useParams } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useState, useRef } from "react";

const navStyle = {};

export const Header = ({ cartAmount }) => {
  const refContainer = useRef(null);

  const initialState = {
    Home: false,
    Cart: false,
    LogIn: false,
  };

  const [linkState, setLinkState] = useState({ ...initialState, Home: true });

  const handleStateChange = (e) => {
    const activeLabel = e.target.innerHTML;
    setLinkState({ ...initialState, [activeLabel]: true });
  };

  return (
    <header>
      <nav style={navStyle}>
        <h1>
          <Link
            key="home"
            to="/"
            style={{
              textDecoration: "none",
              color: "rgb(59, 82, 63)",
            }}
          >
            Logo
          </Link>
        </h1>

        <ul>
          <li>
            <Badge>
              <Link
                onClick={handleStateChange}
                to="/"
                style={{
                  textDecoration: "none",
                  color: "rgb(59, 82, 63)",
                  borderBottom: linkState.Home
                    ? "1px solid rgb(59, 82, 63)"
                    : "none",
                  padding: "0.5rem 2.5rem",
                }}
              >
                Home
              </Link>
            </Badge>
          </li>
          <li>
            <Badge badgeContent={cartAmount} color="primary">
              <Link
                onClick={handleStateChange}
                to="/cart"
                style={{
                  textDecoration: "none",
                  color: "rgb(59, 82, 63)",
                  borderBottom: linkState.Cart
                    ? "1px solid rgb(59, 82, 63)"
                    : "none",
                  padding: "0.5rem 2.5rem",
                }}
              >
                Cart
              </Link>
            </Badge>
          </li>
          <li>
            <Badge>
              <Link
                onClick={handleStateChange}
                to="/logIn"
                style={{
                  textDecoration: "none",
                  color: "rgb(59, 82, 63)",
                  borderBottom: linkState.LogIn
                    ? "1px solid rgb(59, 82, 63)"
                    : "none",
                  padding: "0.5rem 2.5rem",
                }}
              >
                LogIn
              </Link>
            </Badge>
          </li>
        </ul>
      </nav>
    </header>
  );
};
