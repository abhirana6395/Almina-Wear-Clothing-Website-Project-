import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [justAdded, setJustAdded] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("almina-cart"));
    if (stored) setCart(stored);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("almina-cart", JSON.stringify(cart));
  }, [cart]);

  // ✅ ADD TO CART (with qty + animation flag)
  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((p) => p.id === product.id);

      if (found) {
        return prev.map((p) =>
          p.id === product.id
            ? { ...p, qty: p.qty + 1 }
            : p
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });

    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 400);
  };

  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, qty: p.qty + 1 } : p
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, qty: p.qty - 1 } : p
        )
        .filter((p) => p.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  // ✅ Cart summary
  const cartCount = cart.reduce((sum, p) => sum + p.qty, 0);
  const totalPrice = cart.reduce(
    (sum, p) => sum + p.price * p.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        totalPrice,
        justAdded,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
