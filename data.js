import heroProduct1 from './public/images/products/heroProduct-1.png';
import heroProduct2 from './public/images/products/heroProduct-2.png';

import psale1 from './public/images/products/popular-1.png'
import psale2 from './public/images/products/popular-2.png'
import psale3 from './public/images/products/popular-3.png'

import product1 from "./public/images/products/product1.png";
import product2 from "./public/images/products/product2.png";
import product3 from "./public/images/products/product3.png";
import product4 from "./public/images/products/product4.png";
import product5 from "./public/images/products/product5.png";
import product6 from "./public/images/products/product6.png";
import product7 from "./public/images/products/product7.png";
import product8 from "./public/images/products/product8.png";
import product9 from "./public/images/products/product9.png";
import product10 from "./public/images/products/product10.png";
import product11 from "./public/images/products/product11.png";
import product12 from "./public/images/products/product12.png";


const heroproducts = [
  {
    img: heroProduct1,
    title: 'Nike Air Triple Volt',
    price: '$200'
  },
  {
    img: heroProduct2,
    title: 'Nike Air Max 90',
    price: '$250'
  }
]

const popularsales = {
  title: "Popular Sales",
  items: [
    {
      id: "0p0x1",
      title: "Nike Addapt BB 2.0",
      text: "Running Shoes",
      rating: "4.9",
      btn: "Buy Now",
      img: psale2,
      price: "200",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Nike Martine Rose",
      text: "Running Shoes",
      rating: "4.5",
      btn: "Buy Now",
      img: psale3,
      price: "250",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Nike Smart Shoe 2.0",
      text: "Running Shoes",
      rating: "5.0",
      btn: "Buy Now",
      img: psale1,
      price: "150",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};


const toprateslaes = {
  title: "Top Rated Sales",
  items: [
    {
      id: "0M0x1",
      title: "Nike Air Low Premium",
      text: "Running Shoes",
      rating: "5.0",
      btn: "Buy Now",
      img: product7,
      price: "150",
      color: "from-cyan-400 to-blue-700",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Nike Air Force Green",
      text: "Running Shoes",
      rating: "5.0",
      btn: "Buy Now",
      img: product2,
      price: "200",
      color: "from-emerald-500 to-green-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Nike Addapt BB Rose",
      text: "Running Shoes",
      rating: "5.0",
      btn: "Buy Now",
      img: product3,
      price: "250",
      color: "from-red-950 to-red-600",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Nike Air Premium",
      text: "Running Shoes",
      rating: "5.0",
      btn: "Buy Now",
      img: product4,
      price: "150",
      color: "from-amber-700 to-yellow-600",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Nike Adapt BB Pro",
      text: "Running Shoes",
      rating: "5.0",
      btn: "Buy Now",
      img: product5,
      price: "250",
      color: "from-yellow-300 to-black",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "Air Jordan PR3",
      text: "Running Shoes",
      rating: "5.0",
      btn: "Buy Now",
      img: product6,
      price: "200",
      color: "from-sky-700 to-blue-400",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Nike Multi Smart Shoe",
      text: "Running Shoes",
      rating: "5.0",
      btn: "Buy Now",
      img: product1,
      price: "150",
      color: "from-orange-400 to-yellow-400",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "Nike Jordan Air Max",
      text: "Running Shoes",
      rating: "5.0",
      btn: "Buy Now",
      img: product9,
      price: "175",
      color: "from-orange-800",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "Nike Old Max-x",
      text: "Running Shoes",
      rating: "5.0",
      btn: "Buy Now",
      img: product10,
      price: "150",
      color: "from-purple-400 to-slate-300",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "Nike Lime Jordan 11",
      text: "Running Shoes",
      rating: "5.0",
      btn: "Buy Now",
      img: product12,
      price: "200",
      color: "from-slate-700 to-green-400",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "Nike Air Black Max",
      text: "Running Shoes",
      rating: "5.0",
      btn: "Buy Now",
      img: product11,
      price: "250",
      color: "from-black to-slate-700",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Nike Zoom Max",
      text: "Running Shoes",
      rating: "5.0",
      btn: "Buy Now",
      img: product8,
      price: "150",
      color: "from-white to-blue-950",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};

export {toprateslaes, popularsales, heroproducts };
