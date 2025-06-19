import React, { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("Home");
  const [selected, setSelected] = useState("Home")
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navOptions = [
    "Home",
    "About",
    "Categories",
    "Contact",
    "Saved News",
    "Blogs",
  ];

  const navLinks = {
    Home: "/home",
    About: "/about",
    Categories: "/categories",
    Contact: "/contact",
    "Saved News": "/saved-news",
    Blogs: "/blogs",
  };

  return (
    <div className="font-marathi sticky top-0 z-50 bg-white">
      {/* Header */}
      <div className="py-5 px-4 sm:px-14">
        <div className="flex items-center justify-between text-white">
          {/* Left Icons */}
          <div className="flex gap-2 sm:gap-4">
            <button className="px-7 py-2 rounded-md text-white bg-gradient-to-r from-[#0B0F3B] to-[#E30613]">
              👉 इ-पेपर वाचा
            </button>
          </div>

          {/* Center Title */}
          <h1 className="text-red-600 text-2xl sm:text-5xl font-medium text-center">
            शुभ&nbsp;प्रभात
          </h1>

          {/* Right Toggle (Mobile) / Button (Desktop) */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-red-600 text-2xl"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <div className="hidden sm:block">
            <button className="px-7 py-2 rounded-md text-white bg-gradient-to-r from-[#0B0F3B] to-[#E30613]">
              Login / Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="hidden sm:flex bg-[#12294A] gap-6 py-4 text-white justify-center gap-x-20">
          {navOptions.map((item, index) => (
            <Link
              to={navLinks[item]}
              key={index}
              onClick={() => setSelected(item)}
              className={`text-2xl p-2 hover:bg-red-600 hover:rounded-md ${
                selected === item ? "bg-red-600 rounded-md" : ""
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      )}

      {/* Desktop Navbar */}
      <div className="hidden sm:flex bg-[#12294A] gap-6 py-4 text-white justify-center gap-x-20">
        {navOptions.map((item, index) => {
          const isActive = location.pathname === navLinks[item];
          return (
            <Link
              to={navLinks[item]}
              key={index}
              className={`text-2xl p-2 hover:bg-red-600 hover:rounded-md ${
                isActive ? "bg-red-600 rounded-md" : ""
              }`}
            >
              {item}
            </Link>
          );
        })}
      </div>

      {/* Breaking News */}
      {["/home", "/categories", "/contact", "/saved-news", "/blogs"].includes(
        location.pathname
      ) && (
        <div className="bg-red-600 py-3 text-white overflow-hidden whitespace-nowrap text-lg">
          <div className="flex w-max animate-marquee">
            {/* Duplicate set for seamless loop */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex">
                <span className="mx-6">
                  📰 राज्यात प्रत्येक जिल्ह्यात 'हनी व्हिलेज'; लवकरच हनी कॅफे
                </span>
                <span className="mx-6">
                  💰 RBI चा मोठा निर्णय - व्याजदरात घट
                </span>
                <span className="mx-6">
                  🥛 राज्यात दारूचे दर ९ ते ७०% पर्यंत वाढले
                </span>
                <span className="mx-6">🎓 इ.११वी प्रवेश यादी जाहीर</span>
                <span className="mx-6">
                  🏛️ SC आयोगाला कायदेशीर दर्जा, वैद्यकीय विद्यार्थ्यांच्या
                  स्टायपेंडमध्ये वाढ
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
