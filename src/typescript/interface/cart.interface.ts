export interface CartItem {
  id: number | string;
  title: string;
  price: number;
  images: string;
  subtitle?: string;
  brand?: string;
  quantity: number;
  qty?: number;
}

export interface CartInitialData {
  cartItem: CartItem[];
  quantity: number;
}
export type AddableProduct = Omit<CartItem, "quantity">;
export interface CartContextType {
  cartsData: CartInitialData;
  addItem: (item:AddableProduct) => void;
  removeItem: (id: string | number) => void;
  increment: (id: string | number) => void;
  decrement: (id: string | number) => void;
}
