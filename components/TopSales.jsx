import React from 'react'
import { toprateslaes } from '@/data'
import Image from 'next/image'


function TopSales() {
  return (
    <div className=''>
        <h1 className=' font-[poppins] font-bold text-5xl pt-12 text-center'>{toprateslaes.title}</h1>
        <div className=' grid grid-cols-1 gap-6 mx-14 my-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            <div className=' group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-emerald-500 to-green-500 h-80 rounded-2xl flex justify-center shadow-lg shadow-emerald-600'>
                <Image 
                    src={toprateslaes.items[1].img}
                    alt='green sneakers'
                    className=' h-36 w-64 my-4 duration-700 group-hover:scale-105'
                />
                <h2 className=' absolute pt-48 text-xl font-semibold text-white'>{toprateslaes.items[1].title}</h2>
                <div>
                    <h2 className=' absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md'>{toprateslaes.items[1].price}</h2>
                    <h4 className=' absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md'>&#9733; {toprateslaes.items[1].rating}</h4>
                    <img 
                        src='/images/cart.png'
                        alt='cart icon'
                        className=' absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer'
                    />
                    <button className='absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium '>Buy Now</button>
                </div>
            </div>

            <div className=' group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-orange-400 to-yellow-400 h-80 rounded-2xl flex justify-center shadow-lg shadow-orange-400'>
                <Image 
                    src={toprateslaes.items[6].img}
                    alt='green sneakers'
                    className=' h-36 w-64 my-4 duration-700 group-hover:scale-105'
                />
                <h2 className=' absolute pt-48 text-xl font-semibold text-white'>{toprateslaes.items[6].title}</h2>
                <div>
                    <h2 className=' absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md'>{toprateslaes.items[6].price}</h2>
                    <h4 className=' absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md'>&#9733; {toprateslaes.items[6].rating}</h4>
                    <img 
                        src='/images/cart.png'
                        alt='cart icon'
                        className=' absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer'
                    />
                    <button className='absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium '>Buy Now</button>
                </div>
            </div>

            <div className=' group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-sky-700 to-blue-400 h-80 rounded-2xl flex justify-center shadow-lg shadow-sky-600'>
                <Image 
                    src={toprateslaes.items[5].img}
                    alt='green sneakers'
                    className=' h-36 w-64 my-4 duration-700 group-hover:scale-105'
                />
                <h2 className=' absolute pt-48 text-xl font-semibold text-white'>{toprateslaes.items[5].title}</h2>
                <div>
                    <h2 className=' absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md'>{toprateslaes.items[5].price}</h2>
                    <h4 className=' absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md'>&#9733; {toprateslaes.items[5].rating}</h4>
                    <img 
                        src='/images/cart.png'
                        alt='cart icon'
                        className=' absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer'
                    />
                    <button className='absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium '>Buy Now</button>
                </div>
            </div>

            <div className=' group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-red-950 to-red-600 h-80 rounded-2xl flex justify-center shadow-lg shadow-red-800'>
                <Image 
                    src={toprateslaes.items[2].img}
                    alt='green sneakers'
                    className=' h-36 w-64 my-4 duration-700 group-hover:scale-105'
                />
                <h2 className=' absolute pt-48 text-xl font-semibold text-white'>{toprateslaes.items[2].title}</h2>
                <div>
                    <h2 className=' absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md'>{toprateslaes.items[2].price}</h2>
                    <h4 className=' absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md'>&#9733; {toprateslaes.items[2].rating}</h4>
                    <img 
                        src='/images/cart.png'
                        alt='cart icon'
                        className=' absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer'
                    />
                    <button className='absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium '>Buy Now</button>
                </div>
            </div>

            <div className=' group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-cyan-400 to-blue-700 h-80 rounded-2xl flex justify-center shadow-lg shadow-cyan-700'>
                <Image 
                    src={toprateslaes.items[0].img}
                    alt='green sneakers'
                    className=' h-36 w-64 my-4 duration-700 group-hover:scale-105'
                />
                <h2 className=' absolute pt-48 text-xl font-semibold text-white'>{toprateslaes.items[0].title}</h2>
                <div>
                    <h2 className=' absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md'>{toprateslaes.items[0].price}</h2>
                    <h4 className=' absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md'>&#9733; {toprateslaes.items[0].rating}</h4>
                    <img 
                        src='/images/cart.png'
                        alt='cart icon'
                        className=' absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer'
                    />
                    <button className='absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium '>Buy Now</button>
                </div>
            </div>

            <div className=' group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-amber-700 to-yellow-600 h-80 rounded-2xl flex justify-center shadow-lg shadow-amber-700'>
                <Image 
                    src={toprateslaes.items[3].img}
                    alt='green sneakers'
                    className=' h-36 w-64 my-4 duration-700 group-hover:scale-105'
                />
                <h2 className=' absolute pt-48 text-xl font-semibold text-white'>{toprateslaes.items[3].title}</h2>
                <div>
                    <h2 className=' absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md'>{toprateslaes.items[3].price}</h2>
                    <h4 className=' absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md'>&#9733; {toprateslaes.items[3].rating}</h4>
                    <img 
                        src='/images/cart.png'
                        alt='cart icon'
                        className=' absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer'
                    />
                    <button className='absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium '>Buy Now</button>
                </div>
            </div>

            <div className=' group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-yellow-300 to-black h-80 rounded-2xl flex justify-center shadow-lg shadow-amber-700'>
                <Image 
                    src={toprateslaes.items[4].img}
                    alt='green sneakers'
                    className=' h-36 w-64 my-4 duration-700 group-hover:scale-105'
                />
                <h2 className=' absolute pt-48 text-xl font-semibold text-white'>{toprateslaes.items[4].title}</h2>
                <div>
                    <h2 className=' absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md'>{toprateslaes.items[4].price}</h2>
                    <h4 className=' absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md'>&#9733; {toprateslaes.items[4].rating}</h4>
                    <img 
                        src='/images/cart.png'
                        alt='cart icon'
                        className=' absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer'
                    />
                    <button className='absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium '>Buy Now</button>
                </div>
            </div>

            <div className=' group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-purple-400 to-slate-300 h-80 rounded-2xl flex justify-center shadow-lg shadow-purple-600'>
                <Image 
                    src={toprateslaes.items[8].img}
                    alt='green sneakers'
                    className=' h-36 w-64 my-4 duration-700 group-hover:scale-105'
                />
                <h2 className=' absolute pt-48 text-xl font-semibold text-white'>{toprateslaes.items[8].title}</h2>
                <div>
                    <h2 className=' absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md'>{toprateslaes.items[8].price}</h2>
                    <h4 className=' absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md'>&#9733; {toprateslaes.items[8].rating}</h4>
                    <img 
                        src='/images/cart.png'
                        alt='cart icon'
                        className=' absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer'
                    />
                    <button className='absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium '>Buy Now</button>
                </div>
            </div>

            <div className=' group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-orange-800 h-80 rounded-2xl flex justify-center shadow-lg shadow-orange-700'>
                <Image 
                    src={toprateslaes.items[7].img}
                    alt='green sneakers'
                    className=' h-36 w-64 my-4 duration-700 group-hover:scale-105'
                />
                <h2 className=' absolute pt-48 text-xl font-semibold text-white'>{toprateslaes.items[7].title}</h2>
                <div>
                    <h2 className=' absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md'>{toprateslaes.items[7].price}</h2>
                    <h4 className=' absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md'>&#9733; {toprateslaes.items[7].rating}</h4>
                    <img 
                        src='/images/cart.png'
                        alt='cart icon'
                        className=' absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer'
                    />
                    <button className='absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium '>Buy Now</button>
                </div>
            </div>

            <div className=' group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-slate-700 to-green-400 h-80 rounded-2xl flex justify-center shadow-lg shadow-green-800'>
                <Image 
                    src={toprateslaes.items[9].img}
                    alt='green sneakers'
                    className=' h-36 w-64 my-4 duration-700 group-hover:scale-105'
                />
                <h2 className=' absolute pt-48 text-xl font-semibold text-white'>{toprateslaes.items[9].title}</h2>
                <div>
                    <h2 className=' absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md'>{toprateslaes.items[9].price}</h2>
                    <h4 className=' absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md'>&#9733; {toprateslaes.items[9].rating}</h4>
                    <img 
                        src='/images/cart.png'
                        alt='cart icon'
                        className=' absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer'
                    />
                    <button className='absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium '>Buy Now</button>
                </div>
            </div>

            <div className=' group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-black to-slate-700 h-80 rounded-2xl flex justify-center shadow-lg shadow-slate-600'>
                <Image 
                    src={toprateslaes.items[10].img}
                    alt='green sneakers'
                    className=' h-36 w-64 my-4 duration-700 group-hover:scale-105'
                />
                <h2 className=' absolute pt-48 text-xl font-semibold text-white'>{toprateslaes.items[10].title}</h2>
                <div>
                    <h2 className=' absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md'>{toprateslaes.items[10].price}</h2>
                    <h4 className=' absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md'>&#9733; {toprateslaes.items[10].rating}</h4>
                    <img 
                        src='/images/cart.png'
                        alt='cart icon'
                        className=' absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer'
                    />
                    <button className='absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium '>Buy Now</button>
                </div>
            </div>

            <div className=' group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-white to-blue-950 h-80 rounded-2xl flex justify-center shadow-lg shadow-blue-900'>
                <Image 
                    src={toprateslaes.items[11].img}
                    alt='green sneakers'
                    className=' h-36 w-64 my-4 duration-700 group-hover:scale-105'
                />
                <h2 className=' absolute pt-48 text-xl font-semibold text-white'>{toprateslaes.items[11].title}</h2>
                <div>
                    <h2 className=' absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md'>{toprateslaes.items[11].price}</h2>
                    <h4 className=' absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md'>&#9733; {toprateslaes.items[11].rating}</h4>
                    <img 
                        src='/images/cart.png'
                        alt='cart icon'
                        className=' absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer'
                    />
                    <button className='absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium '>Buy Now</button>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default TopSales