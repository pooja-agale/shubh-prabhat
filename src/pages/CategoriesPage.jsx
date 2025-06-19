import React from "react";
import Categories from "../components/home/Categories";
import { TbMathGreater } from "react-icons/tb";
import { useState, useEffect } from "react";
import FavSubjectNews from "../components/home/FavSubjectNews";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiHeadphones } from "react-icons/ci";
import { CiSaveDown1 } from "react-icons/ci";
import { ImUserMinus } from "react-icons/im";

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
  {
    icon: <ImUserMinus size={40} />,
    desc: "कमी जाहिराती",
  },
];

const latestNews1 = [
  "निवड होईल शशिकांत शिंदे किंवा राजेश टोपे यांची - राष्ट्रवादी\nकाँग्रेसचे पुढचे प्रदेशाध्यक्ष कोण ?",
  "मासिक ५०० रुपयात जगणाऱ्य मादकपानप्रेमीने विरोधानं\nम्हंटलं - ४५० रुपये दारूवर जातात तर घडायचं कस ?",
  "मोदींच्या ११ वर्षांच्या कार्यकाळाची भाजप युनिटीने\nरूपरेषा ठरवली, उत्सवाची तयारी",
];

const latestNews = [
  "9 of 10 BJP Conuncillors Break Away in Murbad",
  "Delhi Swelters at 46.3C Amid Heatwave",
  "IMD Forecasts Relief from HEatwave After June 14",
  "Viral Video: 100-A-Month Earner Spends 450 on Liquor",
];

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

const CategoriesPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % latestNews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="font-marathi">
      <div className="bg-gray-100 p-6 sm:p-12 space-y-6">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 px-4 sm:px-10">
          <h3 className="text-2xl whitespace-nowrap text-blue-900">Categories</h3>
          <div className="flex-grow h-2 bg-red-600 rounded-full w-full"></div>
          <p className="text-blue-900 cursor-pointer whitespace-nowrap text-xl">View All</p>
        </div>

        {/* Auto-scroll animation on all screens */}
        <div className="relative overflow-x-hidden">
          <div className="flex gap-6 w-max animate-marquee px-4 sm:px-10">
            {[...newsCategory, ...newsCategory].map((item, index) => (
              <div key={index} className="group relative bg-white rounded-xl shadow-md p-6 text-center min-w-[250px] sm:min-w-[200px] transition-all duration-300 hover:border-dotted hover:border-red-600">
                <div className="absolute -top-2 -right-2 bg-blue-950 p-5 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 group-hover:bg-red-600">
                  <div className="text-white text-2xl">{item.icon}</div>
                </div>
                <div className="h-1 mt-16 bg-gradient-to-r from-blue-900 to-red-600 rounded-full"></div>
                <p className="mt-4 text-black text-md leading-relaxed whitespace-pre-line">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-950 text-white flex flex-col sm:flex-row justify-between items-center py-5 px-4 sm:px-16">
        <h2 className="text-2xl sm:text-3xl mb-2 sm:mb-0">Select Your Favorite Subject</h2>
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="text-sm sm:text-base">Scroll Horizontal</span>
          <div className="flex">
            <TbMathGreater />
            <TbMathGreater />
            <TbMathGreater />
          </div>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto px-4 sm:px-12 py-3 bg-[#223754]">
        {newsSub.map((subject, index) => (
          <div key={index} className="text-lg sm:text-2xl text-white px-4 sm:px-6 py-2 sm:py-3 cursor-pointer transition hover:bg-red-600 hover:rounded-3xl">
            {subject}
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 flex flex-col gap-6 p-4 sm:p-12">
          {trendingNewsData.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <img src={item.img} alt={`Trending ${index}`} className="rounded-lg object-cover" />
              <div className="space-y-2 sm:space-y-4">
                <p className="text-gray-500 text-sm sm:text-xl">15 June 2025</p>
                <p className="text-lg sm:text-3xl text-gray-800">{item.headline}</p>
                <button onClick={() => navigate("/home/read-news")} className="text-red-500 underline text-sm sm:text-lg">Read News</button>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:max-w-screen-md rounded-3xl p-4 sm:p-12">
          <div className="rounded-3xl overflow-hidden">
            <div className="bg-blue-950 rounded-t-2xl p-4">
              <h1 className="text-red-500">Latest News</h1>
            </div>

            { ["/home", "/categories"].includes(location.pathname) && (
              <div className="bg-red-600 p-2 text-white overflow-hidden whitespace-nowrap text-sm sm:text-base">
                <div className="animate-marquee inline-block">
                  {["📰 राज्यात प्रत्येक जिल्ह्यात 'हनी व्हिलेज'; लवकरच हनी कॅफे","💰 RBI चा मोठा निर्णय - व्याजदरात घट","🥛 राज्यात दारूचे दर ९ ते ७०% पर्यंत वाढले","🎓 इ.११वी प्रवेश यादी जाहीर","🏛️ SC आयोगाला कायदेशीर दर्जा, वैद्यकीय विद्यार्थ्यांच्या स्टायपेंडमध्ये वाढ"].map((headline, index) => (
                    <span key={index} className="mx-6">{headline}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4">
              {[...Array(2)].map((_, outerIndex) => (
                <div key={`section-${outerIndex}`} className="space-y-2">
                  {latestNews.map((item, index) => (
                    <div key={`news-${outerIndex}-${index}`} className={`flex justify-between items-center p-2 ${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
                      <p className="text-sm sm:text-base">{item}</p>
                      <button className="text-red-800 underline text-sm sm:text-base" onClick={() => navigate("/home/read-news")}>Read News</button>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="bg-blue-950 grid justify-center py-4 px-2 space-y-2">
              <p className="text-red-600 text-xs sm:text-sm text-center">Latest Headlines</p>
              <div className="text-white text-sm sm:text-md text-center whitespace-pre-line">{latestNews1[currentIndex]}</div>
              <div className="flex flex-wrap gap-3 justify-center">
                {latestNews1.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`h-2 w-20 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-red-600" : "bg-white"}`}></div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <FavSubjectNews />
      <FavSubjectNews />
    </div>
  );
};

export default CategoriesPage;
