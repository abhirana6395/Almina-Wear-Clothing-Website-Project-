import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("almina-wishlist"));
    if (Array.isArray(stored)) {
      setWishlist(stored);
    }
  }, []);

  // Save wishlist to localStorage
  useEffect(() => {
    localStorage.setItem(
      "almina-wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      return exists
        ? prev.filter((p) => p.id !== product.id)
        : [...prev, product];
    });
  };

  const isWishlisted = (id) => {
    return wishlist.some((p) => p.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
        isWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// ✅ Stable hook export (important for Vite)
export const useWishlist = () => {
  return useContext(WishlistContext);
};
