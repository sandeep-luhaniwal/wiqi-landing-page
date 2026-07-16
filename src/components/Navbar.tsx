"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [downloadUrl, setDownloadUrl] = useState("https://play.google.com/store/apps/details?id=com.wiqi.app");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent || window.navigator.vendor || (window as any).opera;
      const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
      const isMac = /Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent);
      
      if (isIOS || isMac) {
        setDownloadUrl("https://apps.apple.com/us/app/wiqi-application/id6746743906");
      } else {
        setDownloadUrl("https://play.google.com/store/apps/details?id=com.wiqi.app");
      }
    }
  }, []);

  return (

    <div className="border-b bg-white border-[#E7D3EF] sticky top-0 z-50">
      <div className='max-w-7xl px-4 lg:px-10 mx-auto py-2.5 md:py-3 lg:py-4 flex items-center justify-between'>
        <Link href={"/"} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Image src={"/assets/images/svg/main-logo.svg"} alt='wiqi logo' width={126} height={30} className='h-8 w-24 md:w-28' />
        </Link>

        <div className="flex items-center gap-4">
          <Link 
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className='text-sm hover:bg-main-black md:text-base py-2 md:py-2.5 px-4 rounded-full cursor-pointer font-medium bg-primary text-white transition-colors duration-300'
          >
            Download WiQi
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar

