import React from "react";
import Button from "@mui/material/Button";

export const CartItem = ({
  item,
  removeBookHandler,
  title,
  addToCartHandler,
  decreaseHandler,
}) => {
  const { price, amount } = item;

  return (
    <tr>
      <td style={{ width: "50%" }}>{title}</td>
      <td style={{ width: "10%" }}>{price}</td>

      <td style={{ width: "15%" }}>
        <Button size="large" onClick={decreaseHandler} value={title}>
          -
        </Button>
        <input style={{ width: "20%" }} type="number" value={amount}></input>
        <Button size="large" onClick={addToCartHandler} value={title}>
          +
        </Button>
      </td>
      <td style={{ width: "15%" }}>{price * amount}</td>
      <td style={{ width: "5%" }}>
        <button onClick={() => removeBookHandler(title)}>Remove</button>
      </td>
    </tr>
  );
};
