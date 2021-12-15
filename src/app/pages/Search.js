import React from "react";
import { Link } from "react-router-dom";
import { showSearchResults } from "../features/searchBar/searchBarSlice";

export const Search = (props) => {
  const { search, dispatch } = props;
  const { preSearch, searchResults } = search;
  const handleBlur = () => {
    dispatch(showSearchResults([]));
  };
  return (
    <div onClick={handleBlur}>
      <h1 className="pageTitle">Search reasult</h1>
      <div className="container">
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
              <div
                style={{
                  width: "100%",
                  height: 180,
                  margin: "0 0 40px 0",
                  display: "flex",
                  padding: 10,
                  border: "1px solid black",
                  boxShadow: "1px 1px 2px black",
                }}
              >
                <div
                  style={{
                    height: "160px",
                    width: "110px",

                    overflow: "hidden",
                    backgroundColor: "red",
                  }}
                >
                  <img
                    style={{ height: "auto", width: "100%" }}
                    src={book_image}
                    alt={title}
                  ></img>
                </div>
                <div
                  style={{
                    width: "80%",
                    marginLeft: 10,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    color: "black",
                  }}
                >
                  <div>
                    <h2 style={{ textAlign: "left" }}>{title}</h2>
                    <p style={{ color: "grey" }}>{author}</p>
                  </div>
                  <h4>AUD$ {price}</h4>
                  <p style={{ overflow: "hidden" }}>{description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
