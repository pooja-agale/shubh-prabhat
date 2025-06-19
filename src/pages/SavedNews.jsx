import React from "react";
import { VscEye } from "react-icons/vsc";
import { CiShare2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const savedNews = [
  {
    img: "./../Rectangle 29.png",
    headline:
      "काँग्रेसचं युनिटी फोकस - हरानंतर पक्षातील एकता वाढली, जिल्हास्तरावर सदस्यांना सेत दाखवला ",
    desc: "हर्षवर्धन सपकाळ यांनी निवडणुकीतील पराभवानंतर पक्षात एकता आणली, पुढील लोकप्रतिनिधी निवडणुकांसाठी नव्या रणनीतीवर भर देत",
  },
];

const SavedNews = ({ hideBookmarkAndEye = false }) => {
  const navigate = useNavigate();

  return (
    <div className="font-marathi">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 py-10 px-16">
        {[...savedNews, ...savedNews, ...savedNews].map((item, index) => (
          <div key={index} className="rounded-xl overflow-hidden">
            <img src={item.img} alt={`News ${index}`} className="w-full" />

            <div className="flex justify-between py-2 items-center">
              <p className="text-gray-400">15 June 2025</p>

              <div className="flex gap-x-3 items-center">
                {!hideBookmarkAndEye && (
                  <>
                    <VscEye size={30} className="text-gray-400" />
                    <p className="text-gray-400 text-lg">100</p>
                    <div className="bg-blue-950 p-2 rounded-full text-white">
                      <CiBookmark size={30} />
                    </div>
                  </>
                )}
                {/* Share icon should always be visible */}
                <div className="bg-blue-950 p-2 rounded-full text-white">
                  <CiShare2 size={30} />
                </div>
              </div>
            </div>

            <div className="py-2">
              <h3 className="text-lg mb-2 font-medium">{item.headline}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
            <button className="bg-red-600 text-white py-1 px-6 rounded-3xl"
            onClick={() => navigate("/home/read-news")}>
              Read News
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default SavedNews;
