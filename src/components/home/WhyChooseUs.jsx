import React from "react";

const facilities = [
  "दररोज ई-पेपर मोफत\nवाचा",
  "आपल्यासाठी निवडलेले\nविभाग",
  "ऑफलाईन सेव्ह — डेटा\nवाचा",
  "कमी जाहिराती, जास्त\nबातम्या",
];

const WhyChooseUs = () => {
  return (
    <div className="relative bg-white font-marathi overflow-hidden px-4 py-16">
      <img
        src="./../Rectangle 43 (1).png"
        className="absolute bottom-16 left-0 top-18 z-0 hidden lg:block"
        alt="corner"
      />

      {/* 🔴 Right Red Corner — hidden on small screens */}
      <img
        src="./../Rectangle 42.png"
        className="absolute top-10 right-14 rotate-[20deg] translate-x-1/3 z-0 hidden lg:block"
        alt="corner"
      />

      <h1 className="lg:text-5xl text-3xl lg:flex lg:justify-start lg:ml-14 z-10 mb-10 flex justify-center">
        Why People Choose Us ?
      </h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center relative z-10">
        {/* Left box */}
        <div className=" lg:-mr-32">
          <div className="bg-[#12294A] text-white px-16 py-6 rounded-xl text-center text-2xl">
            <p>
              ताज्या घडामोडींचे झटपट
              <br /> नोटिफिकेशन
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="relative">
          <img
            src="./../Group 37165.png"
            alt="center"
            className="relative object-cover"
          />
        </div>

        {/* Right Box */}
        <div className="flex flex-col gap-8 pt-4 lg:-ml-8 items-center lg:items-start">
          {facilities.map((item, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? "border-2 border-blue-400" : ""
              } bg-[#12294A] text-white px-14 py-6 rounded-xl text-2xl whitespace-pre-line`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
