import React from "react";
import Categories from "../components/home/Categories";
import { TbMathGreater } from "react-icons/tb";
import { useState, useEffect } from "react";
import FavSubjectNews from "../components/home/FavSubjectNews";
import { useNavigate } from "react-router-dom";

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % latestNews.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="font-marathi">
      <Categories />
      <div className="bg-blue-950 text-white flex justify-between py-5 px-16">
        <h2 className="text-3xl">Select Your Favorite Subject</h2>

        <div className="flex items-center gap-4">
          <span>Scroll Horizontal</span>
          <TbMathGreater />
          <TbMathGreater />
          <TbMathGreater />
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto px-12 py-3 bg-[#223754] justify-between">
        {newsSub.map((subject, index) => (
          <div
            key={index}
            className="text-2xl text-white px-6 py-3 cursor-pointer transition hover:bg-red-600 hover:rounded-3xl"
          >
            {subject}
          </div>
        ))}
      </div>
      <div className="flex">
        <div className="w-1/2 flex flex-col gap-6 p-12">
          {trendingNewsData.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <img
                src={item.img}
                alt={`Trending ${index}`}
                className="w-29 h-25 rounded-lg object-cover"
              />
              <div className="space-y-4">
                <p className="text-gray-500 text-xl">15 June 2025</p>
                <p className="text-3xl text-gray-800">{item.headline}</p>
                <button className="text-red-500 underline text-lg"
                onClick={() => navigate("/home/read-news")}>
                  Read News
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-screen-md rounded-3xl p-12">
          <div className="rounded-3xl overflow-hidden">
            {/* Header */}
            <div className="bg-blue-950 rounded-t-2xl p-4">
              <h1 className="text-white">Latest News</h1>
            </div>

            {/* Marquee Strip */}
            {["/home", "/categories"].includes(location.pathname) && (
              <div className="bg-red-600 p-2 text-white overflow-hidden whitespace-nowrap text-base">
                <div className="animate-marquee inline-block">
                  {[
                    "📰 राज्यात प्रत्येक जिल्ह्यात 'हनी व्हिलेज'; लवकरच हनी कॅफे",
                    "💰 RBI चा मोठा निर्णय - व्याजदरात घट",
                    "🥛 राज्यात दारूचे दर ९ ते ७०% पर्यंत वाढले",
                    "🎓 इ.११वी प्रवेश यादी जाहीर",
                    "🏛️ SC आयोगाला कायदेशीर दर्जा, वैद्यकीय विद्यार्थ्यांच्या स्टायपेंडमध्ये वाढ",
                  ].map((headline, index) => (
                    <span key={index} className="mx-6">
                      {headline}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Repeated News Sections */}
            <div className="space-y-4">
              {[...Array(2)].map((_, outerIndex) => (
                <div key={`section-${outerIndex}`} className="space-y-2">
                  {latestNews.map((item, index) => (
                    <div
                      key={`news-${outerIndex}-${index}`}
                      className={`flex justify-between items-center p-2 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-100"
                      }`}
                    >
                      <p className="text-sm">{item}</p>
                      <button className="text-red-800 underline">
                        Read News
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Dynamic Headline Carousel */}
            <div className="bg-blue-950 grid justify-center py-4 px-2 space-y-2">
              <p className="text-red-600 text-sm text-center">
                Latest Headlines
              </p>

              <div className="text-white text-md text-center">
                {latestNews1[currentIndex]}
              </div>

              {/* Indicator Dots */}
              <div className="flex flex-wrap gap-3 justify-center">
                {latestNews1.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {/* Colored bar */}
                    <div
                      className={`h-2 w-20 rounded-full transition-all duration-300 ${
                        currentIndex === index ? "bg-red-600" : "bg-white"
                      }`}
                    ></div>

                    {/* Heading below bar */}
                    <p className="text-xs mt-2 text-center text-black w-20 truncate">
                      {item.heading}
                    </p>
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
