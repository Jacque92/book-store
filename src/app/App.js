import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { LogIn } from "./pages/LogIn";
import { Book } from "./pages/Book";
import { useRef } from "react";
import { Search } from "./pages/Search";
import { Error } from "./pages/Error";

const url =
  "https://api.nytimes.com/svc/books/v3/lists/2021-01-20/hardcover-fiction.json?api-key=4mJmXqbjumhYvFdfJKf7MFik03AfhnbG";
function App() {
  //Fetch data
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(
    () =>
      fetch(url)
        .then((response) => {
          if (response.status >= 200 && response.status <= 299) {
            return response.json();
          } else {
            setIsLoading(false);
            setIsError(true);
            throw new Error(response.statusText);
          }
        })
        .then((data) => {
          const { results } = data;
          const { books } = results;
          books.map((book) => {
            const newPrice = Math.floor(Math.random() * 10 + 10);
            return (book.price = newPrice);
          });
          setBooks(books);
          setIsLoading(false);
        })
        .catch((error) => console.log(error)),
    []
  );

  //search
  const refContainer = useRef(null);
  const [searchInfo, setSearchInfo] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = refContainer.current.value.toLowerCase();

    if (searchTerm !== "") {
      let filterList = books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm) ||
          book.author.toLowerCase().includes(searchTerm)
      );
      setSearchInfo(filterList);
    }
    if (searchTerm === "") {
      setSearchInfo([]);
    }
  };

  const [isSelect, setIsSelect] = useState(false);
  const selectHandler = () => {
    setIsSelect(true);
  };

  const handleBlur = () => {
    setIsSelect(false);
    setSearchInfo([]);
  };

  const handleSubmit = (e) => {
    const searchTerm = refContainer.current.value.toLowerCase();
    let filterList = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
    );
    setSearchResult(filterList);
    setSearchInfo([]);
  };

  //shopping cart
  const [cart, setCart] = useState({});
  const [countBooks, setCountBooks] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const addToCartHandler = (event) => {
    const addBookTitle = event.target.value;
    const addBook = books.find((book) => book.title === addBookTitle);
    const bookPrice = addBook.price;
    const bookAmount = cart[addBookTitle] ? cart[addBookTitle].amount + 1 : 1;
    setCart({
      ...cart,
      [addBookTitle]: { price: bookPrice, amount: bookAmount },
    });
    setCountBooks((prev) => prev + 1);
    setSubtotal((prev) => prev + bookPrice);
  };

  const decreaseHandler = (event) => {
    const updateBookTitle = event.target.value;
    const updateBook = books.find((book) => book.title === updateBookTitle);
    const bookPrice = updateBook.price;
    const bookAmount = cart[updateBookTitle].amount;

    if (bookAmount > 1) {
      setCart({
        ...cart,
        [updateBookTitle]: { price: bookPrice, amount: bookAmount - 1 },
      });
      setCountBooks((prev) => prev - 1);
      setSubtotal((prev) => prev - bookPrice);
    }
  };

  const removeBookHandler = (itemTitle) => {
    const { price, amount } = cart[itemTitle];
    setCountBooks((prev) => prev - amount);
    const newCart = cart;
    delete newCart[itemTitle];
    setCart(newCart);
    setSubtotal((prev) => prev - price * amount);
  };

  const clearCartHandler = () => {
    setCart([]);
    setCountBooks(0);
    setSubtotal(0);
  };

  //login
  const [isLogin, setIsLogin] = useState(false);
  const [userInput, setUserInput] = useState("");
  const handleInput = ({ target }) => {
    const { name, value } = target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userInput;
    trueOrFalse(email, password);
  };

  const trueOrFalse = (email, password) => {
    if (email === "abc" && password === "def") {
      console.log("success");
      setUserInput({ email: "", password: "" });
      setIsLogin(true);
    } else {
      console.log("something wrong");
    }
  };

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }
  return (
    <Router>
      <header className="App-header" onClick={handleBlur}>
        <Header cartAmount={countBooks} isLogin={isLogin} />
      </header>
      <Switch>
        <Route path="/cart">
          <Cart
            subtotal={subtotal}
            items={cart}
            removeBookHandler={removeBookHandler}
            clearCartHandler={clearCartHandler}
            decreaseHandler={decreaseHandler}
            addToCartHandler={addToCartHandler}
          />
        </Route>
        <Route path="/logIn">
          <LogIn
            isLogin={isLogin}
            handleInput={handleInput}
            userInput={userInput}
            handleLoginSubmit={handleLoginSubmit}
          />
        </Route>

        <Route exact path="/">
          <div onClick={handleBlur}>
            <Home
              refContainer={refContainer}
              addToCartHandler={addToCartHandler}
              topBooks={books}
              handleSubmit={handleSubmit}
              handleSearch={handleSearch}
              searchInfo={searchInfo}
              handleBlur={handleBlur}
              selectHandler={selectHandler}
              isSelect={isSelect}
            />
          </div>
        </Route>

        <Route
          path="/NYTBestSellers/:rank"
          children={<Book books={books} addToCartHandler={addToCartHandler} />}
        ></Route>
        <Route path="/*">
          <Error />
        </Route>
      </Switch>
      <Route
        path="/search"
        children={<Search searchResult={searchResult} />}
      ></Route>
    </Router>
  );
}

export default App;
