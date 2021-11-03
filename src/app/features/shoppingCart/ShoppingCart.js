import React from "react";
import { CartItem } from "../../components/CartItem";

import { removeItem } from "./shoppingCartSlice";
import { increaseAmount } from "./shoppingCartSlice";
import { decreaseAmount } from "./shoppingCartSlice";

export const ShoppingCart = (props) => {
  const { cart, dispatch } = props;

  const booksTitles = Object.keys(cart);

  const handleRemoveItem = (itemToRemove) => {
    dispatch(removeItem(itemToRemove));
  };

  const handleIncrease = (itemToIncrease) => {
    dispatch(increaseAmount(itemToIncrease));
  };
  const handleDecrease = (itemToDecrease) => {
    dispatch(decreaseAmount(itemToDecrease));
  };

  if (booksTitles.length === 0) {
    return (
      <h1
        style={{
          textAlign: "center",
          marginBottom: 40,
          padding: "2rem 0",
        }}
      >
        Your cart is empty.
      </h1>
    );
  }

  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: 40,
        padding: "2rem 0",
      }}
    >
      <h1>My Cart</h1>
      <table style={{ width: "100%" }}>
        <thead style={{ height: 60 }}>
          <tr>
            <th>Name of Book</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody
          style={{
            height: 60,
          }}
        >
          {booksTitles.map((item) => {
            return (
              <CartItem
                key={item}
                book={cart[item]}
                title={item}
                handleRemoveItem={() => handleRemoveItem(item)}
                handleDecrease={() => handleDecrease(item)}
                handleIncrease={() => handleIncrease(item)}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
