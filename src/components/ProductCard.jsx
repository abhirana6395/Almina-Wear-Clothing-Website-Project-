import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";
import QuickViewModal from "./QuickViewModal";
import { successToast } from "../utils/toast";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const navigate = useNavigate();

  const [openQuickView, setOpenQuickView] = useState(false);

  return (
    <>
      <div className="group bg-white border p-4 relative transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

        {/* ❤️ Wishlist (ALWAYS VISIBLE) */}
        <button
          onClick={() => toggleWishlist(product)}
          className="absolute top-3 right-3 z-10 text-xl"
        >
          {isWishlisted(product.id) ? "❤️" : "🤍"}
        </button>

        {/* Image */}
        <div className="overflow-hidden relative">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-[260px] sm:h-[320px] lg:h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Quick View */}
          <button
            onClick={() => setOpenQuickView(true)}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 opacity-0 group-hover:opacity-100 transition"
          >
            Quick View
          </button>
        </div>

        <h3 className="mt-4 text-sm font-semibold text-center">
          {product.name}
        </h3>

        <p className="text-pink-600 font-bold text-center mt-1">
          ₹{product.price}
        </p>

        {/* ACTIONS */}
        <div className="mt-4 space-y-2">
          <button
            onClick={() => {
              addToCart(product);
              successToast("Added to cart");
            }}
            className="w-full border border-black py-2 hover:bg-black hover:text-white transition"
          >
            Add to Cart
          </button>

          {/* 🛒 BUY NOW */}
          <button
            onClick={() => {
              addToCart(product);
              navigate("/checkout");
            }}
            className="w-full bg-black text-white py-2"
          >
            Buy Now
          </button>
        </div>
      </div>

      {openQuickView && (
        <QuickViewModal
          product={product}
          onClose={() => setOpenQuickView(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
