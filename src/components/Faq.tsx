"use client"
import React, { useState } from 'react'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is WiQi?",
      answer: "WiQi is a comprehensive mobile application that brings chat, calls, social posts, music, movies, games, books, shopping, ratings, and lifestyle services into one simple mobile experience."
    },
    {
      question: "Is WiQi available on Android and iOS?",
      answer: "Yes, WiQi is available for download on both the Google Play Store for Android devices and the Apple App Store for iOS devices."
    },
    {
      question: "Can I make calls and send messages on WiQi?",
      answer: "Absolutely! WiQi features seamless chat, voice, and video calling capabilities so you can stay close with your friends and family."
    },
    {
      question: "What is WiQi Plus?",
      answer: "WiQi Plus is our premium tier that unlocks exclusive features, removes ads, and provides enhanced access to our extensive library of content."
    },
    {
      question: "Does WiQi include entertainment features?",
      answer: "Yes, WiQi offers a wide range of entertainment options including music, movies, radio, TV streams, games, books, and daily content."
    }
  ]

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else {
      setOpenIndex(index)
    }
  }

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-[1000px] px-4 lg:px-10 mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-14">
          <Heading mainblack bold center>
            Frequently asked questions
          </Heading>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-primary rounded-xl overflow-hidden transition-all duration-300 shadow-sm"
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none cursor-pointer"
              >
                <span className="text-white font-semibold text-lg md:text-xl font-urbanist">
                  {faq.question}
                </span>
                
                {/* Chevron Icon */}
                <div className={`transform transition-transform duration-300 ml-4 ${openIndex === index ? "rotate-180" : ""}`}>
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </button>
              
              {/* Answer Content */}
              <div 
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 pt-1">
                    <Paragraph white sm className="opacity-90 leading-relaxed text-white/90">
                      {faq.answer}
                    </Paragraph>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Faq
