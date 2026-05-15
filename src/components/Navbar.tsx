import { Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { navLeftItems, navRightItem } from "../services/json/navbar.json";
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
 
  const cartContext = useContext(CartContext);
  return (
    <header className="w-full p-4 sm:px-6 lg:px-10 pt-4 bg-zinc-950">
      <nav className="flex flex-wrap items-center justify-between gap-3">
        <ul className="flex flex-wrap items-center gap-2">
          {navLeftItems.map((it) => (
            <li key={it.label}>
              <button
                type="button"
                className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs sm:px-4 sm:text-sm text-white transition hover:bg-white/10"
                onClick={() => it.path && navigate(it.path)}
              >
                {it.label}
              </button>
            </li>
          ))}
        </ul>

        <div
          className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white cursor-pointer"
          onClick={() => navigate("/")}
        >
          ZEND
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <ul className="flex flex-wrap items-center gap-2">
            {navRightItem.map((it) => (
              <li key={it.label}>
                <button
                  type="button"
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs sm:px-4 sm:text-sm text-white transition hover:bg-white/10"
                  onClick={() => it.path && navigate(it.path)}
                >
                  {it.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="relative">
            <button
              className="rounded-full border border-white/15 bg-white/5 px-7 py-2 text-white"
              onClick={() => navigate("/cart")}
            >
              Cart
            </button>

            <span className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full  text-[10px] text-white">
              {cartContext?.cartsData?.cartItem.length} 
            </span>
          </div>
        </div>

        <button className="lg:hidden rounded-full border border-white/15 bg-white/5 p-2 text-white">
          <Menu size={20} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
