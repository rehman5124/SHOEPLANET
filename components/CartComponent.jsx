"use client"

import React from 'react'
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import { Increment, Decrement, Delete, getTotals, DecrementgetTotals } from '@/redux/CounterSlice';
import { useDispatch } from 'react-redux';

function CartComponent(props) {

  const dispatch = useDispatch();

  const prodQty = props.reduxItems.filter((item)=> {
    return item.id === props.data.id
  })

  const deleteComponent = () => {
    props.onDelete(props.id)
    dispatch(Delete(props.data))
    dispatch(DecrementgetTotals())
  }

  const increment = () => {
    dispatch(Increment(props.data))
    dispatch(getTotals())
  }
  const decrement = () => {
    dispatch(Decrement(props.data))
    dispatch(DecrementgetTotals(props.data))
  }
  


  return (
    <div className=''>
      <div className=" flex justify-between p-4">
            <Image
              src={props.data.img}
              alt="prodUct image"
              className={` bg-gradient-to-b ${props.data.color} w-40 p-4 rounded-xl`}
            />

            <div className="">
              <h1 className=" text-lg font-semibold">
                {props.data.title}
              </h1>
              <h3>{props.data.text}</h3>
              <div className=" flex gap-6 mt-2">
                <FaSquareMinus onClick={decrement} size={25} className=" rounded-lg cursor-pointer"/>
                <p className=" bg-black text-white px-2 rounded-md">{prodQty ? prodQty[0].quantity : 0}</p>
                <FaSquarePlus onClick={increment}  size={25} className=" rounded-lg cursor-pointer"/>
              </div>
            </div>

            <div className=" flex flex-col gap-8">
              <p className=" font-medium">{prodQty ? prodQty[0].quantity * prodQty[0].price : 0}</p>
              <MdDelete onClick={deleteComponent} size={30} className=" cursor-pointer"/>
            </div>
          </div>
    </div>
  )
}

export default CartComponent