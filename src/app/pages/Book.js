import React from "react";
import { useParams } from "react-router-dom";
import { addItem } from "../features/shoppingCart/shoppingCartSlice";

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

        margin: "200px auto",

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
          <h2
            style={{
              color: "rgb(59, 82, 63)",
            }}
          >
            {title}
          </h2>

          <p style={{}}>{author}</p>
        </div>

        <p style={{}}>{description}</p>
        <h4 style={{ color: "rgb(59, 82, 63)" }}>AUD$ {price}</h4>

        <button
          onClick={() => handleAddItem(thisBook)}
          value={title}
          style={{
            padding: 10,
            height: 30,
            color: "rgb(59, 82, 63)",
            border: "1px solid rgb(59, 82, 63)",
            width: "50%",
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
