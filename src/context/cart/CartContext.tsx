import  { createContext } from 'react'
import type { CartContextType } from '../../typescript/interface/cart.interface';

const CartContext = createContext<CartContextType | null>(null)

export default CartContext