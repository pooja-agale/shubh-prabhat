import React, { useState, useEffect } from "react";

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

const ReadNews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % latestNews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-marathi">
      <div className="py-10 px-6 md:px-12 text-xl">
        <h1 className="lg:text-4xl leading-relaxed ">
          Maharashtra Politics: भाजप नगरसेवकांनी पक्ष्याच्याच उमेदवाराला पाडला ,
          १०
          <br />
          पैकी ९ जण फुटले, कलेक्टरचीही मान्यता, मुरबाडमध्ये उलटफेर{" "}
        </h1>
        <p className="lg:text-2xl leading-relaxed ">
          कलेक्टरच्या मान्यतेनंतर नगरपंचायतीत मोठी राजकीय उलथापालथ; आमदार किसान
          कथोरे अडचणीत{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* LEFT SIDE */}
        <div className="px-6 md:px-12 pb-10 w-full md:w-1/2">
          <img src="./../image.png" className="mb-4" alt="News" />
          <div className="flex flex-col sm:flex-row justify-between text-gray-600 text-md gap-2">
            <p className="font-bold">Article By: Rohan Sharma</p>
            <p className="text-gray-400">
              Last Updated: 15 June 2025, 10:00 AM
            </p>
          </div>
          <div className="text-gray-400 space-y-5 lg:mt-12 mt-4">
            <p>
              म. टा. वृत्तसेवा, ठाणे : मुरबाड नगरपंचायतीतील दहापैकी नऊ
              नगरसेवकांनी स्वतंत्र गट स्थापन केला असून त्याला जिल्हाधिकारी
              कार्यालयाकडून मान्यताही देण्यात आली आहे. त्यामुळे मुरबाडच्या
              स्थानिक स्वराज्य संस्थेतील भाजपचे वर्चस्व संपुष्टात आले असून
              स्थानिक आमदार किसन कथोरे यांना हा मोठा धक्का मानला जात आहे.
            </p>
            <p>
              भाजपमधील मतभेद समोर मुरबाड विधानसभा क्षेत्रात कथोरे यांचा प्रभाव
              आहे. मुरबाड नगर पंचायतीवर भाजपचा वरचष्मा होता. गेल्या निवडणुकीत
              एकूण 17 नगरसेवकांपैकी भाजपच्या 10 नगरसेवकांचा विजय झाला तर
              शिवसेनेच्या वाट्याला 5 जागा आल्या. त्यावेळी निवडून आलेल्या इतर दोन
              नगरसेवकांनी भाजपला पाठिंबा दिला. त्यामुळे भाजपचा नगराध्यक्ष आणि
              उपनगराध्यक्ष निवडून आला. मात्र काही दिवसांपूर्वी उपनगराध्यक्ष
              पदाच्या निवडणुकीत भाजपमधील मतभेद समोर आले.
            </p>
            <p>
              <span className="text-black">
                भाजप नगरसेवकांचे अपक्ष उमेदवाराला मतदान
                <br />
              </span>
              आमदार कथोरे यांनी शिवसेनेच्या नगरसेवकाला उपनगराध्यक्षपदाची
              उमेदवारी दिल्याने भाजपच्याच नगरसेवकांनी विरोध केल्याची चर्चा होती.
              काही नगरसेवकांनी नाराजीही व्यक्त केली. उपनगराध्यक्षपदासाठी
              झालेल्या प्रत्यक्ष निवडणुकीतही भाजप नगरसेवकांनी अपक्ष उमेदवाराला
              मतदान केले. परिणामी भाजप उमेदवाराचा पराभव झाला. त्यानंतर भाजपच्या
              दहापैकी नऊ नगरसेवकांनी मुरबाड परिवर्तन पॅनल अशी स्वतंत्र आघाडी
              तयार केली. त्याच्या नोंदणीसाठी 26 मे रोजी नगरसेवक मोहन गडगे
              यांच्या वतीने जिल्हाधिकारी कार्यालयात अर्जही करण्यात आला होता.
              अखेर 9 जून रोजी जिल्हाधिकारी अशोक शिनगारे यांनी मुरबाड परिवर्तन
              पॅनलला स्वतंत्र गटाची मान्यता दिली आहे. त्यामुळे आता भाजपच्या गटात
              भाजपचा एक आणि समर्थक दोन असे तीनच नगरसेवक असतील.
            </p>
            <p>
              <span className="text-black">
                'त्यांच्या संपर्कात आहोत'
                <br />
              </span>
              भाजपचे ठाणे जिल्हा ग्रामीण अध्यक्ष जितेंद्र डाकी यांनी वेगळा गट
              निर्माण झाल्याचे मान्य केले. 'उपनगराध्यक्षपदाच्या उमेदवाराबाबतच
              नगरसेवकांमध्ये नाराजी होती. इतर कोणतीही नाराजी नव्हती. आम्ही
              त्यांच्याशी संपर्क साधला.भाजप प्रदेशाध्यक्षांच्या उपस्थितीत बैठक
              होणार होती, पण त्यात काही अडचणी आल्या. पण ते आमच्यासोबतच आहेत.
              आम्ही त्यांच्या संपर्कात आहोत,' असा दावाही डाकी यांनी केला.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 px-6 md:px-0">
          <div className="lg:pr-16">
            <h1 className="bg-blue-900 p-3 text-red-600 rounded-t-xl">
              Latest News
            </h1>

            <div className="bg-red-600 py-3 text-white overflow-hidden whitespace-nowrap text-lg">
              <div className="flex w-max animate-marquee">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex">
                    <span className="mx-6">
                      📰 राज्यात प्रत्येक जिल्ह्यात 'हनी व्हिलेज'; लवकरच हनी
                      कॅफे
                    </span>
                    <span className="mx-6">
                      💰 RBI चा मोठा निर्णय - व्याजदरात घट
                    </span>
                    <span className="mx-6">
                      🥛 दारूचे दर ९ ते ७०% पर्यंत वाढले
                    </span>
                    <span className="mx-6">🎓 इ.११वी प्रवेश यादी जाहीर</span>
                    <span className="mx-6">
                      🏛️ SC आयोगाला कायदेशीर दर्जा, स्टायपेंडमध्ये वाढ
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 mt-4">
              {[...Array(2)].map((_, outerIndex) => (
                <div key={`section-${outerIndex}`} className="space-y-2">
                  {latestNews.map((item, index) => (
                    <div
                      key={`news-${outerIndex}-${index}`}
                      className={`flex justify-between items-center p-2 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-100"
                      }`}
                    >
                      <p className="lg:text-sm text-xs sm:text-base">{item}</p>
                      <button
                        className="text-red-800 underline lg:text-sm sm:text-base text-xs"
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                      >
                        Read News
                      </button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6 pr-14">
            {trendingNewsData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row p-4 sm:items-center gap-2"
              >
                <img
                  src={item.img}
                  alt={`Trending ${index}`}
                  className="rounded-lg object-cover"
                />
                <div className="space-y-2 sm:space-y-4">
                  <p className="text-gray-500 text-sm sm:text-xl">
                    15 June 2025
                  </p>
                  <p className="lg:text-2xl sm:text-3xl text-gray-800">
                    {item.headline}
                  </p>
                  <button
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="text-red-500 underline text-sm sm:text-lg"
                  >
                    Read News
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadNews;
