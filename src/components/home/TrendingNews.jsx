import React from "react";
import { useNavigate } from "react-router-dom";

const trendingNewsData = [
  {
    img: "./../Rectangle 47.png",
    headline: "FIR Filed Against 29 RMS Plants in Vasai",
  },
  {
    img: "./../Rectangle 48.png",
    headline: "Shocking Pune Accident: Womens Hit by Speeding Truck",
  },
  {
    img: "./../Rectangle 49.png",
    headline: "Honey Village'Project to Launch in Maharashtra",
  },
];

const TrendingNews = () => {
  const navigate = useNavigate();

  return (
    <div className="font-marathi">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 px-4 md:px-14 py-8 bg-gray-200">
        <h3 className="text-3xl md:text-4xl whitespace-nowrap text-gray-800">
          Trending News
        </h3>
        <div className="w-full md:flex-grow h-2 bg-red-600 rounded-full"></div>
        <p className="cursor-pointer whitespace-nowrap text-xl md:text-2xl text-gray-600">
          View All
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row lg:py-24 px-4 md:px-16 py-10 gap-8 md:gap-12">
        {/* Left Image with overlay */}
        <div className="relative w-full md:w-1/2">
          <img
            src="./../Rectangle 46.png"
            className="w-full h-[540px] object-cover rounded-xl"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl"></div>

          {/* Bottom Text */}
          <div className="flex absolute bottom-4 left-4 right-4 text-white text-2xl md:text-4xl z-10">
            <p>
              🏛️फडणवीस बोले - "महापालिका निवडणुका महायुती अंतर्गत", स्थानिक
              रणनीतीवर भर
            </p>
          </div>
        </div>

        {/* Right News List */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {trendingNewsData.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <img
                src={item.img}
                alt={`Trending ${index}`}
                className=" rounded-lg object-cover"
              />
              <div className="space-y-2 md:space-y-4">
                <p className="text-gray-500 text-base md:text-xl">
                  15 June 2025
                </p>
                <p className="text-lg md:text-3xl text-gray-800">
                  {item.headline}
                </p>
                <button className="text-red-500 underline text-sm md:text-lg"
                onClick={() => navigate("/home/read-news")}>
                  Read News
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingNews;
