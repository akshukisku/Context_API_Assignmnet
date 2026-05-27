import { Heart, Lock } from "lucide-react";
import { useContext, useEffect } from "react";
import ProductContext from "../../context/products/ProductContext";
import CartContext from "../../context/cart/CartContext";

const categories = [
  "ALL PRODUCTS (51)",
  "SHIRT (13)",
  "DRESS (10)",
  "UNDERWEAR (2)",
  "BAG (2)",
  "WATCHES (12)",
  "CAPS (10)",
  "ON SALE (2)",
];

const ProductSection = () => {
  const proctContext = useContext(ProductContext);

  const cartContext = useContext(CartContext);
  if (!proctContext) {
    throw new Error("Product context is not defined");
  }
  // console.log("Product page", proctContext);

  useEffect(() => {
    proctContext.fetchProductList();
  }, []);

  console.log("cartItem", cartContext?.cartsData);

  return (
    <section className="min-h-screen bg-zinc-950 text-white px-4 py-6 md:px-8 lg:px-10">
      {/* Main Layout */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr]">
        {/* ================= SIDEBAR ================= */}
        <aside className="space-y-10">
          {/* Category Form */}
          <form className="space-y-4">
            {categories.map((item, index) => (
              <label
                key={index}
                className="flex cursor-pointer items-center gap-3 text-sm font-medium uppercase tracking-wide"
              >
                <input type="radio" name="category" className="accent-white" />
                {item}
              </label>
            ))}
          </form>

          {/* Description */}
          <p className="max-w-[220px] text-sm leading-6 text-gray-300">
            At the core of our philosophy is a commitment to open-mindedness and
            a willingness to learn and grow. We recognize
          </p>
        </aside>

        {/* ================= PRODUCT CARDS ================= */}
        {proctContext.productsData.isLoading ? (
          <p>Loading.........</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {proctContext?.productsData?.list?.map((product) => (
              <div key={product.id} className="group">
                {/* Card */}
                <div className="relative overflow-hidden rounded-[28px] bg-[#1a001f]">
                  {/* Product Image */}
                  <img
                    src={product.images}
                    alt={product.title}
                    className="h-[120px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[00px] lg:h-[300px]"
                  />

                  {/* Bottom Icons */}
                  <div className="absolute bottom-5 right-5 flex items-center gap-3">
                    {/* Heart */}
                    <button className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                      <Heart
                        size={24}
                        className="transition-all duration-300 hover:fill-black"
                      />
                    </button>

                    {/* Lock */}
                    <button
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-red-700 hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"
                      onClick={() => cartContext?.addItem(product)}
                    >
                      <Lock
                        size={22}
                        className="transition-all duration-300"
                      />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="mt-5">
                  <h2 className="text-3xl font-black uppercase leading-none tracking-tight md:text-2xl">
                    {product.title}
                  </h2>

                  <p className="mt-3 text-lg text-gray-300">
                    $ {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
