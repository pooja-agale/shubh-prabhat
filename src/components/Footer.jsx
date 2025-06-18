import React from "react";
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-blue-950 font-marathi  text-white capitalize py-6">
      {/* Desktop Footer */}
      <div className="hidden sm:block sm:mx-16 mx-5">
        <h1 className="font-rafgins text-2xl sm:text-4xl sm:mt-10  text-center mb-4">
          Trusted. Timely. Local - Your True
        </h1>
        <h1 className="font-rafgins text-2xl sm:text-4xl text-center mb-">
          Source for Marathi News
        </h1>

        <div className="grid grid-cols-3 gap-8 font-dm pb-4 mb-5 border-b">
          {/* Address + Policy */}
          <div className="space-y-4">
            <h1 className="text-xl underline text-red-700">Address</h1>
            <p className="text-gray-300 font-medium">
              Golden City Center <br /> Chhatrapati Sambhajinagar
            </p>
            <h1 className="text-xl underline text-red-700">
              Latest News
            </h1>
          </div>

          {/* Social Media */}
          <div className="flex justify-center pt-28 items-center space-x-6">
            {[FaInstagram, FaTwitter, FaYoutube, FaFacebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-2xl"
              >
                <Icon />
              </a>
            ))}
          </div>

          {/* Contact Info */}
          {/* Contact Info */}
          <div className="text-right space-y-4">
            <h1 className="text-xl underline text-red-700">Email</h1>
            <a
              href="mailto:indianfast@gmail.com"
              className="text-gray-300 font-medium hover:underline"
            >
              shubhprabhat@gmail.com
            </a>
            <h1 className="text-xl underline text-red-700">Contact</h1>
            <a
              href="tel:8956457852"
              className="text-gray-300 font-medium hover:underline"
            >
              8956457852
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-center text-sm">
          <h1 className="">@2025 All Rights Reserved</h1>
          <div className="flex items-center">
            <h2 className=" mr-2">Developed by</h2>
            <a href="https://techsuryaitsolution.com/">
              <img src="./../tech_surya_logo-removebg-preview 6.png"/>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="block sm:hidden px-5 mx-3">
        <h1 className="text-xl text-center mb-3">
          Trusted. Timely. Local - Your<br />
          True Source for Marathi News.
        </h1>
        <div className="space-y-4 font-dm text-sm">
          <div>
            <h1 className="text-xl font-semibold text-red-700 underline">Email</h1>
            <a
              href="mailto:indianfast@gmail.com"
              className="text-gray-300 hover:underline"
            >
              shubhprabhat@gmail.com
            </a>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-red-700 underline">Contact</h1>
            <a href="tel:8956457852" className="text-gray-300 hover:underline">
              8956457852
            </a>
          </div>

          <div>
            <h1 className="text-xl font-semibold text-red-700 underline">Address</h1>
            <p className="text-gray-300">
              Golden City Center <br /> Chhatrapati Sambhajinagar
            </p>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-red-700 underline">
              Latest News
            </h1>
          </div>
        </div>

        {/* Socials and Logo */}
        <div className="flex  pb-5 border-b  mt-6 space-x-6">
          {[FaInstagram, FaTwitter, FaYoutube, FaFacebook].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="text-xl"
            >
              <Icon />
            </a>
          ))}
        </div>

        <div className="flex flex-col  my-3 text-lg">
          <p>@2025 All Rights Reserved</p>
          <div className="flex items-center mt-1">
            <p className="mr-2">Developed by</p>
            <a href="https://techsuryaitsolution.com/">
              <img src="./../tech_surya_logo-removebg-preview 6.png" alt="logo" className="h" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
