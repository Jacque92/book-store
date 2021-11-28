import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { addItem } from "../features/shoppingCart/shoppingCartSlice";

export const DisplayBook = (props) => {
  const { handleAddItem, handleRemoveItem, bookinfo, dispatch } = props;
  const { rank, author, title, book_image, price, category } = bookinfo;
  const [isAddFav, setIsAddFav] = useState(false);
  const [isAddCart, setIsAddCart] = useState(false);
  const handleAddFav = () => {
    setIsAddFav(!isAddFav);
  };
  const handleAddCart = (item, e) => {
    if (isAddCart) {
      return;
    } else {
      handleAddItem(item);
    }
    setIsAddCart(!isAddCart);
  };

  return (
    <div className="displayBook">
      <div className="imgBox">
        <Link to={"/books/" + rank} bookinfo={bookinfo}>
          <img src={book_image} alt={title}></img>
        </Link>
      </div>

      <div className="nameNauthor">
        <p style={{ lineHeight: "1rem", fontWeight: 900 }}>{title}</p>
        <p style={{ color: "grey" }}>{author}</p>
      </div>

      <p
        className="priceTag"
        style={{ textAlign: "center", marginTop: "0.5rem" }}
      >
        AUD $ {price}
      </p>
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
  );
};
