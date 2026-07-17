"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Paragraph from './common/Paragraph'

const Footer = () => {
  const year = new Date().getFullYear();
  const socialLinks = [
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.39-4h-4.2V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    {
      name: "Twitter",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
      )
    },
    {
      name: "YouTube",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    }
  ]

  const companyLinks = [
    { label: "Digital Word", href: "#digitalword" },
    { label: "Entertainment", href: "#entertainment" },
    { label: "About", href: "#about" },
  ]

  const contactLinks = [
    { label: "support@WiQi.net", href: "mailto:support@WiQi.net" },
    { label: "WiQi HQ, 123 Innovation Street, San Francisco, CA" },
  ]

  const supportLinks = [
    { label: "Help Center", href: "/" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Condition", href: "/terms-and-condition" },
    { label: "Child Safety Standards", href: "/child-safety-standards" },
  ]

  return (
    <footer className="bg-[#2B113B] text-white pt-16 pb-6">
      <div className="max-w-7xl px-4 lg:px-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">

          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <div className="flex items-center gap-2">
                {/* Fallback to custom SVG for white logo if needed, but assuming main-logo works */}
                <Image
                  src={"/assets/images/svg/main-logo.svg"}
                  alt='wiqi logo'
                  width={126}
                  height={30}
                  className='h-8 w-24 md:w-28 brightness-0 invert'
                />
              </div>
            </Link>

            <Paragraph sm white className="mb-8 max-w-sm leading-relaxed">
              WiQi is an all-in-one app built to connect, entertain and simplify your digital life.
            </Paragraph>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#C2A5D1] hover:bg-white/10 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-urbanist font-bold text-lg mb-6 text-white">Company</h4>
            <ul className="flex flex-col gap-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        const targetId = link.href.substring(1);
                        const element = document.getElementById(targetId);
                        if (element) {
                          e.preventDefault();
                          const top = element.getBoundingClientRect().top + window.scrollY - 100;
                          window.scrollTo({
                            top,
                            behavior: 'smooth'
                          });
                        }
                      }
                    }}
                    className="text-[#C2A5D1] hover:text-white text-sm md:text-base transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features Links */}


          {/* Support Links */}
          <div>
            <h4 className="font-urbanist font-bold text-lg mb-6 text-white">Support</h4>
            <ul className="flex flex-col gap-4">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#C2A5D1] hover:text-white text-sm md:text-base transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-urbanist font-bold text-lg mb-6 text-white">Contact</h4>
            <ul className="flex flex-col gap-4">
              {contactLinks.map((link) => (
                <li key={link.label} className="text-[#C2A5D1] text-sm md:text-base leading-relaxed">
                  {link.href ? (
                    <Link href={link.href} className="hover:text-white transition-colors duration-300">
                      {link.label}
                    </Link>
                  ) : (
                    <span>{link.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Download Section */}
        <div className="py-10 border-b border-white/10">
          <h4 className="font-urbanist font-bold text-lg mb-5 text-white">Download WiQi</h4>
          <div className="flex gap-4 items-center">
            <Link 
              href={"https://play.google.com/store/apps/details?id=com.wiqi.app"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-90 transition-opacity"
            >
              <Image src={"/assets/images/png/google-play.png"} alt='Get it on Google Play' width={150} height={46} className='h-11 w-auto' />
            </Link>
            <Link 
              href={"https://apps.apple.com/us/app/wiqi-application/id6746743906"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-90 transition-opacity"
            >
              <Image src={"/assets/images/png/apple-store.png"} alt='Download on the App Store' width={150} height={46} className='h-11 w-auto' />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <Paragraph sm white className="opacity-80">
            © {year} WiQi. SamPro Holding Limited.
          </Paragraph>
          {/* <Paragraph sm white className="opacity-80">Developed by  <Link href={"https://delaine.tech/"} target='_blank' className='hover:text-pink! hover:opacity-100'>Delaine</Link></Paragraph> */}

        </div>
      </div>
    </footer>
  )
}

export default Footer
