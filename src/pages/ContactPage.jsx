import React from "react";

const ContactPage = () => {
  return (
    <div className="relative w-full font-marathi">
      {/* Background Image */}
      <img
        src="./../Rectangle 97.png"
        className="w-full h-screen object-cover"
        alt="Contact background"
      />

      {/* Contact Form Overlay */}
      <div className="absolute inset-0 flex items-center lg:justify-center rounded-3xl p-8">
        <form className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl mb-6 text-center">Contact Us</h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-3 rounded-xl bg-gray-100"
          />
          <input
            type="email"
            placeholder="Email / Mobile No"
            className="w-full mb-4 p-3 rounded-xl bg-gray-100"
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-4 p-3 rounded-xl bg-gray-100"
            rows="4"
          ></textarea>
          <div className="flex justify-center p-2">
            <button
              type="submit"
              className="bg-blue-950 text-white py-2 px-12 rounded-xl transition text-2xl"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
