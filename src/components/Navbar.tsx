import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { navLeftItems, navRightItem } from "../services/json/navbar.json";
import { useContext, useState } from "react";
import CartContext from "../context/cart/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const cartContext = useContext(CartContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartCount = cartContext?.cartsData?.cartItem?.length || 0;

  const handleNavigate = (path?: string) => {
    if (path) {
      navigate(path);
      setMobileMenuOpen(false);
    }
  };

  const navButtonClass =
    "rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs sm:px-4 sm:text-sm text-white transition hover:bg-white/10";

  return (
    <header className="w-full bg-zinc-950 px-4 py-4 sm:px-6 lg:px-10">
      <nav className=" flex  items-center justify-between gap-4">
        <ul className="hidden md:flex flex-wrap items-center gap-2 lg:gap-3">
          {navLeftItems.map((it) => (
            <li key={it.label}>
              <button
                type="button"
                className={navButtonClass}
                onClick={() => handleNavigate(it.path)}
              >
                {it.label}
              </button>
            </li>
          ))}
        </ul>

        <div
          className="cursor-pointer text-xl font-black tracking-tight text-white sm:text-2xl lg:text-4xl"
          onClick={() => navigate("/")}
        >
          ZEND
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <ul className="flex flex-wrap items-center gap-2 lg:gap-3">
            {navRightItem.map((it) => (
              <li key={it.label}>
                <button
                  type="button"
                  className={navButtonClass}
                  onClick={() => handleNavigate(it.path)}
                >
                  {it.label}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="relative rounded-full border border-white/15 bg-white/5 px-6 py-2 text-white transition hover:bg-white/10"
            onClick={() => navigate("/cart")}
          >
            Cart
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-zinc-950">
              {cartCount}
            </span>
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            className="relative rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
            onClick={() => navigate("/cart")}
          >
            Cart
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-zinc-950">
              {cartCount}
            </span>
          </button>

          <button
            className="rounded-full border border-white/15 bg-white/5 p-2 text-white transition hover:bg-white/10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 md:hidden">
          <ul className="flex flex-col gap-2">
            {navLeftItems.map((it) => (
              <li key={it.label}>
                <button
                  type="button"
                  className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2 text-left text-sm text-white transition hover:bg-white/10"
                  onClick={() => handleNavigate(it.path)}
                >
                  {it.label}
                </button>
              </li>
            ))}

            {navRightItem.map((it) => (
              <li key={it.label}>
                <button
                  type="button"
                  className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2 text-left text-sm text-white transition hover:bg-white/10"
                  onClick={() => handleNavigate(it.path)}
                >
                  {it.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;