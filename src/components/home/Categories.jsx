import React, { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiHeadphones } from "react-icons/ci";
import { CiSaveDown1 } from "react-icons/ci";

const newsCategory = [
  {
    icon: <IoMdNotificationsOutline size={40} />,
    desc: "ठळक आणि ताज्या\nघडामोडींचे\nनोटिफिकेशन मिळवा ",
  },
  {
    icon: <IoNewspaperOutline size={40} />,
    desc: "रोजचा इ-पेपर\nवाचा ",
  },
  {
    icon: <IoIosHeartEmpty size={40} />,
    desc: "मुख्यपृष्ठावरील\nविभाग आवडीनुसार\nनिवडा ",
  },
  {
    icon: <CiHeadphones size={40} />,
    desc: "बातम्या व लेख ऐकण्याची\nसोय ",
  },
  {
    icon: <CiSaveDown1 size={40} />,
    desc: "ऑफलाईन\n वाचनासाठी लेख सेव्ह\nकरा",
  },
];

const Categories = () => {
  const [selectedIndex, setSelectedIndex] = useState(0); // default selected first

  return (
    <div className="bg-gray-100 p-12 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-12 px-10">
        <h3 className="text-2xl whitespace-nowrap text-blue-900">Categories</h3>
        <div className="flex-grow h-2 bg-red-600 rounded-full"></div>
        <p className="text-blue-900 cursor-pointer whitespace-nowrap text-xl">
          View All
        </p>
      </div>

      {/* Scrolling container */}
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide py-4">
        <div className="inline-flex gap-6 px-10">
          {newsCategory.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`group relative bg-white rounded-xl p-6 text-center overflow-hidden  min-w-[250px] cursor-pointer ${
                selectedIndex === index
                  ? "border-4 border-dotted border-red-600"
                  : "hover:border-dotted hover:border-red-600"
              }`}
            >
              {/* Floating Icon */}
              <div
                className={`absolute -top-2 -right-2 p-5 rounded-full flex items-center justify-center shadow-md ${
                  selectedIndex === index
                    ? "bg-red-600"
                    : "bg-blue-950 "
                }`}
              >
                <div className="text-white text-2xl">{item.icon}</div>
              </div>

              {/* Divider line */}
              <div className="h-1 mt-16 bg-gradient-to-r from-blue-900 to-red-600 rounded-full"></div>

              {/* Description */}
              <p className="mt-4 text-black text-md leading-relaxed whitespace-pre-line">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
