const Footer = () => {
  return (
    <footer className="bg-black text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        <div>
          <h3 className="text-3xl font-serif mb-4">ALMINA</h3>
          <p className="text-gray-400 text-sm">
            Women’s fashion redefining confidence & elegance.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">SHOP</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Hoodies</li>
            <li>Jeans</li>
            <li>Knitwear</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">SUPPORT</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Contact Us</li>
            <li>Orders</li>
            <li>Returns</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">FOLLOW</h4>
          <p className="text-gray-400 text-sm">
            Instagram · Pinterest · Twitter
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © 2025 ALMINA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
