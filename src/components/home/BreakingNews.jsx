import React, { useEffect, useState } from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const breakingData = [
  {
    img: "./../breakingNews.png",
    headline: "BREAKING STORIES DELIVERED INSTANTLY",
    desc: "राजकीय, क्रीडा, मनोरंजन आणि जागतिक घडामोडींचे संपूर्ण\n अपडेट्स येथेच मिळवा.",
  },
  {
    img: "./../Rectangle 11.png",
    headline: "RIB'S BOLD RATE CUT",
    desc: "RBI Slashes Interest Rates Sharply: Growth Take-Off In Focus.\nIn The Biggest Rate Cut In 5 Years, RBI Governor Sanjay\n Malhotra Signals A Shift To Support 7-8% Economic Growth.\nHowever, Analysts Warn of Potential Long-Term Market\nVolatility",
  },
  {
    img: "./../Rectangle 11 (1).png",
    headline: "अनुसूचित जाती आयोगाला कायदेशीर\n दर्जा",
    desc: "SC Commission Gets Legal Status; Stipend Hike For Medical\n Students Announced"
  },
];

const BreakingNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Auto go next every 4s
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Next slide
  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingData.length);
      setFade(true);
    }, 300); // match fade duration
  };

  // Previous slide
  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + breakingData.length) % breakingData.length);
      setFade(true);
    }, 300);
  };

  const currentSlide = breakingData[currentIndex];

  return (
    <div className="relative h-screen font-marathi overflow-hidden">
      <img
        src="./../137172-fcsygzyjaw-1582609369 (2).png"
        alt="Background"
        className="w-full h-screen object-cover"
      />

      {/* Slide Content */}
      <div
        className={`absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 md:px-20 lg:px-28 lg:gap-32 text-center lg:text-left transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="mb-6 lg:mb-16 max-w-2xl">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-opacity-50 rounded-lg whitespace-pre-line leading-tight">
            {currentSlide.headline}
          </h1>
          <br />
          <p className='text-white text-md sm:text-xl md:text-2xl whitespace-pre-line'>
            {currentSlide.desc}
          </p>
        </div>

        <div className='flex flex-col items-center'>
          <img
            src={currentSlide.img}
            alt="Slide Visual"
            className=" sm:w-72 md:w-80 lg:w-auto"
          />
          <button
            className='bg-white text-red-600 py-2 px-9 underline mt-6 sm:mt-8 rounded-3xl text-lg sm:text-xl'
            onClick={() => navigate("/home/read-news")}
          >
            Read News
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-4 sm:gap-6">
        <button
          onClick={handlePrev}
          className="bg-white bg-opacity-20 text-white p-3 sm:p-4 rounded-full border border-red-400"
        >
          <MdArrowBack size={24} className="sm:size-30" />
        </button>
        <button
          onClick={handleNext}
          className="bg-white bg-opacity-20 text-white p-3 sm:p-4 rounded-full border border-red-400"
        >
          <MdArrowForward size={24} className="sm:size-30" />
        </button>
      </div>
    </div>
  );
};

export default BreakingNews;
