import { Link } from "react-router-dom";
import { showSearchResults } from "./searchBarSlice";
import { Hidden, TextField } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";
import { finalSearchResults } from "./searchBarSlice";
import { setSearchTerm } from "./searchBarSlice";

import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));
const menuId = "primary-search-account-menu";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
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
    <Grid>
      <form>
        <Search
          className="searchInput"
          onFocus={handleSearch}
          onChange={handleSearch}
          autoComplete="off"
        >
          <StyledInputBase
            value={searchTerm}
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          ></StyledInputBase>
          <Link to="/search" style={{ height: 0, width: 0, overflow: Hidden }}>
            <button
              type="submit"
              variant="contained"
              onClick={handleSubmit}
              style={{ height: 0, width: 0, overflow: Hidden, border: 0 }}
            ></button>
          </Link>
        </Search>
      </form>
      <Paper
        className="searchChoices"
        style={{
          position: "absolute",
          backgroundColor: "whitesmoke",
          zIndex: "1",
          width: 300,
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
                color: "#283593",
              }}
            >
              <img src={book_image} alt={title}></img>
              <div style={{ marginLeft: 6 }}>
                <h5>{title}</h5>
                <p style={{ color: "grey" }}>{author}</p>
              </div>
            </Link>
          );
        })}
      </Paper>
    </Grid>
  );
};
