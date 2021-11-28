export const addItem = (itemToAdd) => {
  return { type: "shoppingCart/addItem", payload: itemToAdd };
};
export const removeItem = (itemToRemove) => {
  return { type: "shoppingCart/removeItem", payload: itemToRemove };
};

export const clearCart = () => {
  return { type: "shoppingCart/clearCart" };
};

export const increaseAmount = (item) => {
  return { type: "shoppingCart/increaseAmount", payload: item };
};
export const decreaseAmount = (item) => {
  return { type: "shoppingCart/decreaseAmount", payload: item };
};

//Reducer
const initialCart = {};
export const shoppingCartReducer = (cart = initialCart, action) => {
  switch (action.type) {
    case "shoppingCart/addItem": {
      const { title, price } = action.payload;
      const amount = cart[title] ? cart[title].amount + 1 : 1;
      return { ...cart, [title]: { price: price, amount: amount } };
    }

    case "shoppingCart/removeItem": {
      const titleToRemove = action.payload;
      const newCart = cart;
      delete newCart[titleToRemove];
      return newCart;
    }

    case "shoppingCart/clearCart": {
      return initialCart;
    }
    case "shoppingCart/increaseAmount": {
      const title = action.payload;
      const { amount, price } = cart[title];
      return {
        ...cart,
        [title]: {
          price: price,
          amount: amount + 1,
        },
      };
    }
    case "shoppingCart/decreaseAmount": {
      const title = action.payload;
      const { amount, price } = cart[title];
      if (amount > 1) {
        return {
          ...cart,
          [title]: {
            price: price,
            amount: amount - 1,
          },
        };
      }
    }
    default:
      return cart;
  }
};
