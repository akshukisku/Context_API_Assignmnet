// import React from 'react'
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes";
import ProductProvider from "./context/products/ProductProvider";
import CartProvider from "./context/cart/CartProvider";
import FormProvider from "./context/form/FormProvider";

const App = () => {
  return (
    <>
      <ProductProvider>
        <FormProvider>
          <CartProvider>
            <RouterProvider router={Routes} />
          </CartProvider>
        </FormProvider>
      </ProductProvider>
    </>
  );
};

export default App;
