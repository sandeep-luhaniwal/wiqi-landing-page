import React from 'react'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'
import Icons from './common/Icons'

const Features = () => {
  const features = [
    {
      title: "Connect",
      description: "Chat, call, video call, manage contacts and stay close with your people.",
      icon: "chat",
    },
    {
      title: "Discover",
      description: "Explore music, movies, radio, TV, streams, news and daily content.",
      icon: "discover",
    },
    {
      title: "Play & Learn",
      description: "Enjoy games, competitions, books, audio books and learning tools.",
      icon: "game",
    },
    {
      title: "Live Smarter",
      description: "Use shopping, ratings, weather, safety tools and lifestyle services from one app.",
      icon: "star",
    }
  ]

  return (
    <div id="digitalword" className="bg-primary py-12 md:py-14 lg:py-16">
      <div className="max-w-7xl px-4 lg:px-10 mx-auto">
        <div className="flex justify-center flex-col items-center mx-auto gap-4 max-w-3xl mb-8 md:mb-10">
          <Heading white bold big center>
            Meet WiQi - Your digital world in one place.
          </Heading>
          <Paragraph white base center>
            Designed to simplify how you connect, discover, play, watch, read, shop and share.
          </Paragraph>
        </div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-7.5 flex border border-[#E7D3EF] flex-col items-start transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl group cursor-pointer"
            >
              <div className="bg-primary text-white w-12 md:w-15 h-12 md:h-15 rounded-[14px] mb-4 lg:mb-6 flex items-center justify-center transition-colors duration-300 group-hover:bg-primary">
                <Icons icon={feature.icon} />
              </div>
              <Paragraph lg semibold mainblack>
                {feature.title}
              </Paragraph>
              <Paragraph gray sm className="pt-3">
                {feature.description}
              </Paragraph>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
