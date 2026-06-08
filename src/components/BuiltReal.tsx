import React from 'react'
import Heading from './common/Heading'
import Paragraph from './common/Paragraph'
import Icons from './common/Icons';
import Image from 'next/image';

const FEATURES = [
    "One-to-one and group chats",
    "Voice and video calling",
    "Favorites and recent calls",
    "Contact list and quick actions",
    "Clean call status and missed call filters",
];
const BuiltReal = () => {

    return (
        <div className='bg-white'>
            <div className="max-w-7xl px-4 lg:px-10 mx-auto py-12 md:py-14 lg:py-16 xl:py-20">
                <Heading big bold mainblack center>
                    Built for real conversations.
                </Heading>
                <Paragraph mainblack lg center className='pt-1'>
                    From quick chats to video calls, WiQi keeps your conversations simple, fast and beautiful.
                </Paragraph>
                <div className="grid md:grid-cols-2 gap-6 md:gap-4 lg:gap-10 pt-8 md:pt-10 lg:pt-12 items-center">
                    <div className="flex flex-col gap-4 md:gap-6 order-1 md:order-0">
                        <Paragraph mainblack semibold>
                            Chat, call and connect without
                            switching apps.
                        </Paragraph>
                        <Paragraph gray base>
                            WiQi combines messaging, voice calls, video calls, contacts, favorites and call history in one familiar interface.
                        </Paragraph>
                        <div className="flex flex-col gap-3">
                            {FEATURES.map((obj, i) => {
                                return (
                                    <div key={i} className="flex items-center gap-2">
                                        <div>
                                            <Icons icon='pinkright' />
                                        </div>
                                        <Paragraph mainblack base>
                                            {obj}
                                        </Paragraph>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex justify-center order-0 md:order-1 pb-6 md:pb-0">
                        <Image src="/assets/images/webp/build-real.webp" alt="Built Real" width={442} height={413} className='w-full h-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuiltReal
