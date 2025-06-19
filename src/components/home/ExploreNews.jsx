import React from "react";

const ExploreNews = () => {
  return (
    <div className="font-marathi space-y-12">
      {/* Top Heading */}
      <div className="grid justify-center pt-4 sm:p-8 gap-y-2 sm:gap-y-4 text-center sm:text-left">
        <p className="text-2xl sm:text-3xl sm:ml-20">Explore News By Category</p>
        <p className="text-sm sm:text-lg px-4 sm:px-0">
          Stay Informed With The Latest Updates Tailored To Your Interests.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-y-8 md:gap-x-12 px-4 sm:px-10 py-8">
        <div className="flex justify-center">
          <img src="./../Group 37163.png" className="sm:w-96 md:w-auto" />
        </div>
        <div className="space-y-5 text-center md:text-left px-4 sm:px-0">
          <h1 className="text-red-600 text-2xl sm:text-4xl">
            तुमच्या आवडीच्या बातम्या इथे
            <br /> मिळतील !
          </h1>
          <p className="text-gray-500 text-sm sm:text-lg leading-relaxed">
            Politics, Sports, Entertainment, Education, World Affairs
            <br />
             & More Discover The Latest News Tailored To Your Interests.
            <br />
            Just One Click Connects You To Timely Updates From Your
            <br />
             Favorite Categories. Your News, In Your Language.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-red-600 p-3 rounded-xl text-white text-sm sm:text-base">
              Download E-paper
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreNews;
