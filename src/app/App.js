import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { LogIn } from "./pages/LogIn";
import { Book } from "./pages/Book";
import { Search } from "./pages/Search";
import { Error } from "./pages/Error";

//theme
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";

import useToken from "./hooks/useToken";

function App(props) {
  const { state, dispatch } = props;

  const { token, setToken } = useToken();

  const theme = createTheme({
    palette: {
      primary: {
        main: indigo[800],
      },
      secondary: {
        main: "#c5d4e8",
      },
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      poster: {
        color: "red",
      },
    },
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header
          setToken={setToken}
          token={token}
          logIn={state.logIn}
          cart={state.cart}
          bookLists={state.bookLists}
          search={state.search}
          dispatch={dispatch}
        />
        <Switch>
          <Route path="/cart">
            {console.log(token)}
            {!token ? (
              <LogIn setToken={setToken} />
            ) : (
              <Cart cart={state.cart} dispatch={dispatch} />
            )}
          </Route>

          <Route path="/logIn">
            <LogIn
              token={token}
              setToken={setToken}
              logIn={state.logIn}
              dispatch={dispatch}
            />
          </Route>

          <Route exact path="/">
            <Home
              bookLists={state.bookLists}
              search={state.search}
              dispatch={dispatch}
            />
          </Route>

          <Route
            path="/NYTBestSellers/:rank"
            children={<Book bookLists={state.bookLists} dispatch={dispatch} />}
          ></Route>
          <Route
            path="/search"
            children={<Search search={state.search} dispatch={dispatch} />}
          ></Route>
          <Route path="/*">
            <Error />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
