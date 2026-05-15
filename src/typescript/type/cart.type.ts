import type { AddableProduct } from "../interface/cart.interface";

export type CartActionType =
  | { type: "ADD_ITEM"; payload: AddableProduct }
  | { type: "REMOVE_ITEM"; payload: string | number }
  | { type: "INCREASE_QTY"; payload: string | number } 
  | { type: "DECREASE_QTY"; payload: string | number }; 
