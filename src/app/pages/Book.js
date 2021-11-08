import React from "react";
import { useParams } from "react-router-dom";
import { addItem } from "../features/shoppingCart/shoppingCartSlice";
import Button from "@mui/material/Button";

export const Book = (props) => {
  const { bookLists, dispatch } = props;

  const { rank } = useParams();
  const thisBook = bookLists.find((book) => book.rank === parseInt(rank));
  const { author, description, title, book_image, price } = thisBook;

  const handleAddItem = (itemToAdd) => {
    dispatch(addItem(itemToAdd));
  };
  return (
    <div
      style={{
        width: "60%",
        margin: "100px auto",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          width: 260,
          height: 400,
          overflow: "hidden",
          borderRadius: 4,
        }}
      >
        <img
          alt="Book Thumbnail"
          src={book_image}
          style={{
            width: "100%",
            height: "auto",
          }}
        ></img>
      </div>

      <div
        style={{
          width: 400,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginLeft: 40,
        }}
      >
        <div>
          <h1>{title}</h1>

          <p style={{}}>{author}</p>
        </div>

        <p style={{}}>{description}</p>
        <h3>AUD$ {price}</h3>

        <Button
          variant="contained"
          onClick={() => handleAddItem(thisBook)}
          value={title}
          style={{
            width: "50%",
          }}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};
