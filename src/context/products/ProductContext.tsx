import  { createContext } from 'react'
import type { ProductsContextType } from '../../typescript/interface/products.interface';

const ProductContext = createContext<ProductsContextType | null>(null)

export default ProductContext