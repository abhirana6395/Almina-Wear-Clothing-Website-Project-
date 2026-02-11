import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { createRazorpayOrder, verifyPayment } from "../api/paymentApi";

const Checkout = () => {
  const { cart, totalPrice } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handlePayment = async (e) => {
    e.preventDefault();

    const form = e.target;

    const address = {
      fullName: form.fullName.value,
      phone: form.phone.value,
      pincode: form.pincode.value,
      city: form.city.value,
      state: form.state.value,
      addressLine: form.addressLine.value,
    };

    const { data } = await createRazorpayOrder(totalPrice * 100);

    const options = {
      key: "rzp_test_SESslrvSTpQGXw",
      amount: data.amount,
      currency: "INR",
      order_id: data.id,
      handler: async function (response) {
        await verifyPayment({
          razorpayOrderId: data.id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpaySignature: response.razorpay_signature,
          email: user.email,
          totalAmount: totalPrice,
          items: cart,
          address,
        });

        navigate("/order-success");
      },
    };

    new window.Razorpay(options).open();
  };

  return (
    <form onSubmit={handlePayment} className="max-w-3xl mx-auto py-16 space-y-4">
      <h1 className="text-3xl font-bold">Checkout</h1>

      <input name="fullName" placeholder="Full Name" className="border p-3 w-full" />
      <input name="phone" placeholder="Phone" className="border p-3 w-full" />
      <input name="pincode" placeholder="Pincode" className="border p-3 w-full" />
      <input name="city" placeholder="City" className="border p-3 w-full" />
      <input name="state" placeholder="State" className="border p-3 w-full" />
      <textarea name="addressLine" placeholder="Full Address" className="border p-3 w-full" />

      <button className="bg-black text-white py-4 w-full rounded-xl">
        Pay ₹{totalPrice}
      </button>
    </form>
  );
};

export default Checkout;