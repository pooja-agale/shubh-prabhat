import React from "react";
import { VscEye } from "react-icons/vsc";
import { CiShare2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const newsData = [
  {
    img: "./../Rectangle 27.png",
    headline: "राज्यात महापालिका निवडणुका पुढे\nजाण्याचा तयारीत",
    desc: "महाराष्ट्र सरकारने मुंबई, पुणे, ठाणेसह २९ महापालिका आगामी\nनिवडणुकींसाठी वॉर्ड सीमा आखण्यासाठी काम सुरु करण्याचे निर्देश\nदिले आहेत ",
  },
  {
    img: "./../Rectangle 28.png",
    headline: "महायुती धोक्याची शंका - ठाकरे बंधू शक्त्यतो एकत्रित ",
    desc: "शिवसेना आणि यांच्यातील संभाव्य गट जुळवाबाकीमुळे महायुतीवर दबाव वाढलेला आहे ",
  },
  {
    img: "./../Rectangle 29.png",
    headline:
      "काँग्रेसचं युनिटी फोकस - हरानंतर पक्षातील एकता वाढली, जिल्हास्तरावर सदस्यांना सेत दाखवला ",
    desc: "हर्षवर्धन सपकाळ यांनी निवडणुकीतील पराभवानंतर पक्षात एकता आणली, पुढील लोकप्रतिनिधी निवडणुकांसाठी नव्या रणनीतीवर भर देत",
  },
];

const FavSubjectNews = () => {
  const navigate = useNavigate();
  
  return (
    <div className="font-marathi">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 py-10 px-16">
          {newsData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden flex flex-col justify-between h-full p-2"
            >
              <img src={item.img} alt={`News ${index}`} className="w-full" />

              <div className="py-2 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between py-2 items-center">
                    <p className="text-gray-400">15 June 2025</p>
                    <div className="flex gap-x-3 items-center">
                      <VscEye size={30} className="text-gray-400" />
                      <p className="text-gray-400 text-lg">100</p>
                      <div className="bg-blue-950 p-2 rounded-full text-white">
                        <CiBookmark size={30} />
                      </div>
                      <div className="bg-blue-950 p-2 rounded-full text-white">
                        <CiShare2 size={30} />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg mb-2 font-medium">{item.headline}</h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>

                {/* Left-aligned Read News button at bottom */}
                <div className="pt-4">
                  <button className="bg-red-600 text-white py-1 px-6 rounded-3xl"
                  onClick={() => navigate("/home/read-news")}>
                    Read News
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavSubjectNews;
