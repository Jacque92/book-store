import * as React from "react";
import { ShoppingCart } from "../features/shoppingCart/ShoppingCart";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

const taxRate = 0.09;
export const Cart = ({
  items,
  subtotal,
  removeBookHandler,
  clearCartHandler,
  decreaseHandler,
  addToCartHandler,
}) => {
  return (
    <div style={{ width: "80%", margin: "160px auto auto auto" }}>
      <ShoppingCart
        items={items}
        removeBookHandler={removeBookHandler}
        addToCartHandler={addToCartHandler}
        decreaseHandler={decreaseHandler}
      />
      <Stack
        spacing={2}
        direction="row"
        style={{
          width: "40%",
          margin: "0 0 0 auto",
          justifyContent: "space-around",
        }}
      >
        <Button
          variant="outlined"
          style={{
            borderColor: "rgb(59, 82, 63)",
            color: "rgb(59, 82, 63)",
          }}
        >
          <Link
            to="/"
            style={{ textDecoration: "none", color: "rgb(59, 82, 63)" }}
          >
            Continue Shopping
          </Link>
        </Button>
        <Button
          onClick={clearCartHandler}
          variant="outlined"
          style={{
            borderColor: "rgb(59, 82, 63)",
            color: "rgb(59, 82, 63)",
          }}
        >
          Clear Shopping Cart
        </Button>
      </Stack>
      <div
        style={{
          width: "40%",
          margin: "0 0 0 auto",
          marginTop: 20,
          textAlign: "right",
          border: "1px solid grey",
          borderRadius: 4,
          padding: "1rem 2rem",
        }}
      >
        <table
          style={{
            width: "100%",
            lineHeight: "3rem",
            textAlign: "right",
          }}
        >
          <thead>
            <tr>
              <th>Subtotal: </th>
              <td>${subtotal}</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Tax: </th>
              <td>${Math.floor(subtotal * taxRate * 100) / 100}</td>
            </tr>
            <tr>
              <th>Order total : </th>
              <td>${subtotal + subtotal * taxRate} </td>
            </tr>
          </tbody>
        </table>
        <Button
          onClick={clearCartHandler}
          variant="outlined"
          style={{
            marginTop: 20,
            borderColor: "rgb(59, 82, 63)",
            color: "rgb(59, 82, 63)",
          }}
        >
          Check Out
        </Button>
      </div>
    </div>
  );
};
