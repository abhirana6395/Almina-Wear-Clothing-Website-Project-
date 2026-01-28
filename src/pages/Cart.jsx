import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
        <img
          src="/images/empty-cart.png"
          alt="Empty Cart"
          className="w-64 mb-6 opacity-80"
        />
        <h2 className="text-2xl font-semibold mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-500 mb-6 text-center">
          Looks like you haven’t added anything yet
        </p>
        <Link to="/shop" className="bg-black text-white px-6 py-3">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-3 gap-10">

      {/* ITEMS */}
      <div className="lg:col-span-2 space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row gap-4 border p-4 items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-28 object-cover"
            />

            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-pink-600 font-bold">
                ₹{item.price}
              </p>

              <div className="flex items-center gap-4 mt-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="border px-4 py-2 rounded-md hover:bg-black hover:text-white"
                >
                  −
                </button>

                <span className="font-semibold">
                  {item.qty}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="border px-4 py-2 rounded-md hover:bg-black hover:text-white"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-sm text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* SUMMARY */}
      <div className="border p-6 h-fit sticky top-24">
        <h3 className="text-xl font-bold mb-4">
          Order Summary
        </h3>

        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-4 text-gray-500">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <hr className="mb-4" />

        <div className="flex justify-between font-bold text-lg mb-6">
          <span>Total</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>

        <Link
          to="/checkout"
          className="block text-center bg-black text-white py-3"
        >
          Proceed to Checkout
        </Link>
      </div>
    </section>
  );
};

export default Cart;
