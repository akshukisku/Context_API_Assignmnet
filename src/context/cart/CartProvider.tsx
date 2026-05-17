import { useReducer, type ReactNode } from "react";
import CartContext from "./CartContext";
import { cartInitialData, cartReducer } from "../../reducer/cart.reducer";
import type { AddableProduct,  } from "../../typescript/interface/cart.interface"; 

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartsData, dispatchCart] = useReducer(cartReducer, cartInitialData);

// CartProvider.tsx
const addItem = (item: AddableProduct) => {
  dispatchCart({
    type: "ADD_ITEM",
    payload: {
      ...item,
      price: Number(item.price),
    },
  });
};

  const removeItem = (id: string | number) => { 
    dispatchCart({ type: "REMOVE_ITEM", payload: id });
  };

const increment = (id: string | number) => {
  dispatchCart({ type: "INCREASE_QTY", payload: id });
};

const decrement = (id: string | number) => {
  dispatchCart({ type: "DECREASE_QTY", payload: id });
};

  return (
    <CartContext
      value={{
        cartsData,
        addItem,
        removeItem,
        increment,
        decrement
      }}
    >
      {children}
    </CartContext>
  );
};

export default CartProvider;