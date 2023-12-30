"use client"

import React from 'react'
import { popularsales } from '@/data'
import Image from 'next/image'

function PopularSales() {
  return (
    <div>
        <h1 className=' font-[poppins] font-bold text-5xl pt-8 pb-8 text-center'>{popularsales.title}</h1>
        <div className=' mx-12 grid grid-flow-row gap-8 text-white font-[poppins] lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2'>

            <div className=' bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-500 flex transition-all duration-500 ease-in-out w-full hover:scale-105'>
                <div>
                    <h2 className=' text-lg font-semibold ' >{popularsales.items[0].title}</h2>
                    <p className=' text-md '>{popularsales.items[0].text}</p>
                    <div className='flex my-[5px]'>
                        <h3 className='text-black bg-white rounded-md font-medium p-[1px] '>{popularsales.items[0].price}</h3>
                        <h4 className=' pl-4 '>&#9733; {popularsales.items[0].rating}</h4>
                    </div>
                    <div className='flex mt-2 '>
                        <img className=' h-7 mr-4 bg-white rounded-md p-[2px] cursor-pointer ' src='/images/cart.png' />
                        <button className='text-black bg-white rounded-md py-[1px] px-[8px] font-medium z-20'>Buy Now</button>
                    </div>
                </div>
                <Image 
                    src={popularsales.items[0].img}
                    alt='popularSales01'
                    className=' w-40 h-24 -rotate-[35deg] mt-2 hover:-rotate-0 duration-700 ml-auto lg:w-48 lg:h-28'
                />
            </div>

            <div className=' bg-rose-600 p-4 rounded-2xl shadow-lg shadow-rose-600/80 flex transition-all duration-500 ease-in-out w-full hover:scale-105'>
                <div>
                    <h2 className=' text-lg font-semibold ' >{popularsales.items[1].title}</h2>
                    <p className=' text-md '>{popularsales.items[1].text}</p>
                    <div className='flex my-[5px]'>
                        <h3 className='text-black bg-white rounded-md font-medium p-[1px] '>{popularsales.items[1].price}</h3>
                        <h4 className=' pl-4 '>&#9733; {popularsales.items[1].rating}</h4>
                    </div>
                    <div className='flex mt-2 '>
                        <img className=' h-7 mr-4 bg-white rounded-md p-[2px] cursor-pointer ' src='/images/cart.png' />
                        <button className='text-black bg-white rounded-md py-[1px] px-[8px] font-medium z-20'>Buy Now</button>
                    </div>
                </div>
                <Image 
                    src={popularsales.items[1].img}
                    alt='popularSales01'
                    className=' w-44 h-20 -rotate-[35deg] mt-4 hover:-rotate-0 duration-700 ml-auto lg:w-48 lg:h-[5.5rem]'
                />
            </div>

            <div className=' bg-violet-500 p-4 rounded-2xl shadow-lg shadow-violet-600 flex transition-all duration-500 ease-in-out w-full hover:scale-105'>
                <div>
                    <h2 className=' text-lg font-semibold ' >{popularsales.items[2].title}</h2>
                    <p className=' text-md '>{popularsales.items[2].text}</p>
                    <div className='flex my-[5px]'>
                        <h3 className='text-black bg-white rounded-md font-medium p-[1px] '>{popularsales.items[2].price}</h3>
                        <h4 className=' pl-4 '>&#9733; {popularsales.items[2].rating}</h4>
                    </div>
                    <div className='flex mt-2 '>
                        <img className=' h-7 mr-4 bg-white rounded-md p-[2px] cursor-pointer ' src='/images/cart.png' />
                        <button className='text-black bg-white rounded-md py-[1px] px-[8px] font-medium z-20'>Buy Now</button>
                    </div>
                </div>
                <Image 
                    src={popularsales.items[2].img}
                    alt='popularSales01'
                    className=' w-40 h-24 -rotate-[35deg] mt-2 hover:-rotate-0 duration-700 ml-auto lg:w-48 lg:h-28'
                />
            </div>
        </div>
    </div>
  )
}

export default PopularSales