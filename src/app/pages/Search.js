import React from "react";
import { Link } from "react-router-dom";
import { showSearchResults } from "../features/searchBar/searchBarSlice";
import { Paper } from "@mui/material";
export const Search = (props) => {
  const { search, dispatch } = props;
  const { preSearch, searchResults } = search;
  const handleBlur = () => {
    dispatch(showSearchResults([]));
  };
  return (
    <div
      onClick={handleBlur}
      style={{
        width: "60%",
        margin: "auto",
        marginTop: 100,
      }}
    >
      <h1>Search reasult</h1>
      {searchResults.map((book) => {
        const { title, author, price, description, book_image, rank } = book;
        return (
          <Link
            to={"/NYTBestSellers/" + rank}
            key={title}
            style={{
              textDecoration: "none",
            }}
          >
            <Paper
              style={{
                width: "100%",
                height: 180,
                margin: "40px 0",
                display: "flex",
                padding: 10,
                border: "1px solid lightgrey",
              }}
            >
              <div style={{ width: 110, height: "100%", overflow: "hidden" }}>
                <img
                  style={{ width: "100%" }}
                  src={book_image}
                  alt={title}
                ></img>
              </div>
              <div
                style={{
                  marginLeft: 10,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  color: "#1a237e",
                }}
              >
                <div>
                  <h2>{title}</h2>
                  <p style={{ color: "grey" }}>{author}</p>
                </div>
                <h4>AUD$ {price}</h4>
                <p style={{ overflow: "hidden" }}>{description}</p>
              </div>
            </Paper>
          </Link>
        );
      })}
    </div>
  );
};
