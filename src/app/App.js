import "./App.css";
import React from "react";
import { useState } from "react";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import { Switch } from "react-router";
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
    <withRouter>
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
        <Switch>
          <Route path="/cart">
            <Cart cart={state.cart} dispatch={dispatch} />
          </Route>
          {/* <Route path="/cart">
          {!token ? (
            <LogIn setToken={setToken} />
          ) : (
            <Cart cart={state.cart} dispatch={dispatch} />
          )}
        </Route> */}

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

          <Route exact path="/shop">
            <Shop
              search={state.search}
              dispatch={dispatch}
              categoryLists={state.categoryLists}
            />
          </Route>

          <Route exact path="/sell">
            <Sell />
          </Route>

          <Route
            path="/NYTBestSellers/:rank"
            children={<Book bookLists={state.bookLists} dispatch={dispatch} />}
          ></Route>

          <Route
            path="/books/:rank"
            children={
              <Book bookLists={state.categoryLists} dispatch={dispatch} />
            }
          ></Route>
          <Route
            path="/search"
            children={<Search search={state.search} dispatch={dispatch} />}
          ></Route>
          <Route path="/*">
            <Error />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </withRouter>
  );
}

export default App;
