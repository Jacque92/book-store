import React from "react";

import { DisplayRank } from "./DisplayRank";

export const Ranks = ({ topBooks, addToCartHandler }) => {
  return (
    <div className="ranks">
      <div className="rankList">
        {topBooks.map((book) => {
          return (
            <DisplayRank
              key={book.rank}
              bookinfo={book}
              addToCartHandler={addToCartHandler}
            />
          );
        })}
      </div>
    </div>
  );
};
