const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Let’s Talk 💬
        </h1>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Questions, feedback, or just want to say hi?  
          We’d love to hear from you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { title: "Email", value: "support@almina.com", emoji: "📧" },
            { title: "Call", value: "+91 98765 43210", emoji: "📞" },
            { title: "Visit", value: "Gurgaon, India", emoji: "📍" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition"
            >
              <div className="text-3xl mb-4">{item.emoji}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Send us a message
          </h2>

          <form className="space-y-4">
            <input className="w-full border p-4 rounded-xl" placeholder="Your Name" />
            <input className="w-full border p-4 rounded-xl" placeholder="Your Email" />
            <textarea
              rows="4"
              className="w-full border p-4 rounded-xl"
              placeholder="Your Message"
            />
            <button className="w-full py-4 rounded-xl bg-black text-white hover:opacity-90 transition">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;


