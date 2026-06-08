import React from 'react'

interface HeadingProps {
  children: React.ReactNode;
  small?: boolean;
  smallbig?: boolean;
  big?: boolean;
  medium?: boolean;
  light?: boolean;
  semibold?: boolean;
  bold?: boolean;
  extrabold?: boolean;
  pink?: boolean;
  white?: boolean;
  mainblack?: boolean;
  center?: boolean;
  right?: boolean;
  inter?: boolean;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ 
  children, small, smallbig, big, medium,inter, light, semibold, bold, extrabold, pink, white, mainblack, center, right, className = '' 
}) => {
  return (
    <h2 className={`
    ${small ? 'text-3xl' : smallbig ? 'text-3xl md:text-[32px]' : big ? 'text-3xl md:text-[40px] lg:text-[45px]' : 'text-4xl md:text-[42px] lg:text-[56px]'}
    ${className} ${white ? "text-white" : pink ? "text-primary" : mainblack ? "text-main-black" : "text-black"}
    ${medium ? "font-medium" : light ? "font-light" : semibold ? "font-semibold" : bold ? "font-bold" : extrabold ? "font-extrabold" : "font-normal"}
    ${center ? "mx-auto text-center" : right ? "text-right ms-auto" : "text-left"}
    ${inter?"font-inter":"font-sofia"}
    leading-[1.1]
    `}>
      {children}
    </h2>
  )
}

export default Heading
