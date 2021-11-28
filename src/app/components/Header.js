import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Badge from "@mui/material/Badge";
import { showSearchResults } from "../features/searchBar/searchBarSlice";

export const Header = (props) => {
  const { cart, bookLists, search, dispatch, logIn, token, setToken } = props;
  const amounts = Object.values(cart);

  let cartAmount = 0;
  amounts.map((book) => {
    const { amount } = book;
    return (cartAmount += amount);
  });

  const initialState = {
    Home: false,
    Shop: false,
    Sell: false,
    Cart: false,
    LogIn: false,
  };

  const [linkState, setLinkState] = useState({ ...initialState, Home: false });

  const handleStateChange = (e) => {
    const activeLabel = e.target.innerHTML;
    setLinkState({ ...initialState, [activeLabel]: true });
  };

  const handleBlur = () => {
    dispatch(showSearchResults([]));
  };

  return (
    <header onClick={handleBlur}>
      <ul>
        <li>
          <Link
            // onClick={handleStateChange}
            to="/"
            style={{
              color: "black",
              textDecoration: "none",
              borderBottom: linkState.Home ? "1px solid black" : "none",
              padding: "0.5rem 2.5rem",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            // onClick={handleStateChange}
            to="/shop"
            style={{
              color: "black",
              textDecoration: "none",
              borderBottom: linkState.Shop ? "1px solid black" : "none",
              padding: "0.5rem 2.5rem",
            }}
          >
            Shop
          </Link>
        </li>
        {/* <li>
          <Link
            onClick={handleStateChange}
            to="/sell"
            style={{
              color: "black",
              textDecoration: "none",
              borderBottom: linkState.Sell ? "1px solid black" : "none",
              padding: "0.5rem 2.5rem",
            }}
          >
            Sell
          </Link>
        </li> */}
        <li>
          <Badge badgeContent={cartAmount} color="secondary">
            <Link
              // onClick={handleStateChange}
              to="/cart"
              style={{
                color: "black",
                textDecoration: "none",
                borderBottom: linkState.Cart ? "1px solid black" : "none",
                padding: "0.5rem 2.5rem",
              }}
            >
              Cart
            </Link>
          </Badge>
        </li>
        {token ? (
          <li>
            <Link
              // onClick={handleStateChange}
              onClick={() => {
                // sessionStorage.clear();
                setToken();
              }}
              to="/logIn"
              style={{
                color: "black",
                textDecoration: "none",
                borderBottom: linkState.LogIn ? "1px solid black" : "none",
                padding: "0.5rem 2.5rem",
              }}
            >
              Logout
            </Link>
          </li>
        ) : (
          <li>
            <Link
              // onClick={handleStateChange}
              to="/logIn"
              style={{
                color: "black",
                textDecoration: "none",
                borderBottom: linkState.LogIn ? "1px solid black" : "none",
                padding: "0.5rem 2.5rem",
              }}
            >
              LogIn
            </Link>
          </li>
        )}

        {/* {token ? (
          <Button
            color="inherit"
            onClick={handleStateChange}
            style={{ padding: "0.5rem 2.5rem" }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem
                onClick={() => {
                  sessionStorage.clear();
                  setToken({});
                  handleClose();
                }}
              >
                Log out
              </MenuItem>
            </Menu>
          </Button>
        ) : (
          <Button color="inherit">
            <Link
              onClick={handleStateChange}
              to="/logIn"
              style={{
                textDecoration: "none",
                color: "white",
                borderBottom: linkState.LogIn ? "2px solid white" : "none",
                padding: "0.5rem 2.5rem",
              }}
            >
              LogIn
            </Link>
          </Button>
        )} */}
        {/* {token || (
              <Button color="inherit">
                <Link
                  onClick={handleStateChange}
                  to="/logIn"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    borderBottom: linkState.LogIn ? "2px solid white" : "none",
                    padding: "0.5rem 2.5rem",
                  }}
                >
                  LogIn
                </Link>
              </Button>
            )} */}
      </ul>
    </header>
  );
};
