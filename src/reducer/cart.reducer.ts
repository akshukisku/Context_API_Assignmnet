import type { CartInitialData } from "../typescript/interface/cart.interface";
import type { CartActionType } from "../typescript/type/cart.type";

export const cartInitialData: CartInitialData = {
  cartItem: [],
  quantity: 1,
};

export const cartReducer = (
  state: CartInitialData,
  action: CartActionType,
): CartInitialData => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.cartItem.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        // item already in cart → just increase quantity
        return {
          ...state,
          cartItem: state.cartItem.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      // new item → add to cart
      return {
        ...state,
        cartItem: [...state.cartItem, { ...action.payload, quantity: 1 }],
      };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItem: state.cartItem.filter((item) => item.id !== action.payload),
      };
    case "INCREASE_QTY":
      return {
        ...state,
        cartItem: state.cartItem.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };

    case "DECREASE_QTY":
      return {
        ...state,
        cartItem: state.cartItem.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item,
        ),
      };
    default:
      return state;
  }
};
