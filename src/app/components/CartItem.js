import React from "react";
import Button from "@mui/material/Button";

export const CartItem = (props) => {
  const { title, book, handleRemoveItem, handleIncrease, handleDecrease } =
    props;
  const { price, amount } = book;

  return (
    <tr>
      <td style={{ width: "50%" }}>{title}</td>
      <td style={{ width: "10%" }}>{price}</td>

      <td style={{ width: "15%" }}>
        <Button size="large" onClick={handleDecrease} value={title}>
          -
        </Button>

        <input style={{ width: "20%" }} value={amount} readOnly></input>
        <Button size="large" onClick={handleIncrease} value={title}>
          +
        </Button>
      </td>
      <td style={{ width: "15%" }}>{Math.floor(price * amount * 100) / 100}</td>
      <td style={{ width: "5%" }}>
        <Button onClick={handleRemoveItem}>Remove</Button>
      </td>
    </tr>
  );
};
