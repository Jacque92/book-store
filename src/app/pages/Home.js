import { SearchBar } from "../features/searchBar/SearchBar";
import { BookLists } from "../features/booklists/BookLists";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { showSearchResults } from "../features/searchBar/searchBarSlice";

export const Home = (props) => {
  const { search, bookLists, dispatch } = props;
  const handleBlur = () => {
    dispatch(showSearchResults([]));
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: 50 }} onClick={handleBlur}>
      <h1 style={{ marginBottom: 20, color: "#1a237e" }}>
        New York Times Best Sellers
      </h1>
      <BookLists bookLists={bookLists} dispatch={dispatch} />
    </Container>
  );
};
