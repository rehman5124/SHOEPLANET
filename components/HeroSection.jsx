"use client"

import React from 'react'
import { heroproducts } from '@/data';
import Image from 'next/image';


function HeroSection() {
  return (
    <div className=" bg-red-600 w-full pb-10">
      <div className="">
        <img src="/images/herobackground2.png" alt="hero images" className=" relative lg:bottom-16 lg:left-10 rotate-3 lg:-mb-48" />
      </div>

      <div className=' grid grid-flow-row gap-4 justify-center md:grid-flow-col lg:grid-flow-col z-10'>
        <div className=" flex bg-red-500 bg-opacity-80 w-[300px] rounded-lg hover:scale-105 cursor-pointer shadow-xl">
          <div>
            <Image
              src={heroproducts[0].img}
              alt='hero prodct1'
              className=" w-20 mt-2 h-auto mx-4 scale-110"
            />
          </div>
          <div className=" border-l border-y-0 pl-4 pt-3 text-white">
            <h2 className=" font-[poppins] font-medium">
              {heroproducts[0].title}
            </h2>
            <p className="">{heroproducts[0].price}</p>
          </div>
        </div>

        <div className=' flex bg-red-500 bg-opacity-80 w-[300px] rounded-lg hover:scale-105 cursor-pointer shadow-xl'>
            <div>
                <Image 
                src={heroproducts[1].img}
                alt='hero product2' 
                className=' w-16 h-auto mx-4 mr-8 scale-150 mb-3'
                />
            </div>
            <div className=' border-l border-y-0 pl-4 pt-3 text-white'>
                <h2 className=' font-[poppins] font-medium'>{heroproducts[1].title}</h2>
                <p className=''>{heroproducts[1].price}</p>
            </div>
        </div>

      </div>
    </div>
  );
}

export default HeroSection