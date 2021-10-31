import * as React from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";

export const DisplayRank = ({ bookinfo, addToCartHandler }) => {
  const { rank, author, title, book_image, price } = bookinfo;

  return (
    <div className="displayRank">
      <div className="rankText">
        <h1 className="rankTextBox">{rank}</h1>
        <div>
          <h4>{title}</h4>
          <p>{author}</p>
        </div>
        <h4>${price}</h4>

        <Button
          onClick={addToCartHandler}
          startIcon={<AddShoppingCartIcon />}
          variant="outlined"
          size="small"
          value={title}
          style={{
            borderColor: "rgb(59, 82, 63)",
            color: "rgb(59, 82, 63)",
          }}
        >
          add
        </Button>
      </div>
      <Link to={"/NYTBestSellers/" + rank} bookinfo={bookinfo}>
        <div className="rankCoverBox" style={{ overflow: "hidden" }}>
          <img src={book_image} style={{ width: "100%" }} alt={title}></img>
        </div>
      </Link>
    </div>
  );
};
