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

function App(props) {
  const { state, dispatch } = props;

  return (
    <Router>
      <header className="App-header">
        <Header cart={state.cart} />
      </header>
      <Switch>
        <Route path="/cart">
          <Cart cart={state.cart} dispatch={dispatch} />
        </Route>
        <Route path="/logIn">
          <LogIn logIn={state.logIn} dispatch={dispatch} />
        </Route>

        <Route exact path="/">
          <div>
            <Home
              bookLists={state.bookLists}
              search={state.search}
              dispatch={dispatch}
            />
          </div>
        </Route>

        <Route
          path="/NYTBestSellers/:rank"
          children={<Book bookLists={state.bookLists} dispatch={dispatch} />}
        ></Route>
        <Route
          path="/search"
          children={<Search searchResult={state.search} dispatch={dispatch} />}
        ></Route>
        <Route path="/*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
