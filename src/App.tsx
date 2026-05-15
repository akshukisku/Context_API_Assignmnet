// import React from 'react'
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import ProductProvider from "./context/products/ProductProvider";
import CartProvider from "./context/cart/CartProvider";

const App = () => {
  return (
    <>
      <ProductProvider>
        <CartProvider>
          <RouterProvider router={Routes} />
        </CartProvider>
      </ProductProvider>
    </>
  );
};

export default App;
