import React from "react";
import { Link } from "react-router-dom";
import { showSearchResults } from "./searchBarSlice";

export const SearchBar = (props) => {
  const { search, bookLists, dispatch } = props;

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    if (searchTerm === "") {
      return dispatch(showSearchResults([]));
    }
    if (searchTerm !== "") {
      let filterList = bookLists.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm) ||
          book.author.toLowerCase().includes(searchTerm)
      );
      return dispatch(showSearchResults(filterList));
    }
  };

  return (
    <form
      style={{
        width: "50%",
        margin: "auto",
        marginTop: 40,
        border: "0.2px solid rgb(59, 82, 63)",
      }}
    >
      <input
        placeholder="Input a title or author"
        className="searchInput"
        onFocus={handleSearch}
        onChange={handleSearch}
        type="text"
        autoComplete="off"
        style={{
          height: 40,
          width: "80%",
          border: "none",
        }}
      ></input>
      <Link
        to="/search"
        //onClick={handleSubmit}
      >
        <button
          className="test"
          type="submit"
          style={{
            color: "white",
            height: 42,
            width: "20%",
            border: "1px solid rgb(59, 82, 63)",
            backgroundColor: "rgb(59, 82, 63)",
          }}
        >
          Search
        </button>
      </Link>

      <div
        className="searchChoices"
        style={{
          position: "absolute",
          backgroundColor: "whitesmoke",
          zIndex: "1",
          width: 662,
        }}
      >
        {search.map((book) => {
          const { rank, author, title, book_image } = book;

          return (
            <Link
              key={title}
              to={"/NYTBestSellers/" + rank}
              className="searchResultItem"
              // onMouseDown={selectHandler}
              style={{
                display: "flex",
                padding: "0.5rem",
                height: 80,
                borderBottom: "1px solid lightgrey",
                textDecoration: "none",
                color: "rgb(59, 82, 63)",
              }}
            >
              <img src={book_image} alt={title}></img>
              <div style={{ marginLeft: 6 }}>
                <h5>{title}</h5>
                <p>{author}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </form>
  );
};
