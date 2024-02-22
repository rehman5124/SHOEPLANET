"use client"

import React from 'react'
import { popularsales } from '@/data'
import Image from 'next/image'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ItemData, getTotals } from '@/redux/CounterSlice';
import { useDispatch } from 'react-redux';

function PopularSales(props) {

    const dispatch = useDispatch();

    
    const clickEvent = (event) => {

        popularsales.items.map((item) =>{
               if (item.id === event.target.id) {
                    props.fetchData(item)
                    // console.log(item)
                    dispatch(ItemData(item))
                    return item;
                }
        })

        toast.success('Item Added to Cart!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: 0,
            type:"success",
            transition: Bounce,
            theme: "colored",
        });

        dispatch(getTotals()) 

    }

    const handleBuyNow = (event) => {

      popularsales.items.map((item) => {
        if (item.id === event.target.id) {
          props.fetchData(item);
          dispatch(ItemData(item))
          // console.log(item)
          return item;
        }

      });

      {
        document.getElementById("cart-section").classList.contains("hidden")
          ? document.getElementById("cart-section").classList.remove("hidden")
          : null;
      }

      toast.success('Item Added to Cart!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        type:"success",
        transition: Bounce,
        theme: "colored",
    });

    dispatch(getTotals())
    }


  return (
    <div>
        <h1 className=' font-[poppins] font-bold text-5xl pt-8 pb-8 text-center'>{popularsales.title}</h1>
        <div className=' mx-12 grid grid-flow-row gap-8 text-white font-[poppins] lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2'>

            <div className={` bg-gradient-to-b from-blue-600 to-blue-500 p-4 rounded-2xl shadow-lg shadow-blue-500 flex transition-all duration-500 ease-in-out w-full hover:scale-105`}>
                <div>
                    <h2 className=' text-lg font-semibold ' >{popularsales.items[0].title}</h2>
                    <p className=' text-md '>{popularsales.items[0].text}</p>
                    <div className='flex my-[5px]'>
                        <h3 className='text-black bg-white rounded-md font-medium p-[1px] '>${popularsales.items[0].price}</h3>
                        <h4 className=' pl-4 '>&#9733; {popularsales.items[0].rating}</h4>
                    </div>
                    <div className='flex mt-2 '>
                        <img className=' h-7 mr-4 bg-white rounded-md p-[2px] cursor-pointer ' id= '0p0x1' src='/images/cart.png' onClick={clickEvent}/>
                        <button onClick={handleBuyNow} id='0p0x1' className='text-black bg-white rounded-md py-[1px] px-[8px] font-medium z-10'>Buy Now</button>
                    </div>
                </div>
                <Image 
                    src={popularsales.items[0].img}
                    alt='popularSales01'
                    className=' w-40 h-24 -rotate-[35deg] mt-2 hover:-rotate-0 duration-700 ml-auto lg:w-48 lg:h-28'
                />
            </div>

            <div className={` bg-gradient-to-b from-red-500 to-rose-500 p-4 rounded-2xl shadow-lg shadow-rose-600/80 flex transition-all duration-500 ease-in-out w-full hover:scale-105`}>
                <div>
                    <h2 className=' text-lg font-semibold ' >{popularsales.items[1].title}</h2>
                    <p className=' text-md '>{popularsales.items[1].text}</p>
                    <div className='flex my-[5px]'>
                        <h3 className='text-black bg-white rounded-md font-medium p-[1px] '>${popularsales.items[1].price}</h3>
                        <h4 className=' pl-4 '>&#9733; {popularsales.items[1].rating}</h4>
                    </div>
                    <div className='flex mt-2 '>
                        <img className=' h-7 mr-4 bg-white rounded-md p-[2px] cursor-pointer ' id='0p0x2' src='/images/cart.png' onClick={clickEvent}/>
                        <button onClick={handleBuyNow} id='0p0x2' className='text-black bg-white rounded-md py-[1px] px-[8px] font-medium z-10'>Buy Now</button>
                    </div>
                </div>
                <Image 
                    src={popularsales.items[1].img}
                    alt='popularSales01'
                    className=' w-44 h-20 -rotate-[35deg] mt-4 hover:-rotate-0 duration-700 ml-auto lg:w-48 lg:h-[5.5rem]'
                />
            </div>

            <div className={` bg-gradient-to-b from-violet-500 to-indigo-500 p-4 rounded-2xl shadow-lg shadow-violet-600 flex transition-all duration-500 ease-in-out w-full hover:scale-105`}>
                <div>
                    <h2 className=' text-lg font-semibold ' >{popularsales.items[2].title}</h2>
                    <p className=' text-md '>{popularsales.items[2].text}</p>
                    <div className='flex my-[5px]'>
                        <h3 className='text-black bg-white rounded-md font-medium p-[1px] '>${popularsales.items[2].price}</h3>
                        <h4 className=' pl-4 '>&#9733; {popularsales.items[2].rating}</h4>
                    </div>
                    <div className='flex mt-2 '>
                        <img className=' h-7 mr-4 bg-white rounded-md p-[2px] cursor-pointer ' id = '0p0x3' src='/images/cart.png' onClick={clickEvent}/>
                        <button onClick={handleBuyNow} id='0p0x3' className='text-black bg-white rounded-md py-[1px] px-[8px] font-medium z-10'>Buy Now</button>
                    </div>
                </div>
                <Image 
                    src={popularsales.items[2].img}
                    alt='popularSales01'
                    className=' w-40 h-24 -rotate-[35deg] mt-2 hover:-rotate-0 duration-700 ml-auto lg:w-48 lg:h-28'
                />
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default PopularSales