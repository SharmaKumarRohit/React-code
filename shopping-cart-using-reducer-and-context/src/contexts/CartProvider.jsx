import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return [...cart, action.payload];
    }
    case "INCREASE_QTY": {
      return cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else {
          return cartItem;
        }
      });
    }
    case "DECREASE_QTY": {
      return cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        } else {
          return cartItem;
        }
      });
    }
    case "REMOVE_ITEM": {
      return cart.filter((cartItem) => cartItem.id !== action.payload.id);
    }
  }
  return cart;
}
function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const addItemToCart = (newCartItem) => {
    dispatch({ type: "ADD_ITEM", payload: newCartItem });
  };
  const increaseQty = (id) => {
    dispatch({ type: "INCREASE_QTY", payload: { id } });
  };
  const decreaseQty = (id) => {
    dispatch({ type: "DECREASE_QTY", payload: { id } });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };
  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, increaseQty, decreaseQty, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export default CartProvider;
