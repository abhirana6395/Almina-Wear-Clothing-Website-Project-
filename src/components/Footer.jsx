import { FaInstagram, FaPinterestP, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <img
            src="/almina-logo.png"
            alt="Almina Logo"
            className="w-32 mb-4"
          />
          <p className="text-gray-400 text-sm">
            Women’s fashion redefining confidence & elegance.
          </p>
        </div>

        {/* SHOP */}
        <div>
          <h4 className="font-semibold mb-3 tracking-wider">SHOP</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Hoodies</li>
            <li className="hover:text-white cursor-pointer">Jeans</li>
            <li className="hover:text-white cursor-pointer">Knitwear</li>
            <li className="hover:text-white cursor-pointer">Accessories</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h4 className="font-semibold mb-3 tracking-wider">SUPPORT</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Orders</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="font-semibold mb-3 tracking-wider">FOLLOW</h4>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="w-10 h-10 border border-gray-700 rounded-full
              flex items-center justify-center
              hover:bg-white hover:text-black transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 border border-gray-700 rounded-full
              flex items-center justify-center
              hover:bg-white hover:text-black transition"
            >
              <FaPinterestP />
            </a>

            <a
              href="#"
              className="w-10 h-10 border border-gray-700 rounded-full
              flex items-center justify-center
              hover:bg-white hover:text-black transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © 2025 ALMINA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
