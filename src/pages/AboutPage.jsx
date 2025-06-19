import React from "react";

const AboutPage = () => {
  return (
    <div className="font-marathi">
      <div className="relative w-full">
        {/* Background Image */}
        <img
          src="./../Rectangle 66 (1).png"
          className="w-full h-auto object-cover"
          alt="About"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 space-y-3 sm:space-y-4 md:space-y-6">
          <h1 className="text-white text-sm sm:text-3xl md:text-4xl lg:text-5xl leading-snug md:leading-[3.5rem] lg:leading-[4rem]">
            YOUR TRUSTED & TIMELY
            <br />
            SOURCE FOR MARATHI &
            <br />
            <span className="block md:inline md:ml-16 lg:ml-24">
              ENGLISH NEWS
            </span>
          </h1>

          {/* ✅ Image centered below text */}
          <img
            src="./../Group 37166.png"
            alt="Decorative line"
            className="w-32 sm:w-40 md:w-52 lg:w-auto"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <div className="space-y-8 lg:px-14 lg:py-10 p-6">
          <h1 className="lg:text-6xl text-[#12294A] lg:leading-[5rem] text-2xl">
            " <span className="text-red-700">Truth</span> In News, Trust
            <br /> In Words "
          </h1>
          <img src="./../Rectangle 69.png" />
          <img src="./../Rectangle 70.png" />
        </div>

        <div className="lg:pt-14 text-[#0000006B] lg:text-xl text-md lg:leading-[2rem] space-y-4 relative p-6">
          <div>
            <p>
              We bring you a reliable, fast, and easy-to-use
              <br /> Marathi news platform that keeps you informed
              <br /> around the clock. Covering diverse categories
              <br /> such as Politics, Education, Health, Agriculture,
              <br /> Sports, and Entertainment, we deliver news that
              <br /> matters — from local happenings to national
              <br /> headlines.
            </p>
            <p className="mt-8 mb-0">
              Our mission is to provide timely, accurate, and
              <br /> people-centric journalism. Whether you’re on
              <br /> mobile, tablet, or desktop — we’re always here
              <br /> to keep you updated.
            </p>

            <img
              src="./../4060721c-dd6d-431b-a41a-95cbcac22fa9 1 (1).png"
              alt="Right Side Image"
              className="md:ml-80"
            />
          </div>
        </div>
      </div>

      <div className="font-marathi py-10 bg-white">
        {/* Section Header */}
        <div className="flex bg-[#D9D9D942] lg:p-12 items-center gap-x-8 p-4">
          <h1 className="lg:text-4xl text-xl text-[#12294A]">Featured Content</h1>
          <div className="flex-1 h-2 bg-red-600 rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-4 grid-rows-3 lg:gap-8 lg:px-14 lg:py-10 gap-3 px-4 pt-6">
          {/* Card 1 */}
          <div className="relative col-span-2 row-span-1">
            <img
              src="./../Rectangle 77.png"
              className="w-full h-full object-cover"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-white lg:text-5xl  text-center px-4 text-sm">
              Instant Breaking News
              <br /> Updates
            </h2>
          </div>

          {/* Card 2 */}
          <div className="relative col-span-2 row-span-1">
            <img
              src="./../Rectangle 79.png"
              className="w-full h-full object-cover"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-white lg:text-5xl  text-center px-4 text-sm">
              Free Daily ePaper
              <br /> Access
            </h2>
          </div>

          {/* Card 3 */}
          <div className="relative col-span-2 row-span-2">
            <img
              src="./../Rectangle 78.png"
              className="w-full h-full object-cover"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-white lg:text-5xl  text-center px-4 text-sm">
              Reliable and
              <br /> Informative Articles
            </h2>
          </div>

          {/* Card 4 */}
          <div className="relative col-span-1 row-span-1">
            <img
              src="./../Rectangle 80.png"
              className="w-full h-full object-cover"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-white lg:text-3xl  text-center px-3 text-sm">
              Local & Regional
              <br /> Focused Coverage
            </h2>
          </div>

          {/* Card 5 */}
          <div className="relative col-span-1 row-span-1">
            <img
              src="./../Rectangle 81.png"
              className="w-full h-full object-cover"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-white lg:text-3xl  text-center px-3 text-sm">
              User-Friendly App &<br /> Website
            </h2>
          </div>

          {/* Card 6 */}
          <div className="relative col-span-2 row-span-1">
            <img
              src="./../Rectangle 82.png"
              className="w-full h-full object-cover"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-white lg:text-5xl  text-center px-4 text-sm">
              Well-Organized by
              <br /> Categories
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
