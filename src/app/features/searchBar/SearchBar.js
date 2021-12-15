import { Link } from "react-router-dom";
import { showSearchResults } from "./searchBarSlice";
import { Hidden } from "@mui/material";

import { styled } from "@mui/material/styles";
import { finalSearchResults } from "./searchBarSlice";
import { setSearchTerm } from "./searchBarSlice";
import { Button } from "@mui/material";

import * as React from "react";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const SearchBar = (props) => {
  const { search, bookLists, dispatch } = props;
  const { searchTerm, preSearch, searchResults } = search;

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    if (term === "") {
      dispatch(showSearchResults([]));
      dispatch(setSearchTerm(term));
    }
    if (term !== "") {
      let filterList = bookLists.filter(
        (book) =>
          book.title.toLowerCase().includes(term) ||
          book.author.toLowerCase().includes(term)
      );
      dispatch(setSearchTerm(term));
      dispatch(showSearchResults(filterList));
    }
  };

  const handleSubmit = (e) => {
    let filterList = bookLists.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
    );

    dispatch(finalSearchResults(filterList));
    dispatch(showSearchResults([]));
  };

  return (
    <div>
      <form style={{ display: "flex", alignItems: "center" }}>
        <input
          className="searchInput"
          value={searchTerm}
          onFocus={handleSearch}
          onChange={handleSearch}
          autoComplete="off"
          placeholder="Book…"
        ></input>
        <Link
          to="/search"
          style={{
            textDecoration: "none",
            marginLeft: "0.5rem",
          }}
        >
          <Button size="large" variant="contained" onClick={handleSubmit}>
            Search
          </Button>
        </Link>
      </form>
      <div
        className="searchChoices"
        style={{
          position: "absolute",
          backgroundColor: "whitesmoke",
          zIndex: "1",
          width: 224,
        }}
      >
        {preSearch.map((book) => {
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
              }}
            >
              <img src={book_image} alt={title}></img>
              <div style={{ marginLeft: 6 }}>
                <p style={{ color: "black" }}>{title}</p>
                <p style={{ color: "grey" }}>{author}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
