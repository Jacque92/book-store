import * as React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import Badge from "@mui/material/Badge";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import InputBase from "@mui/material/InputBase";

import { styled } from "@mui/material/styles";
import { SearchBar } from "../features/searchBar/SearchBar";
import { showSearchResults } from "../features/searchBar/searchBarSlice";

import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const menuId = "primary-search-account-menu";

export const Header = (props) => {
  const { cart, bookLists, search, dispatch, logIn, token, setToken } = props;
  const amounts = Object.values(cart);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  let cartAmount = 0;
  amounts.map((book) => {
    const { amount } = book;
    return (cartAmount += amount);
  });

  const initialState = {
    Home: false,
    Cart: false,
    LogIn: false,
  };

  const [linkState, setLinkState] = useState({ ...initialState, Home: true });
  const [anchorEl, setAnchorEl] = useState(null);

  const handleStateChange = (e) => {
    const activeLabel = e.target.innerHTML;
    setLinkState({ ...initialState, [activeLabel]: true });
  };
  const handleBlur = () => {
    dispatch(showSearchResults([]));
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }} onClick={handleBlur}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          {linkState.Home && (
            <SearchBar
              bookLists={bookLists}
              search={search}
              dispatch={dispatch}
            />
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button size="large" color="inherit">
              <Link
                onClick={handleStateChange}
                to="/"
                style={{
                  textDecoration: "none",
                  color: "white",
                  borderBottom: linkState.Home ? "2px solid white" : "none",
                  padding: "0.5rem 2.5rem",
                }}
              >
                Home
              </Link>
            </Button>
            <Button size="large" color="inherit">
              <Badge badgeContent={cartAmount} color="secondary">
                <Link
                  onClick={handleStateChange}
                  to="/cart"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    borderBottom: linkState.Cart ? "2px solid white" : "none",
                    padding: "0.5rem 2.5rem",
                  }}
                >
                  Cart
                </Link>
              </Badge>
            </Button>
            {token ? (
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
            )}

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
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
