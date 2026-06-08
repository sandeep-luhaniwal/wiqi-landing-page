import React from 'react'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'
import Image from 'next/image'
const SOCIAL_FEATURES = [
    {
        id: 1,
        title: "Share posts",
    },
    {
        id: 2,
        title: "Follow creators and friends",
    },
    {
        id: 3,
        title: "Message directly",
    },
    {
        id: 4,
        title: "Build your digital profile",
    },
    {
        id: 5,
        title: "Discover people and content",
    },
];
const GrowApp = () => {
    return (
        <div  className='bg-white py-12 md:py-14 lg:py-16 overflow-hidden'>
            <div className="max-w-7xl px-4 lg:px-10 mx-auto">
                <Heading big mainblack bold center>
                    Create, follow and grow your community.
                </Heading>
                <Paragraph mainblack light base center>
                    Create, follow and grow your community.
                </Paragraph>
                <div className="grid md:grid-cols-3 pt-4 md:pt-6 gap-5 items-center">
                    <div className="md:col-span-1">
                        <Image src="/assets/images/webp/grow-app.webp" alt="Grow App" width={400} height={400} className='mx-auto' />
                    </div>
                    <div className="md:col-span-2 xl:ps-10">
                        <div className="flex flex-col gap-4 xl:gap-6">
                            {SOCIAL_FEATURES.map((obj, i) => (
                                <div key={i} className="flex items-center gap-2 bg-[#F8EFFC] p-4 lg:p-6 rounded-[12px] lg:rounded-xl">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary flex items-center justify-center rounded-lg md:rounded-[14px]]">
                                        <Paragraph bold base white>{obj.id}</Paragraph>
                                    </div>
                                    <Paragraph mainblack lg medium>{obj.title}</Paragraph>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GrowApp
