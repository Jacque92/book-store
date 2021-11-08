import * as React from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";

export const DisplayRank = (props) => {
  const { handleAddItem, bookinfo } = props;
  const { rank, author, title, book_image, price } = bookinfo;

  return (
    <div className="displayRank">
      <Link to={"/NYTBestSellers/" + rank} bookinfo={bookinfo}>
        <div className="rankCoverBox" style={{ overflow: "hidden" }}>
          <img src={book_image} style={{ width: "100%" }} alt={title}></img>
        </div>
      </Link>
      <div className="rankText">
        <h1 className="rankTextBox">{rank}</h1>
        <div>
          <h4 style={{ lineHeight: "0.9rem", color: "#1a237e" }}>{title}</h4>
          <p style={{ color: "grey" }}>{author}</p>
        </div>
        <p style={{ color: "#1a237e" }}>
          <strong>AUD {price}</strong>
        </p>

        <Button
          onClick={handleAddItem}
          startIcon={<AddShoppingCartIcon />}
          variant="outlined"
          size="small"
          value={title}
        >
          add
        </Button>
      </div>
    </div>
  );
};
