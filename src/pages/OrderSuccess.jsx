import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useCart } from "../context/CartContext";

const OrderSuccess = () => {
  const { cart, removeFromCart } = useCart();

  // clear cart after order
  useEffect(() => {
    cart.forEach((item) => removeFromCart(item.id));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gray-50">
      <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full animate-fadeIn">

        <div className="text-6xl mb-4">🎉</div>

        <h1 className="text-3xl font-bold mb-2">
          Order Placed Successfully
        </h1>

        <p className="text-gray-600 mb-8">
          Thank you for shopping with ALMINA.  
          Your order is on its way 💖
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/shop"
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            Continue Shopping
          </Link>

          <Link
            to="/orders"
            className="border px-6 py-3 rounded-xl"
          >
            View Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
