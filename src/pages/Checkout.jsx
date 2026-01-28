import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, totalPrice } = useCart();
  const navigate = useNavigate();

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    navigate("/order-success");
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      {/* LEFT — FORM */}
      <form
        onSubmit={handlePlaceOrder}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold mb-4">
          Checkout
        </h2>

        <input
          required
          placeholder="Full Name"
          className="w-full border px-4 py-3"
        />
        <input
          required
          placeholder="Email"
          type="email"
          className="w-full border px-4 py-3"
        />
        <input
          required
          placeholder="Phone"
          className="w-full border px-4 py-3"
        />
        <textarea
          required
          placeholder="Shipping Address"
          className="w-full border px-4 py-3"
        />

        {/* PAYMENT */}
        <div>
          <p className="font-semibold mb-2">
            Payment Method
          </p>
          <div className="space-y-2">
            <label className="flex gap-2 items-center">
              <input type="radio" checked readOnly />
              Cash on Delivery
            </label>
            <label className="flex gap-2 items-center opacity-50">
              <input type="radio" disabled />
              Online Payment (Coming Soon)
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="
            w-full bg-black text-white py-3
            hover:opacity-90 transition
          "
        >
          Place Order
        </button>
      </form>

      {/* RIGHT — SUMMARY */}
      <div className="border p-6 h-fit sticky top-24">
        <h3 className="text-xl font-bold mb-4">
          Order Summary
        </h3>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between text-sm mb-2"
          >
            <span>
              {item.name} × {item.qty}
            </span>
            <span>
              ₹{(item.price * item.qty).toFixed(2)}
            </span>
          </div>
        ))}

        <hr className="my-4" />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
