import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

import { StarRating } from "../features/starRating/StarRating";

export const DisplayRank = (props) => {
  const { handleAddItem, handleRemoveItem, bookinfo } = props;
  const { rank, author, title, book_image, price } = bookinfo;
  const [isHover, setIsHover] = useState(false);
  const [isAddFav, setIsAddFav] = useState(false);
  const [isAddCart, setIsAddCart] = useState(false);
  const [value, setValue] = React.useState(2);

  const handleHover = () => {
    setIsHover(!isHover);
  };
  const handleAddFav = () => {
    setIsAddFav(!isAddFav);
  };
  const handleAddCart = (item, e) => {
    if (isAddCart) {
      console.log(e.target.value);
      handleRemoveItem(e.target.value);
    } else {
      handleAddItem(item);
    }

    setIsAddCart(!isAddCart);
  };

  return (
    <div
      className="displayRank"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className="rankCoverBox" style={{ overflow: "hidden" }}>
        <Link
          to={"/NYTBestSellers/" + rank}
          bookinfo={bookinfo}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <img src={book_image} style={{ height: "100%" }} alt={title}></img>
        </Link>
      </div>
      <div className="rankText">
        <div style={{ height: "2rem" }}>
          <p style={{ lineHeight: "1rem", fontWeight: 900 }}>{title}</p>
          <p style={{ color: "grey", lineHeight: "2rem" }}>{author}</p>
        </div>
        <p className="priceTag">AUD ${price}</p>
        <StarRating />
        <div className="bntGroup">
          {isAddFav ? (
            <FavoriteIcon onClick={handleAddFav} fontSize="small" />
          ) : (
            <FavoriteBorderIcon onClick={handleAddFav} fontSize="small" />
          )}
          {isAddCart ? (
            <RemoveShoppingCartIcon value={title} fontSize="small" />
          ) : (
            <AddShoppingCartIcon
              onClick={handleAddCart}
              // startIcon={<AddShoppingCartIcon />}
              size="small"
              value={title}
              fontSize="small"
            />
          )}
        </div>
      </div>
    </div>
  );
};
