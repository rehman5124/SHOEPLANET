import React from 'react'

function Featured() {
  return (
    <div className=' mb-12 block lg:flex lg:mx-20'>
        <div className=' text-center lg:text-start md:mx-14'>
            <h1 className=' font-[poppins] font-bold text-3xl pt-8 pl-0 text-blue-600 lg:text-4xl'>FEATURED</h1>
            <h1 className=' font-[poppins] font-bold text-3xl pl-0 lg:text-5xl'>NIKE SNEAKERS AIR</h1>
            <h1 className=' font-[poppins] font-bold text-3xl pl-0 pb-8 lg:text-5xl '>LANCING SHOES</h1>
            <p className='font-[poppins] font-medium pb-4 pl-0 lg:w-[500px]'>The radiance lives on Nike Sneakers Air Lancing Shoes, the <br className=' xm:hidden sm:hidden'/> 
            basket ball OG that puts a fresh spin on what you know best: <br className=' xm:hidden sm:hidden'/>
            durably stitched overlays, clean finishes and the perfect <br className=' xm:hidden sm:hidden'/>
            amount of flash to make you shine.</p>
            <button className='font-[poppins] font-medium ml-0 bg-black text-white p-2 rounded-lg'>Explore More</button>
        </div>
        <img 
            src='/images/products/sneaker.png'
            alt='sneaker.png'
            className=' h-40 mx-auto mt-16 duration-700 hover:scale-110 md:h-48 lg:h-64 lg:mx-0 lg:ml-auto'
        />
    </div>
  )
}

export default Featured