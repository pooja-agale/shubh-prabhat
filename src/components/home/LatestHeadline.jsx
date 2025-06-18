import React, { useEffect, useState } from 'react'

const latestNews = [
    "निवड होईल शशिकांत शिंदे किंवा राजेश टोपे यांची - राष्ट्रवादी\nकाँग्रेसचे पुढचे प्रदेशाध्यक्ष कोण ?",
    "मासिक ५०० रुपयात जगणाऱ्य मादकपानप्रेमीने विरोधानं\nम्हंटलं - ४५० रुपये दारूवर जातात तर घडायचं कस ?",
    "मोदींच्या ११ वर्षांच्या कार्यकाळाची भाजप युनिटीने\nरूपरेषा ठरवली, उत्सवाची तयारी"
]

const LatestHeadline = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % latestNews.length)
        }, 3000) // change every 3 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='font-marathi '>
            <div className='bg-blue-950 lg:p-12 p-6 grid justify-center space-y-6'>
                <p className='text-red-600 lg:text-3xl text-center text-xl'>Latest Headlines</p>

                {/* Dynamic Headline */}
                <div className='text-white lg:text-4xl text-center text-xl'>
                    {latestNews[currentIndex]}
                </div>

                {/* Indicator Dots */}
                <div className='flex gap-4 px-10 justify-center'>
                    {latestNews.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2 w-20 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-red-600' : 'bg-white'
                                }`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default LatestHeadline
