import React from 'react'

interface ParagraphProps {
  children: React.ReactNode;
  sm?: boolean;
  base?: boolean;
  lg?: boolean;
  xl?: boolean;
  xs?: boolean;
  medium?: boolean;
  light?: boolean;
  semibold?: boolean;
  bold?: boolean;
  extrabold?: boolean;
  pink?: boolean;
  white?: boolean;
  mainblack?: boolean;
  gray?: boolean;
  center?: boolean;
  right?: boolean;
  sofia?: boolean;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({
  children, sm, base, lg, xl, medium, xs, light, semibold, bold, extrabold, pink, white, gray, mainblack, sofia, center, right, className = ''
}) => {
  return (
    <p className={`${sm ? 'text-sm' : base ? 'text-sm md:text-base' : xs ? 'text-xs' : lg ? 'text-sm md:text-base lg:text-lg' : xl ? 'text-base md:text-lg lg:text-xl' : "text-lg md:text-xl lg:text-2xl"}
        ${className} ${white ? "text-white" : pink ? "text-primary" : gray ? "text-[#6B6B6B]" : mainblack ? "text-main-black" : "text-black"}
        ${medium ? "font-medium" : light ? "font-light" : semibold ? "font-semibold" : bold ? "font-bold" : extrabold ? "font-extrabold" : "font-normal"}
        ${center ? "mx-auto text-center" : right ? "text-right ms-auto" : "text-left"} ${sofia ? "font-sofia" : "font-inter"} duration-300
        leading-[150%]
        `}>
      {children}
    </p>
  )
}

export default Paragraph
