import React from "react";
import { toprateslaes } from "@/data";
import Image from "next/image";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ItemData, getTotals } from "@/redux/CounterSlice";
import { useDispatch } from "react-redux";

function TopSales(props) {
  const dispatch = useDispatch();

  const clickEvent = (event) => {
    toprateslaes.items.map((item) => {
      if (item.id === event.target.id) {
        props.fetchData(item);
        dispatch(ItemData(item));
        // console.log(item)
        return item;
      }
    });

    toast.success("Item Added to Cart!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      type: "success",
      transition: Bounce,
      theme: "colored",
    });

    dispatch(getTotals());
  };

  const handleBuyNow = (event) => {
    toprateslaes.items.map((item) => {
      if (item.id === event.target.id) {
        props.fetchData(item);
        dispatch(ItemData(item));
        // console.log(item)
        return item;
      }
    });

    {
      document.getElementById("cart-section").classList.contains("hidden")
        ? document.getElementById("cart-section").classList.remove("hidden")
        : null;
    }

    toast.success("Item Added to Cart!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      type: "success",
      transition: Bounce,
      theme: "colored",
    });

    dispatch(getTotals());
  };

  return (
    <div className="">
      <h1 className=" font-[poppins] font-bold text-5xl pt-12 text-center">
        {toprateslaes.title}
      </h1>
      <div className=" grid grid-cols-1 gap-6 mx-14 my-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className=" group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-emerald-500 to-green-500 h-80 rounded-2xl flex justify-center shadow-lg shadow-emerald-600">
          <Image
            src={toprateslaes.items[1].img}
            alt="green sneakers"
            className=" h-36 w-64 my-4 duration-700 group-hover:scale-105"
          />
          <h2 className=" absolute pt-48 text-xl font-semibold text-white">
            {toprateslaes.items[1].title}
          </h2>
          <div>
            <h2 className=" absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md">
              {toprateslaes.items[1].price}
            </h2>
            <h4 className=" absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md">
              &#9733; {toprateslaes.items[1].rating}
            </h4>
            <img
              onClick={clickEvent}
              id="0M0x2"
              src="/images/cart.png"
              alt="cart icon"
              className=" absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer"
            />
            <button
              onClick={handleBuyNow}
              id="0M0x2"
              className="absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium "
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className=" group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-orange-400 to-yellow-400 h-80 rounded-2xl flex justify-center shadow-lg shadow-orange-400">
          <Image
            src={toprateslaes.items[6].img}
            alt="green sneakers"
            className=" h-36 w-64 my-4 duration-700 group-hover:scale-105"
          />
          <h2 className=" absolute pt-48 text-xl font-semibold text-white">
            {toprateslaes.items[6].title}
          </h2>
          <div>
            <h2 className=" absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md">
              {toprateslaes.items[6].price}
            </h2>
            <h4 className=" absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md">
              &#9733; {toprateslaes.items[6].rating}
            </h4>
            <img
              onClick={clickEvent}
              id="0M0x7"
              src="/images/cart.png"
              alt="cart icon"
              className=" absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer"
            />
            <button
              onClick={handleBuyNow}
              id="0M0x7"
              className="absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium "
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className=" group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-sky-700 to-blue-400 h-80 rounded-2xl flex justify-center shadow-lg shadow-sky-600">
          <Image
            src={toprateslaes.items[5].img}
            alt="green sneakers"
            className=" h-36 w-64 my-4 duration-700 group-hover:scale-105"
          />
          <h2 className=" absolute pt-48 text-xl font-semibold text-white">
            {toprateslaes.items[5].title}
          </h2>
          <div>
            <h2 className=" absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md">
              {toprateslaes.items[5].price}
            </h2>
            <h4 className=" absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md">
              &#9733; {toprateslaes.items[5].rating}
            </h4>
            <img
              onClick={clickEvent}
              id="0M0x6"
              src="/images/cart.png"
              alt="cart icon"
              className=" absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer"
            />
            <button
              onClick={handleBuyNow}
              id="0M0x6"
              className="absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium "
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className=" group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-red-950 to-red-600 h-80 rounded-2xl flex justify-center shadow-lg shadow-red-800">
          <Image
            src={toprateslaes.items[2].img}
            alt="green sneakers"
            className=" h-36 w-64 my-4 duration-700 group-hover:scale-105"
          />
          <h2 className=" absolute pt-48 text-xl font-semibold text-white">
            {toprateslaes.items[2].title}
          </h2>
          <div>
            <h2 className=" absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md">
              {toprateslaes.items[2].price}
            </h2>
            <h4 className=" absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md">
              &#9733; {toprateslaes.items[2].rating}
            </h4>
            <img
              onClick={clickEvent}
              id="0M0x3"
              src="/images/cart.png"
              alt="cart icon"
              className=" absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer"
            />
            <button
              onClick={handleBuyNow}
              id="0M0x3"
              className="absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium "
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className=" group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-cyan-400 to-blue-700 h-80 rounded-2xl flex justify-center shadow-lg shadow-cyan-700">
          <Image
            src={toprateslaes.items[0].img}
            alt="green sneakers"
            className=" h-36 w-64 my-4 duration-700 group-hover:scale-105"
          />
          <h2 className=" absolute pt-48 text-xl font-semibold text-white">
            {toprateslaes.items[0].title}
          </h2>
          <div>
            <h2 className=" absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md">
              {toprateslaes.items[0].price}
            </h2>
            <h4 className=" absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md">
              &#9733; {toprateslaes.items[0].rating}
            </h4>
            <img
              onClick={clickEvent}
              id="0M0x1"
              src="/images/cart.png"
              alt="cart icon"
              className=" absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer"
            />
            <button
              onClick={handleBuyNow}
              id="0M0x1"
              className="absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium "
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className=" group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-amber-700 to-yellow-600 h-80 rounded-2xl flex justify-center shadow-lg shadow-amber-700">
          <Image
            src={toprateslaes.items[3].img}
            alt="green sneakers"
            className=" h-36 w-64 my-4 duration-700 group-hover:scale-105"
          />
          <h2 className=" absolute pt-48 text-xl font-semibold text-white">
            {toprateslaes.items[3].title}
          </h2>
          <div>
            <h2 className=" absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md">
              {toprateslaes.items[3].price}
            </h2>
            <h4 className=" absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md">
              &#9733; {toprateslaes.items[3].rating}
            </h4>
            <img
              onClick={clickEvent}
              id="0M0x4"
              src="/images/cart.png"
              alt="cart icon"
              className=" absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer"
            />
            <button
              onClick={handleBuyNow}
              id="0M0x4"
              className="absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium "
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className=" group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-yellow-300 to-black h-80 rounded-2xl flex justify-center shadow-lg shadow-amber-700">
          <Image
            src={toprateslaes.items[4].img}
            alt="green sneakers"
            className=" h-36 w-64 my-4 duration-700 group-hover:scale-105"
          />
          <h2 className=" absolute pt-48 text-xl font-semibold text-white">
            {toprateslaes.items[4].title}
          </h2>
          <div>
            <h2 className=" absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md">
              {toprateslaes.items[4].price}
            </h2>
            <h4 className=" absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md">
              &#9733; {toprateslaes.items[4].rating}
            </h4>
            <img
              onClick={clickEvent}
              id="0M0x5"
              src="/images/cart.png"
              alt="cart icon"
              className=" absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer"
            />
            <button
              onClick={handleBuyNow}
              id="0M0x5"
              className="absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium "
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className=" group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-purple-400 to-slate-300 h-80 rounded-2xl flex justify-center shadow-lg shadow-purple-600">
          <Image
            src={toprateslaes.items[8].img}
            alt="green sneakers"
            className=" h-36 w-64 my-4 duration-700 group-hover:scale-105"
          />
          <h2 className=" absolute pt-48 text-xl font-semibold text-white">
            {toprateslaes.items[8].title}
          </h2>
          <div>
            <h2 className=" absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md">
              {toprateslaes.items[8].price}
            </h2>
            <h4 className=" absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md">
              &#9733; {toprateslaes.items[8].rating}
            </h4>
            <img
              onClick={clickEvent}
              id="0M0x9"
              src="/images/cart.png"
              alt="cart icon"
              className=" absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer"
            />
            <button
              onClick={handleBuyNow}
              id="0M0x9"
              className="absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium "
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className=" group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-orange-800 h-80 rounded-2xl flex justify-center shadow-lg shadow-orange-700">
          <Image
            src={toprateslaes.items[7].img}
            alt="green sneakers"
            className=" h-36 w-64 my-4 duration-700 group-hover:scale-105"
          />
          <h2 className=" absolute pt-48 text-xl font-semibold text-white">
            {toprateslaes.items[7].title}
          </h2>
          <div>
            <h2 className=" absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md">
              {toprateslaes.items[7].price}
            </h2>
            <h4 className=" absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md">
              &#9733; {toprateslaes.items[7].rating}
            </h4>
            <img
              onClick={clickEvent}
              id="0M0x8"
              src="/images/cart.png"
              alt="cart icon"
              className=" absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer"
            />
            <button
              onClick={handleBuyNow}
              id="0M0x8"
              className="absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium "
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className=" group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-slate-700 to-green-400 h-80 rounded-2xl flex justify-center shadow-lg shadow-green-800">
          <Image
            src={toprateslaes.items[9].img}
            alt="green sneakers"
            className=" h-36 w-64 my-4 duration-700 group-hover:scale-105"
          />
          <h2 className=" absolute pt-48 text-xl font-semibold text-white">
            {toprateslaes.items[9].title}
          </h2>
          <div>
            <h2 className=" absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md">
              {toprateslaes.items[9].price}
            </h2>
            <h4 className=" absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md">
              &#9733; {toprateslaes.items[9].rating}
            </h4>
            <img
              onClick={clickEvent}
              id="0M0x10"
              src="/images/cart.png"
              alt="cart icon"
              className=" absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer"
            />
            <button
              onClick={handleBuyNow}
              id="0M0x10"
              className="absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium "
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className=" group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-black to-slate-700 h-80 rounded-2xl flex justify-center shadow-lg shadow-slate-600">
          <Image
            src={toprateslaes.items[10].img}
            alt="green sneakers"
            className=" h-36 w-64 my-4 duration-700 group-hover:scale-105"
          />
          <h2 className=" absolute pt-48 text-xl font-semibold text-white">
            {toprateslaes.items[10].title}
          </h2>
          <div>
            <h2 className=" absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md">
              {toprateslaes.items[10].price}
            </h2>
            <h4 className=" absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md">
              &#9733; {toprateslaes.items[10].rating}
            </h4>
            <img
              onClick={clickEvent}
              id="0M0x11"
              src="/images/cart.png"
              alt="cart icon"
              className=" absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer"
            />
            <button
              onClick={handleBuyNow}
              id="0M0x11"
              className="absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium "
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className=" group transition-all ease-in-out duration-500 hover:scale-105 bg-gradient-to-b from-white to-blue-950 h-80 rounded-2xl flex justify-center shadow-lg shadow-blue-900">
          <Image
            src={toprateslaes.items[11].img}
            alt="green sneakers"
            className=" h-36 w-64 my-4 duration-700 group-hover:scale-105"
          />
          <h2 className=" absolute pt-48 text-xl font-semibold text-white">
            {toprateslaes.items[11].title}
          </h2>
          <div>
            <h2 className=" absolute mt-[234px] -ml-[177px] bg-white font-[poppins] font-semibold px-[2px] rounded-md">
              {toprateslaes.items[11].price}
            </h2>
            <h4 className=" absolute mt-[234px] -ml-[128px] text-white font-[poppins] font-semibold px-[2px] rounded-md">
              &#9733; {toprateslaes.items[11].rating}
            </h4>
            <img
              onClick={clickEvent}
              id="0M0x12"
              src="/images/cart.png"
              alt="cart icon"
              className=" absolute mt-[274px] h-7 -ml-[190px] bg-white font-[poppins] font-semibold px-[2px] rounded-md cursor-pointer"
            />
            <button
              onClick={handleBuyNow}
              id="0M0x12"
              className="absolute mt-[274px] -ml-[150px] text-black bg-white rounded-md py-[1px] px-[8px] font-medium "
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default TopSales;
