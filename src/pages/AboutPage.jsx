import React from "react";

const AboutPage = () => {
  return (
    <div className="font-marathi">
      <div className="relative w-full">
        {/* Background Image */}
        <img src="./../Rectangle 66 (1).png" className="w-full" alt="About" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
          <h1 className="text-white text-5xl leading-[4rem] text-center">
            YOUR TRUSTED & TIMELY
            <br />
            SOURCE FOR MARATHI &
            <br />
            <span className="ml-24">ENGLISH NEWS</span>
          </h1>

          {/* ✅ Image centered below text */}
          <img src="./../Group 37166.png" alt="Decorative line" />
        </div>
      </div>
      <div className="flex space-x-12">
        <div className="space-y-8 px-14 py-10">
          <h1 className="text-6xl text-[#12294A] leading-[5rem]">
            " <span className="text-red-700">Truth</span> In News, Trust
            <br /> In Words "
          </h1>
          <img src="./../Rectangle 69.png" />
          <img src="./../Rectangle 70.png" />
        </div>
        <div className="pt-14 text-[#0000006B] text-xl leading-[2rem] space-y-4 relative">
          <div className="">
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

            {/* Right-aligned image below the paragraphs */}

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
        <div className="flex bg-[#D9D9D942] p-12 items-center gap-x-8">
          <h1 className="text-4xl text-[#12294A]">Featured Content</h1>
          <div className="flex-1 h-2 bg-red-600 rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-4 grid-rows-3 gap-8 px-14 py-10">
          {/* Card 1 */}
          <div className="relative col-span-2 row-span-1">
            <img
              src="./../Rectangle 77.png"
              className="w-full h-full object-cover"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-5xl  text-center px-4">
              Instant Breaking News<br /> Updates
            </h2>
          </div>

          {/* Card 2 */}
          <div className="relative col-span-2 row-span-1">
            <img
              src="./../Rectangle 79.png"
              className="w-full h-full object-cover"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-5xl  text-center px-4">
              Free Daily ePaper<br /> Access
            </h2>
          </div>

          {/* Card 3 */}
          <div className="relative col-span-2 row-span-2">
            <img
              src="./../Rectangle 78.png"
              className="w-full h-full object-cover"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-5xl  text-center px-4">
              Reliable and<br /> Informative Articles
            </h2>
          </div>

          {/* Card 4 */}
          <div className="relative col-span-1 row-span-1">
            <img
              src="./../Rectangle 80.png"
              className="w-full h-full object-cover"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl  text-center px-3">
              Local & Regional<br /> Focused Coverage
            </h2>
          </div>

          {/* Card 5 */}
          <div className="relative col-span-1 row-span-1">
            <img
              src="./../Rectangle 81.png"
              className="w-full h-full object-cover"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl  text-center px-3">
              User-Friendly App &<br /> Website
            </h2>
          </div>

          {/* Card 6 */}
          <div className="relative col-span-2 row-span-1">
            <img
              src="./../Rectangle 82.png"
              className="w-full h-full object-cover"
            />
            <h2 className="absolute inset-0 flex items-center justify-center text-white text-5xl  text-center px-4">
              Well-Organized by<br /> Categories
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
