import React from "react";
import { Link } from "react-router-dom";
export const Search = ({ searchResult }) => {
  return (
    <div
      style={{
        width: "60%",
        margin: "auto",
        marginTop: 200,
      }}
    >
      <h1>Search reasult</h1>
      {searchResult.map((book) => {
        const { title, author, price, description, book_image, rank } = book;
        return (
          <Link
            to={"/NYTBestSellers/" + rank}
            style={{
              textDecoration: "none",
              color: "rgb(59, 82, 63)",
            }}
          >
            <div
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
                }}
              >
                <div>
                  <h2>{title}</h2>
                  <p>{author}</p>
                </div>
                <h4>AUD$ {price}</h4>
                <p style={{ overflow: "hidden" }}>{description}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
