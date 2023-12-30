import React from 'react'

function Navbar() {
  return (
    <div className=' flex bg-red-600 sticky top-0 justify-evenly font-[poppins] gap-4 lg:justify-between lg:px-12 z-50'>
        <img 
            src='/images/nike-logo.png'
            alt='nike logo'
            className=' w-20 h-14 pb-1 lg:w-28'
        />
        <div className=' flex gap-4 pt-3 font-medium text-white lg:gap-8'>
            <h2 className='nav cursor-pointer lg:text-xl'>MEN</h2>
            <h2 className='nav cursor-pointer lg:text-xl'>WOMEN</h2>
            <h2 className='nav cursor-pointer lg:text-xl'>KIDS</h2>
            <h2 className='nav cursor-pointer lg:text-xl'>COLLECTION</h2>
        </div>
        <div className=' flex gap-2'>
            <img 
                src='/images/shoppingBag.png'
                alt='shoppingBag icon'
                className=' w-10 h-10 pt-2 lg:size-12'
            />
            <img 
                src='/images/menuIcon.png'
                alt='menu icon'
                className=' w-8 h-8 pt-2 mt-1 lg:size-10'
            />
        </div>
    </div>
  )
}

export default Navbar