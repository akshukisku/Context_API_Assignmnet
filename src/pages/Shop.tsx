// import React from "react";

import ProductSection from "../layout/shop/ProductSection";

const Shop = () => {
  return (
    <section className="w-full bg-zinc-950 px-5 sm:px-8 md:px-12 lg:px-20 py-10">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <p className="text-white text-sm sm:text-base">Our Products</p>

        <div className="flex-1 flex justify-center ">
          <h2 className="text-white uppercase font-black leading-none text-4xl sm:text-5xl md:text-6xl lg:text-5xl text-left">
            YOU DESERVE <span className="text-yellow-400">✦</span>
            <br />
            GOOD PRODUCTS
          </h2>
        </div>
        <div className="w-full lg:w-auto flex justify-start lg:justify-end">
          <button className="flex items-center gap-4 rounded-full bg-white text-black px-6 py-3 text-sm sm:text-base font-semibold hover:scale-105 transition duration-300">
            VIEW ALL PRODUCTS
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-black text-white text-lg">
              →
            </span>
          </button>
        </div>
      </div>

      <ProductSection/>
    </section>
  );
};

export default Shop;
