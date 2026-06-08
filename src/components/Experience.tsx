"use client"
import React, { useRef } from 'react'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const EXPERIENCE = [
    "/assets/images/webp/hero-main.webp",
    "/assets/images/webp/experience2.webp",
    "/assets/images/webp/experience3.webp",
    "/assets/images/webp/experience4.webp",
    "/assets/images/webp/experience5.webp",
];

const Experience = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const tweenRef = useRef<gsap.core.Tween | null>(null);

    useGSAP(() => {
        if (!sliderRef.current) return;
        tweenRef.current = gsap.to(sliderRef.current, {
            xPercent: -25,
            ease: 'none',
            duration: 15,
            repeat: -1,
        });
    }, { scope: containerRef });

    const handleMouseEnter = () => {
        if (tweenRef.current) {
            tweenRef.current.pause();
        }
    };

    const handleMouseLeave = () => {
        if (tweenRef.current) {
            tweenRef.current.play();
        }
    };

    return (
        <div id="about" className='bg-[#41204C] py-12 md:py-14 lg:py-16 overflow-hidden'>
            <div className="max-w-7xl px-4 lg:px-10 mx-auto">
                <Heading white big bold center>
                    A beautiful app experience from start to finish.
                </Heading>
                <Paragraph base white center light className='pt-1'>
                    Every screen is designed with a clean white layout, purple identity and simple navigation.
                </Paragraph>
            </div>
            <div
                ref={containerRef}
                className="w-full overflow-hidden pt-6 md:pt-8 lg:pt-10 cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div ref={sliderRef} className="flex w-max">
                    {Array.from({ length: 4 }).map((_, copyIndex) =>
                        EXPERIENCE.map((obj, i) => (
                            <div key={`${copyIndex}-${i}`} className="shrink-0 w-37.5 sm:w-45 md:w-50 lg:w-55 xl:w-60 pr-5 md:pr-6 lg:pr-8 xl:pr-10">
                                <Image
                                    src={obj}
                                    alt={`Experience ${copyIndex * EXPERIENCE.length + i + 1}`}
                                    width={240}
                                    height={480}
                                    className='w-full h-auto object-cover rounded-2xl md:rounded-3xl shadow-lg'
                                    priority={copyIndex === 0 && i === 0}
                                />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Experience

