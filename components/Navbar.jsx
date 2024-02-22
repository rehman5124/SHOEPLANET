"use client"

import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { qtyState } from '@/redux/CounterSlice';

function Navbar(props) {

  const count = useSelector(qtyState)

    const [color, setColor] = useState(false);

    const changeColor = () => {

        if(window.scrollY >=90) {
          setColor(true);
        }else {
          setColor(false);
        }
    }
    
    useEffect(() => {
      window.addEventListener("scroll", changeColor);
    }, []);

    const toggle = () => {

        { document.getElementById('cart-section').classList.contains('hidden') ? document.getElementById('cart-section').classList.remove('hidden') : document.getElementById('cart-section').classList.add('hidden')};
    }

  return (
    <div
      className={` flex ${
        color ? "bg-rose-600/50" : "bg-red-600"
      }  sticky top-0 justify-evenly font-[poppins] gap-1 sm:gap-4 lg:justify-between lg:px-12 z-50`}
    >
      <img
        src="/images/nike-logo.png"
        alt="nike logo"
        className=" w-14 sm:w-20 h-14 pb-1 lg:w-28"
      />
      <div className=" flex gap-1 sm:gap-4 pt-3 font-medium text-white lg:gap-8">
        <h2 className="nav cursor-pointer lg:text-xl">MEN</h2>
        <h2 className="nav cursor-pointer lg:text-xl">WOMEN</h2>
        <h2 className="nav cursor-pointer lg:text-xl">KIDS</h2>
        <h2 className="nav cursor-pointer lg:text-xl">COLLECTION</h2>
      </div>
      <div className=" flex gap-2">
        <text className=" text-black font-semibold relative bg-white h-fit px-1 rounded-full text-lg left-[38px] top-[24px] lg:left-[42px] lg:top-[28px] lg:text-xl">
          {count}
        </text>
        <img
          src="/images/shoppingBag.png"
          alt="shoppingBag icon"
          className=" w-10 h-10 pt-2 lg:size-12 cursor-pointer"
          onClick={toggle}
        />
        <img
          src="/images/menuIcon.png"
          alt="menu icon"
          className=" w-8 h-8 pt-2 mt-1 lg:size-10 hidden sm:block"
        />
      </div>
    </div>
  );
}

export default Navbar