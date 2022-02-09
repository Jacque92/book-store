import "./App.css";
import React from "react";
import { useState } from "react";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Sell } from "./pages/Sell";
import { Cart } from "./pages/Cart";
import { LogIn } from "./pages/LogIn";
import { Book } from "./pages/Book";
import { Search } from "./pages/Search";
import { Error } from "./pages/Error";
import { Footer } from "./components/Footer";

function App(props) {
  const { state, dispatch } = props;
  const [token, setToken] = useState();
  // const { token, setToken } = useToken();

  return (
    <Router>
      <Header
        setToken={setToken}
        token={token}
        logIn={state.logIn}
        cart={state.cart}
        bookLists={state.bookLists}
        search={state.search}
        dispatch={dispatch}
      />
      <Routes>
        <Route
          path="/cart"
          element={<Cart cart={state.cart} dispatch={dispatch} />}
        ></Route>
        <Route
          path="/login"
          element={
            <LogIn
              token={token}
              setToken={setToken}
              logIn={state.logIn}
              dispatch={dispatch}
            />
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <LogIn
              token={token}
              setToken={setToken}
              logIn={state.logIn}
              dispatch={dispatch}
            />
          }
        ></Route>
        <Route
          exact
          path="/"
          element={
            <Home
              bookLists={state.bookLists}
              search={state.search}
              dispatch={dispatch}
            />
          }
        ></Route>

        <Route
          exact
          path="/shop"
          element={
            <Shop
              search={state.search}
              dispatch={dispatch}
              categoryLists={state.categoryLists}
            />
          }
        ></Route>

        <Route
          path="/NYTBestSellers/:rank"
          element={<Book bookLists={state.bookLists} dispatch={dispatch} />}
        ></Route>

        <Route
          path="/books/:rank"
          element={<Book bookLists={state.categoryLists} dispatch={dispatch} />}
        ></Route>

        <Route
          path="/search"
          element={<Search search={state.search} dispatch={dispatch} />}
        ></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
