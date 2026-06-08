"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (

    <div className="border-b bg-white border-[#E7D3EF] sticky top-0 z-50">
      <div className='max-w-7xl px-4 lg:px-10 mx-auto py-2.5 md:py-3 lg:py-4 flex items-center justify-between'>
        <Link href={"/"} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Image src={"/assets/images/svg/main-logo.svg"} alt='wiqi logo' width={126} height={30} className='h-8 w-24 md:w-28' />
        </Link>

        <div className="flex items-center gap-4">
          <button className='text-sm hover:bg-main-black md:text-base py-2 md:py-2.5 px-4 rounded-full cursor-pointer font-medium bg-primary text-white transition-colors duration-300'>
            Download WiQi
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
