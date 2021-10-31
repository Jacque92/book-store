import React from "react";
import { CartItem } from "../../components/CartItem";

export const ShoppingCart = ({
  items,
  removeBookHandler,
  addToCartHandler,
  decreaseHandler,
}) => {
  const booksTitles = Object.keys(items);
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
                title={item}
                item={items[item]}
                removeBookHandler={removeBookHandler}
                addToCartHandler={addToCartHandler}
                decreaseHandler={decreaseHandler}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
