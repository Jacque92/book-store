import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { showSearchResults } from "../features/searchBar/searchBarSlice";

const linkStyle = {
  color: "black",
  textDecoration: "none",
  padding: "0.5rem 2.5rem",
};

export const Header = (props) => {
  const { cart, bookLists, search, dispatch, logIn, token, setToken } = props;
  const amounts = Object.values(cart);

  const location = useLocation().pathname.split("/").pop();

  let cartAmount = 0;

  amounts.map((book) => {
    const { amount } = book;
    return (cartAmount += amount);
  });

  const handleBlur = () => {
    dispatch(showSearchResults([]));
  };

  return (
    <header onClick={handleBlur}>
      <Link to="/" style={linkStyle}>
        LOGO
      </Link>
      <ul>
        <li>
          <Link
            to="/"
            style={{ ...linkStyle, color: location ? "black" : "grey" }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/shop"
            style={{
              ...linkStyle,
              color: location === "shop" ? "grey" : "black",
            }}
          >
            Shop
          </Link>
        </li>

        <li>
          <Badge badgeContent={cartAmount} color="secondary">
            <Link
              to="/cart"
              style={{
                ...linkStyle,
                color: location === "cart" ? "grey" : "black",
              }}
            >
              Cart
            </Link>
          </Badge>
        </li>
        {token ? (
          <li>
            <Link
              onClick={() => {
                // sessionStorage.clear();
                setToken();
              }}
              to="/login"
              style={{
                ...linkStyle,
                color: location === "login" ? "grey" : "black",
              }}
            >
              Logout
            </Link>
          </li>
        ) : (
          <li>
            <Link
              to="/login"
              style={{
                ...linkStyle,
                color: location === "login" ? "grey" : "black",
              }}
            >
              LogIn
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
};
