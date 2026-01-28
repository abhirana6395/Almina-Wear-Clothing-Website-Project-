import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import products from "../data/products";
import { useAuth } from "../context/AuthContext";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount, justAdded } = useCart();
  const navigate = useNavigate();

  const filtered =
    query.length > 0
      ? products
          .filter((p) =>
            p.name.toLowerCase().includes(query.toLowerCase())
          )
          .slice(0, 5)
      : [];

  const handleSelect = (name) => {
    navigate(`/shop?search=${name.toLowerCase()}`);

    setQuery("");
    setShowSearch(false);
    setOpen(false);
  };

  const { isLoggedIn, logout } = useAuth();


  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-serif font-bold">
          ALMINA
        </Link>

        {/* DESKTOP SEARCH */}
        <div className="relative hidden md:block">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSearch(true);
            }}
            onBlur={() => setTimeout(() => setShowSearch(false), 150)}
            placeholder="Search products..."
            className="border rounded-full px-4 py-2 w-56 outline-none"
          />

          {showSearch && filtered.length > 0 && (
            <div className="absolute top-12 w-full bg-white shadow-lg rounded-xl overflow-hidden">
              {filtered.map((p) => (
                <div
                  key={p.id}
                  onClick={() => handleSelect(p.name)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <span className="text-sm">{p.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 items-center">
          {["Shop", "Account", "Orders", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {/* CART */}
          <Link to="/cart" className="relative">
            <span
              className={`text-xl ${
                justAdded ? "animate-cartBounce" : ""
              }`}
            >
              🛒
            </span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-pink-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
            {isLoggedIn && (
  <button
    onClick={logout}
    className="text-sm underline ml-4"
  >
    Logout
  </button>
)}


        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE SLIDE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => setOpen(false)}
          className="text-2xl absolute top-4 right-4"
        >
          ✕
        </button>

        {/* MOBILE SEARCH */}
        <div className="mt-20 px-6">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSearch(true);
            }}
            placeholder="Search products..."
            className="w-full border rounded-full px-4 py-3 outline-none"
          />

          {showSearch && filtered.length > 0 && (
            <div className="mt-3 bg-white shadow rounded-xl overflow-hidden">
              {filtered.map((p) => (
                <div
                  key={p.id}
                  onClick={() => handleSelect(p.name)}
                  className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <span className="text-sm">{p.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* MOBILE LINKS */}
        <nav className="mt-8 flex flex-col">
          {["Home", "Shop", "Account", "Orders", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="px-6 py-4 text-lg hover:bg-gray-100 transition"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
