"use client"
import React from 'react'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="bg-white">
      <div className='max-w-7xl px-4 lg:px-10 mx-auto py-12 md:py-14 lg:py-16 grid md:grid-cols-2 items-center gap-4'>
        <div className="order-1 md:order-0">
          <Heading mainblack bold>
            Everything you love,
            <span className='text-primary lg:block'>
              all in one app.
            </span>
          </Heading>
          <Paragraph gray semibold lg className='pt-3 pb-4 md:pb-5 lg:pb-8'>
            WiQi brings chat, calls, social posts, music, movies, games, books, shopping, ratings, and lifestyle services into one simple mobile experience.
          </Paragraph>
          <div className="flex gap-4 items-center">
            <Link href={"/"}>
              <Image src={"/assets/images/png/google-play.png"} alt='app store' width={150} height={56} className='h-12' />
            </Link>
            <Link href={"/"}>
              <Image src={"/assets/images/png/apple-store.png"} alt='app store' width={150} height={56} className='h-12' />
            </Link>
          </div>
          <div className="pt-4 md:pt-5">
            <Link 
              href={"#digitalword"}
              onClick={(e) => {
                const element = document.getElementById('digitalword');
                if (element) {
                  e.preventDefault();
                  const top = element.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({
                    top,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              <Paragraph lg pink semibold className='underline! hover:text-main-black duration-300'>
                Explore Features
              </Paragraph>
            </Link>
          </div>
        </div>
        <div className="flex justify-end xl:pe-12 pb-8 md:pt-0 order-0 md:order-1">
          <div className="relative inline-block select-none">
            <Image
              src={"/assets/images/webp/hero-main.webp"}
              alt='wiqi app mockup'
              width={223}
              height={484}
              className='h-108 md:h-121 w-auto relative z-10'
              priority
            />

            {/* Movies Logo */}
            <div
              className="absolute -left-30 md:-left-40 lg:-left-50 top-[14%] z-20 animate-float"
              style={{ animationDelay: '0s', animationDuration: '6s' }}
            >
              <Image
                src={"/assets/images/svg/movies-logo.svg"}
                alt='Movies'
                width={78}
                height={75}
                className="w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 hover:scale-110 cursor-pointer drop-shadow-md"
              />
            </div>

            {/* Music Logo */}
            <div
              className="absolute -left-12 md:-left-16 lg:-left-20 top-[26%] z-20 animate-float"
              style={{ animationDelay: '1.5s', animationDuration: '6.5s' }}
            >
              <Image
                src={"/assets/images/svg/music-logo.svg"}
                alt='Music'
                width={46}
                height={45}
                className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 hover:scale-110 cursor-pointer drop-shadow-md"
              />
            </div>

            {/* Radio Logo */}
            <div
              className="absolute -left-20 md:-left-26 lg:-left-34 top-[45%] z-20 animate-float"
              style={{ animationDelay: '0.8s', animationDuration: '7s' }}
            >
              <Image
                src={"/assets/images/svg/radio-logo.svg"}
                alt='Radio'
                width={67}
                height={65}
                className="w-14 h-14 md:w-17 md:h-17 transition-transform duration-300 hover:scale-110 cursor-pointer drop-shadow-md"
              />
            </div>

            {/* TV Logo */}
            <div
              className="absolute -left-34 md:-left-40 top-[69%] z-20 animate-float"
              style={{ animationDelay: '2s', animationDuration: '5.8s' }}
            >
              <Image
                src={"/assets/images/svg/tv-logo.svg"}
                alt='TV'
                width={47}
                height={45}
                className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 hover:scale-110 cursor-pointer drop-shadow-md"
              />
            </div>

            {/* Shops Logo */}
            <div
              className="absolute -left-14 md:-left-19 lg:-left-20 top-[81%] z-20 animate-float"
              style={{ animationDelay: '2.5s', animationDuration: '6.2s' }}
            >
              <Image
                src={"/assets/images/svg/shopes-logo.svg"}
                alt='Shops'
                width={47}
                height={45}
                className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 hover:scale-110 cursor-pointer drop-shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

