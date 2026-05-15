import  { useReducer, type ReactNode } from 'react'
import ProductContext from './ProductContext';
import { productReducer, productsInitialData } from '../../reducer/product.reducer';
import { fetchDatafns } from '../../api/function/product.function';

const ProductProvider = ({children}:{children:ReactNode}) => {

    const [productsData,dispatchproduct]=useReducer(productReducer,productsInitialData)

    const fetchProductList = async()=>{
        dispatchproduct({type:"START_FETCHING"})
        try {
          const res = await fetchDatafns();
          dispatchproduct({type:"SUCCESS_FETCHING",payload:res})
        } catch (error) {
          console.log(error)
        }
    }

  return (
    <ProductContext value={{
        fetchProductList,
        productsData,
    }}>
        {children}
    </ProductContext>
  )
}

export default ProductProvider