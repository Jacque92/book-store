import { DisplayRank } from "../../components/DisplayRank";
import { loadData } from "./booklistsSlice";
import { useState, useEffect } from "react";
import { addItem, removeItem } from "../shoppingCart/shoppingCartSlice";
import * as React from "react";

export const BookLists = (props) => {
  const { bookLists, dispatch } = props;
  useEffect(() => loadData(dispatch), []);

  const booksPerPage = 6;
  const totalPageNumber =
    bookLists.length % booksPerPage
      ? bookLists.length / booksPerPage
      : bookLists.length / booksPerPage + 1;

  const handleAddItem = (itemToAdd) => {
    dispatch(addItem(itemToAdd));
  };
  const handleRemoveItem = (itemToRemove) => {
    dispatch(removeItem(itemToRemove));
  };

  const [pageNumber, setPageNumber] = useState(1);

  const handleActive = (e) => {
    setPageNumber(parseInt(e.target.value));
  };

  return (
    <div className="bestSellers container">
      <h2>Our Best Sellers</h2>

      <div className="rankList list">
        {bookLists
          .map((book) => {
            return (
              <DisplayRank
                handleAddItem={() => handleAddItem(book)}
                key={book.rank}
                bookinfo={book}
                handleRemoveItem={() => handleRemoveItem(Object.keys(book)[0])}
              />
            );
          })
          .slice((pageNumber - 1) * booksPerPage, pageNumber * booksPerPage)}
      </div>
      <div className="line">
        <button
          value="1"
          onClick={handleActive}
          style={{
            backgroundColor:
              pageNumber === 1 ? "rgb(72, 133, 83)" : "rgb(207, 216, 208)",
          }}
        ></button>
        <button
          value="2"
          style={{
            backgroundColor:
              pageNumber === 2 ? "rgb(72, 133, 83)" : "rgb(207, 216, 208)",
          }}
          onClick={handleActive}
        ></button>
        <button
          value="3"
          style={{
            backgroundColor:
              pageNumber === 3 ? "rgb(72, 133, 83)" : "rgb(207, 216, 208)",
          }}
          onClick={handleActive}
        ></button>
      </div>
    </div>
  );
};
