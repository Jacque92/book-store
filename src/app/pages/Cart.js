import * as React from "react";
import { ShoppingCart } from "../features/shoppingCart/ShoppingCart";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { clearCart } from "../features/shoppingCart/shoppingCartSlice";
import { Paper } from "@mui/material";

const taxRate = 0.09;

export const Cart = (props) => {
  const { cart, dispatch } = props;

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const value = Object.values(cart);
  let subtotal = 0;
  value.map((book) => {
    const { price, amount } = book;
    return (subtotal += Math.floor(price * amount * 100) / 100);
  });

  return (
    <div style={{ width: "80%", margin: "100px auto auto auto" }}>
      <ShoppingCart cart={cart} dispatch={dispatch} />
      <Stack
        spacing={2}
        direction="row"
        style={{
          width: "40%",
          margin: "0 0 0 auto",
          justifyContent: "space-around",
        }}
      >
        <Button variant="outlined">
          <Link to="/" style={{ textDecoration: "none", color: "#283593" }}>
            Continue Shopping
          </Link>
        </Button>
        <Button onClick={handleClearCart} variant="outlined">
          Clear Shopping Cart
        </Button>
      </Stack>
      <Paper
        elevation={1}
        style={{
          width: "40%",
          margin: "0 0 0 auto",
          marginTop: 20,
          textAlign: "right",
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
              <td>${Math.floor(subtotal * (1 + taxRate) * 100) / 100} </td>
            </tr>
          </tbody>
        </table>
        <Button
          onClick={handleClearCart}
          variant="contained"
          style={{
            marginTop: 20,
          }}
        >
          Check Out
        </Button>
      </Paper>
    </div>
  );
};
