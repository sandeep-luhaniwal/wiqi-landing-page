import React from 'react'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'
import Icons from './common/Icons';
import Link from 'next/link';
const SERVICES = [
    {
        title: "WiQi Music",
        description: "Browse artists, playlists, and podcasts",
        icon: "music",
    },
    {
        title: "WiQi Movies",
        description: "Watch movies, shows and trailers",
        icon: "movies",
    },
    {
        title: "WiQi Radio",
        description: "Listen to live stations and news",
        icon: "radio",
    },
    {
        title: "WiQi Streams",
        description: "Live content and streaming",
        icon: "streams",
    },
    {
        title: "WiQi TV",
        description: "TV shows and series",
        icon: "tv",
    },
    {
        title: "WiQi Reads",
        description: "Books and audio books",
        icon: "reads",
    },
];

const YourEnterTainment = () => {
    return (
        <div id='entertainment' className='bg-[#41204C] py-12 md:py-14 lg:py-16 overflow-hidden'>
            <div className="max-w-7xl px-4 lg:px-10 mx-auto">
                <Heading white big bold center>
                    Your entertainment hub.
                </Heading>
                <Paragraph white center base light className='pt-1'>
                    Music, movies, radio, TV, streams and more — built into the WiQi experience.
                </Paragraph>
                <div className="pt-10 md:pt-12 lg:pt-14 grid grid-col-2 md:grid-cols-3 gap-4 lg:gap-5">
                    {SERVICES.map((obj, i) => {
                        return (
                            <div key={i} className="border border-white/20 bg-white/10 p-4 lg:p-6 rounded-xl lg:rounded-2xl">
                                <Icons icon={obj.icon} />
                                <Paragraph lg bold white className='pt-3'>
                                    {obj.title}
                                </Paragraph>
                                <Paragraph white base light className='opacity-70 pt-px pb-4'>
                                    {obj.description}
                                </Paragraph>
                                <Link href={"/"} className=''>
                                    <Paragraph white base medium className='hover:text-main-black duration-300'>
                                        Explore →
                                    </Paragraph>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default YourEnterTainment
