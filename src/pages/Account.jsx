import { useRef, useState } from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";


const Account = () => {
  const [section, setSection] = useState("dashboard");
const { wishlist, toggleWishlist } = useWishlist();
const { addToCart } = useCart();


const { isLoggedIn, user, logout } = useAuth();

if (!isLoggedIn) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">
        Welcome to ALMINA ✨
      </h2>
      <p className="text-gray-500 mb-6">
        Login or create an account to continue
      </p>

      <div className="flex gap-4">
        <Link to="/login" className="bg-black text-white px-6 py-3">
          Login
        </Link>
        <Link to="/signup" className="border px-6 py-3">
          Sign Up
        </Link>
      </div>
    </div>
  );
}



  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <h1 className="text-4xl font-bold mb-2">
          My Space ✨
        </h1>
        <p className="text-gray-600 mb-12">
          Everything about your ALMINA journey, in one place.
        </p>

        {/* DASHBOARD */}
        {section === "dashboard" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
            {[
              { key: "orders", title: "My Orders", desc: "Track & manage orders", emoji: "📦" },
              { key: "wishlist", title: "Wishlist", desc: "Your saved styles", emoji: "❤️" },
              { key: "profile", title: "Profile", desc: "Personal info", emoji: "👤" },
              { key: "addresses", title: "Addresses", desc: "Shipping details", emoji: "🏠" },
              { key: "payments", title: "Payments", desc: "Saved methods", emoji: "💳" },
              { key: "settings", title: "Settings", desc: "Security & preferences", emoji: "⚙️" },
            ].map((item) => (
              <div
                key={item.key}
                onClick={() => setSection(item.key)}
                className="
                  bg-white p-8 rounded-2xl shadow
                  hover:-translate-y-2 hover:shadow-xl
                  transition cursor-pointer
                "
              >
                <div className="text-3xl mb-4">{item.emoji}</div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}
  
        {/* ORDERS */}
        {section === "orders" && (
          <AccountSection title="My Orders" onBack={() => setSection("dashboard")}>
            <div className="space-y-4">
              {[1, 2].map((order) => (
                <div
                  key={order}
                  className="border rounded-xl p-4 flex justify-between items-center hover:shadow transition"
                >
                  <div>
                    <p className="font-semibold">Order #ALM{order}234</p>
                    <p className="text-sm text-gray-500">
                      Placed on 12 Sep 2025
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold">₹129.99</p>
                    <span className="text-sm text-green-600">
                      Delivered
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </AccountSection>
        )}

        {/* WISHLIST */}
        {/* WISHLIST */}
{section === "wishlist" && (
  <AccountSection
    title="Wishlist ❤️"
    onBack={() => setSection("dashboard")}
  >
    {wishlist.length === 0 ? (
      <p className="text-gray-500">No items in wishlist ❤️</p>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="border p-4 hover:shadow-lg transition relative"
          >
            {/* Remove from wishlist */}
            <button
              onClick={() => toggleWishlist(item)}
              className="absolute top-3 right-3 text-xl"
            >
              ❤️
            </button>

            <img
              src={item.image}
              alt={item.name}
              className="h-56 w-full object-cover mb-3"
            />

            <p className="font-semibold">{item.name}</p>
            <p className="text-pink-600 font-bold">
              ₹{item.price}
            </p>

            <button
              onClick={() => addToCart(item)}
              className="mt-3 w-full border py-2 hover:bg-black hover:text-white transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    )}
  </AccountSection>
)}


        {/* PROFILE */}
        {section === "profile" && (
          <AccountSection title="Profile" onBack={() => setSection("dashboard")}>
            <ProfileSection />
          </AccountSection>
        )}

        {/* SETTINGS */}
        {section === "settings" && (
          <AccountSection title="Settings" onBack={() => setSection("dashboard")}>
            <div className="space-y-6 max-w-md">
              {[
                "Email notifications",
                "SMS updates",
                "Dark mode (coming soon)",
              ].map((label) => (
                <div
                  key={label}
                  className="flex justify-between items-center"
                >
                  <span>{label}</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-black transition"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition"></div>
                  </label>
                </div>
              ))}
            </div>
          </AccountSection>
        )}

      </div>
    </div>
  );
};

/* 🔁 Reusable Section Wrapper */
const AccountSection = ({ title, onBack, children }) => (
  <div className="animate-fadeIn">
    <button
      onClick={onBack}
      className="mb-6 text-sm underline"
    >
      ← Back
    </button>
    <h2 className="text-2xl font-bold mb-6">{title}</h2>
    {children}
  </div>
);

/* 👤 PROFILE WITH AVATAR PREVIEW */
const ProfileSection = () => {
  const [avatar, setAvatar] = useState(null);
  const fileRef = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  return (
    <div className="space-y-6 max-w-md animate-fadeIn">

      {/* Avatar */}
      <div className="relative w-24 h-24 group">
        <img
          src={avatar || "/images/avatar-placeholder.png"}
          alt="Avatar"
          className="w-24 h-24 rounded-full object-cover border"
        />
        <button
          onClick={() => fileRef.current.click()}
          className="
            absolute inset-0 bg-black/60 text-white text-sm
            flex items-center justify-center
            rounded-full opacity-0
            group-hover:opacity-100 transition
          "
        >
          Change
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileRef}
          hidden
          onChange={handleImageChange}
        />
      </div>

      <input
        placeholder="Full Name"
        className="w-full border px-4 py-2"
      />
      <input
        placeholder="Email"
        className="w-full border px-4 py-2"
      />
      <input
        placeholder="Phone"
        className="w-full border px-4 py-2"
      />

      <button className="bg-black text-white px-6 py-2">
        Save Changes
      </button>
    </div>
  );
};

export default Account;
