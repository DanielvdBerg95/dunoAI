'use client'

import React from 'react';
import Lottie from "lottie-react";
import starAnimation from "@/public/lottie/starAnimation.json";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="relative auth flex-col sm:flex-row justify-items-stretch">
            <Lottie
                animationData={starAnimation}
                loop={true}
                className='absolute inset-0 h-full w-2/3 z-0 mr-96 left-0 top-0'
            />
            <div className='relative flex-col w-3/5 justify-self-start flex flex-wrap justify-start z-10'>
                <div className='relative flex-col h-full justify-self-stretch'>
                    <div className='items-center justify-center flex-col'>
                        <div className='sm:px-10 text-white sm:p-40-regular p-16-regular pb-8'>duno</div>
                        <div className='flex flex-row pb-8'>
                            <div className='sm:px-10 text-white sm:p-40-regular p-16-regular'>
                                Start your business journey <span className='font-black'>today</span>
                            </div>
                        </div>
                        <div className='sm:px-10 text-white sm:p-20-regular p-10-regular'>
                            Duno is here to kickstart your business in the right direction
                        </div>
                    </div>
                </div>
            </div>
            <div className='sm:rounded-l-3xl rounded-t-3xl bg-white w-full h-screen items-center justify-self-stretch justify-center flex'>
                <div className="w-full h-full">{children}</div>
            </div>
        </main>
    );
};

export default Layout;
