"use client"

import React from "react";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import CartComponent from "./CartComponent";
import { motion } from "framer-motion";
import { slideIn } from "@/motion";
import { useSelector } from 'react-redux';
import { dataState, getTotals, priceState, qtyState } from "@/redux/CounterSlice";

function CartSection(props) {

  const reduxData = useSelector(dataState)
  const totalsData = useSelector(getTotals)
  const totalPriceData = useSelector(priceState)
  const quantityState = useSelector(qtyState)



  const toggle = () => {
    {
      document.getElementById("cart-section").classList.contains("hidden")
        ? document.getElementById("cart-section").classList.remove("hidden")
        : document.getElementById("cart-section").classList.add("hidden");
    }
  }


  return (
    <motion.div
      variants={slideIn}
      initial="hidden"
      whileInView="visible"
      id="cart-section"
      className=" h-[90vh] bg-white/90 fixed z-20 w-full lg:w-[50vw] lg:h-[95vh] xl:w-[40vw] lg:right-0 overflow-auto hidden"
    >
      <div className=" flex sticky top-0 justify-between bg-white border-b-[1px] border-red-600 p-2 z-10">
        <RiArrowLeftDoubleFill
          onClick={toggle}
          size={30}
          className=" cursor-pointer"
        />
        <h3>Your Cart ({quantityState} Items)</h3>
        <IoIosCloseCircle
          onClick={toggle}
          size={30}
          className=" cursor-pointer"
        />
      </div>

      {reduxData.length === 0 ? 
      <img 
        src="/images/cart.png"
        alt="cart icon"
        className=" z-0 size-56 lg:size-44 relative top-[25vh] left-[35vw] lg:top-[20vh] lg:left-[15vw]"
      />
      : null}
      
      {props.item.map((item, index) => {
        return (
          <CartComponent
            key={index}
            id={index}
            data={item}
            reduxItems = {reduxData}
            onDelete={props.deleteComponent}
          />
        );
      })}

      {props.topItem.map((item, index) => {
        return (
          <CartComponent
            key={index}
            id={index}
            data={item}
            reduxItems = {reduxData}
            onDelete={props.deleteTopComponent}
          />
        );
      })}

      <div className=" px-4 sticky bottom-0 mt-[80%] w-full py-4 lg:pb-8 bg-white">
        <div className=" flex">
          <h2 className=" font-semibold">Subtotal:</h2>
          <h2 className=" ml-auto">{totalPriceData}</h2>
        </div>

        <div className=" flex">
          <h2 className=" font-semibold">Estimated Delivery:</h2>
          <h2 className=" ml-auto">Free</h2>
        </div>

        <div className=" flex">
          <h2 className=" font-semibold">Total:</h2>
          <h2 className=" ml-auto">{totalPriceData}</h2>
        </div>
        <button className=" bg-black text-white p-4 rounded-full mt-4 w-full z-20">
          Proceed to Checkout
        </button>
      </div>
    </motion.div>
  );
}

export default CartSection;
