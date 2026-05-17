import { useContext, useMemo } from "react";
import { Trash2, Minus, Plus, Clock3 } from "lucide-react";
import CartContext from "../context/cart/CartContext";

const DISCOUNT_RATE = 0.1;
const DELIVERY_FEE = 50;

const Cart = () => {
  const cartContext = useContext(CartContext);
  const cartItems = useMemo(
    () => cartContext?.cartsData?.cartItem ?? [],
    [cartContext?.cartsData?.cartItem],
  );

  const { subTotal, discount, total } = useMemo(() => {
    const subTotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    const discount = subTotal * DISCOUNT_RATE;
    const total = subTotal - discount + DELIVERY_FEE;

    return { subTotal, discount, total };
  }, [cartItems]);

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-white px-4 py-6 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
        Shopping Cart
      </h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.7fr)_minmax(320px,0.8fr)] gap-6">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-3 sm:p-5 overflow-hidden">
            <div className="hidden md:grid grid-cols-[1.7fr_1fr_1fr_60px] gap-4 px-3 py-3 text-sm font-medium text-zinc-400 border-b border-zinc-800">
              <span>Product Code</span>
              <span className="text-center">Quantity</span>
              <span className="text-center">Price</span>
              <span className="text-center">Action</span>
            </div>

            <div className="space-y-4 mt-2">
              {(cartItems.length ?? 0) > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 sm:p-4"
                  >
                    <div className="flex flex-col gap-4 md:grid md:grid-cols-[1.7fr_1fr_1fr_60px] md:items-center">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <img
                          src={item.images}
                          alt={item.title}
                          className="h-16 w-16 flex-shrink-0 rounded-xl object-cover sm:h-20 sm:w-20"
                        />
                        <div>
                          <h3 className="text-base font-medium text-white sm:text-lg">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-xs text-zinc-400 sm:text-sm">
                            Brand: {item.brand}
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-start md:justify-center">
                        <div className="inline-flex items-center gap-3 rounded-full border border-zinc-700 bg-zinc-950 px-3 py-1.5">
                          <button
                            className="text-zinc-300 hover:text-red-400 cursor-pointer"
                            onClick={() => cartContext?.decrement(item.id)}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-medium text-white">
                            {item.quantity}
                          </span>
                          <button
                            className="text-zinc-300 hover:text-red-400 cursor-pointer"
                            onClick={() => cartContext?.increment(item.id)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center justify-between md:justify-center">
                        <span className="text-sm text-zinc-400 md:hidden">
                          Total
                        </span>
                        <span className="text-md text-white sm:text-xl">
                          {item.price}
                        </span>
                      </div>

                      <div className="flex justify-end md:justify-center">
                        <button
                          className="cursor-pointer text-zinc-400 transition hover:text-red-500"
                          onClick={() => cartContext?.removeItem(item.id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-zinc-400 text-center mt-7 text-2xl">
                  Cart is empty
                </p>
              )}
            </div>
          </div>

          <aside className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 sm:p-6 h-fit">
            <h2 className="text-base sm:text-lg font-semibold text-white mb-4">
              Order Summary
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <input
                type="text"
                placeholder="Discount voucher"
                className="w-full rounded-full border border-zinc-700 bg-zinc-950 px-4 py-2.5 text-sm text-white outline-none focus:ring-2 focus:ring-white placeholder:text-zinc-500"
              />
              <button className="rounded-full border border-zinc-700 bg-zinc-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800">
                Apply
              </button>
            </div>

            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-center justify-between text-zinc-300">
                <span>Sub Total</span>
                <span className="font-medium text-white">
                  ${subTotal.toFixed(2)} USD
                </span>
              </div>

              <div className="flex items-center justify-between text-zinc-300">
                <span>Discount (10%)</span>
                <span className="font-medium text-white">
                  -${discount.toFixed(2)} USD
                </span>
              </div>

              <div className="flex items-center justify-between text-zinc-300">
                <span>Delivery fee</span>
                <span className="font-medium text-white">
                  ${DELIVERY_FEE.toFixed(2)} USD
                </span>
              </div>

              <div className="border-t border-zinc-800 pt-3 flex items-center justify-between">
                <span className="text-base sm:text-lg font-semibold text-white">
                  Total
                </span>
                <span className="text-lg sm:text-xl font-bold text-white">
                  ${total.toFixed(2)} USD
                </span>
              </div>
            </div>

            <div className="mt-5 flex items-start gap-2 text-xs sm:text-sm text-zinc-400">
              <Clock3 size={16} className="mt-0.5 flex-shrink-0" />
              <p>
                90 Day Limited Warranty against manufacturer&apos;s defects.{" "}
                <span className="underline cursor-pointer">Details</span>
              </p>
            </div>

            <button className="mt-6 w-full rounded-full bg-white py-3 text-sm sm:text-base font-medium text-black hover:bg-zinc-200 transition">
              Checkout Now
            </button>
          </aside>
        </div>
      ) : (
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center dark:border-zinc-700 dark:bg-zinc-900">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10 text-zinc-500 dark:text-zinc-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.837L5.61 7.5m0 0L7.5 15h9.75l1.65-6.6H5.61zm1.89 10.5a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zm10.5 0a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
              />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Your Cart is Empty
          </h2>

          <p className="mt-2 max-w-md text-zinc-600 dark:text-zinc-400">
            Looks like you haven’t added anything to your cart yet. Start
            shopping to fill it up.
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
