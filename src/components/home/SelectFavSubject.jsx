import React, { useState } from "react";
import { TbMathGreater } from "react-icons/tb";

const newsSub = [
  "सत्ताकारण",
  "विचारमंच",
  "करियर",
  "रेसिपी",
  "राशिभविष्य",
  "शहर",
  "UPSC",
  "MPSC",
];

const SelectFavSubject = () => {
  const [selectedSubject, setSelectedSubject] = useState(newsSub[0]);

  return (
    <div className="font-marathi">
      {/* Header Row */}
      <div className="bg-blue-950 text-white flex justify-between lg:py-5 lg:px-16 p-4">
        <h2 className="lg:text-3xl">Select Your Favorite Subject</h2>

        <div className="flex items-center">
          <span>Scroll Horizontal</span>&nbsp;&nbsp;&nbsp;
          <TbMathGreater />
          <TbMathGreater />
          <TbMathGreater />
        </div>
      </div>

      {/* Scrollable Subjects */}
      <div className="flex justify-evenly gap-4 overflow-x-auto px-12 py-3 bg-[#223754]">
        {newsSub.map((subject, index) => (
          <div
            key={index}
            onClick={() => setSelectedSubject(subject)}
            className={`text-2xl text-white px-6 py-3 cursor-pointer transition rounded-3xl ${
              selectedSubject === subject ? "bg-red-600" : "hover:bg-red-600"
            }`}
          >
            {subject}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectFavSubject;
