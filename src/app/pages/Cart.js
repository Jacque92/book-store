import * as React from "react";
import { ShoppingCart } from "../features/shoppingCart/ShoppingCart";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { clearCart } from "../features/shoppingCart/shoppingCartSlice";

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
    <div className="cart">
      <div className="cartPage container">
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
          {Object.keys(cart).length === 0 || (
            <Button onClick={handleClearCart} variant="outlined">
              Clear Shopping Cart
            </Button>
          )}

          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Button variant="contained">Continue Shopping</Button>
          </Link>
        </Stack>
        {Object.keys(cart).length === 0 || (
          <div
            style={{
              width: "40%",
              margin: "0 0 0 auto",
              marginTop: 20,
              textAlign: "right",
              padding: "1rem 2rem",
              border: "1px solid black",
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
            <Button variant="contained" onClick={handleClearCart}>
              Check Out
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
