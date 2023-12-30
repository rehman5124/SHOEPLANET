import React from 'react'

function Highlights() {
  return (
    <div className=' lg:mt-20 lg:mx-36'>
        <div className=' md:mx-12 lg:flex lg:gap-20'>
            <img 
                src='/images/products/highlights-1.png'
                alt='hightlight-1'
                className=' w-64 mx-auto mt-20 mb-8 lg:w-[28rem] lg:mx-0 lg:mt-4 hover:scale-105 duration-500'
            />
            <div className=' text-center lg:text-start lg:w-[500px]'>
                <p1 className=' text-yellow-500 font-[poppins] text-4xl font-bold'>HIGHLIGHTS</p1> <br/>
                <p1 className=' text-5xl font-[poppins] font-bold'>NIKE AIR WITH</p1> <br/>
                <p1 className='text-5xl font-[poppins] font-bold mb-4 '>LIMITLESS CHOICES</p1> <br/>
                <p2 className=' text-base font-[poppins]'>Our Purpose is to move the world forward. We take action by</p2> <br className=' xm:hidden sm:hidden'/>
                <p2 className=' text-base font-[poppins]'>building community, protecting our planet and increasing</p2> <br className=' xm:hidden sm:hidden'/>
                <p2 className=' text-base font-[poppins] '>access to sport.</p2> <br />
                <button className='bg-black p-2 text-yellow-500 font-[poppins] rounded-xl mt-2'>Explore More</button>
            </div>
        </div>

        <div className=' md:mx-12 lg:flex lg:gap-20 lg:mt-20'>
           
            <div className=' text-center lg:text-start lg:w-[500px] sm:mt-16 md:mt-16 lg:mt-0'>
                <p1 className=' text-blue-500 font-[poppins] text-4xl font-bold'>HIGHLIGHTS</p1> <br/>
                <p1 className=' text-5xl font-[poppins] font-bold'>NIKE ADAPT 2.0</p1> <br/>
                <p1 className='text-5xl font-[poppins] font-bold mb-4 '>LIMITLESS CHOICES</p1> <br/>
                <p2 className=' text-base font-[poppins]'>Our Purpose is to move the world forward. We take action by</p2> <br className=' xm:hidden sm:hidden'/>
                <p2 className=' text-base font-[poppins]'>building community, protecting our planet and increasing</p2> <br className=' xm:hidden sm:hidden'/>
                <p2 className=' text-base font-[poppins] '>access to sport.</p2> <br />
                <button className='bg-black p-2 text-blue-500 font-[poppins] rounded-xl mt-2'>Explore More</button>
            </div>
            <img 
                src='/images/products/highlights-2.png'
                alt='hightlight-1'
                className=' w-64 mx-auto mt-8 mb-8 lg:w-[28rem] lg:mx-0 lg:mt-4 hover:scale-105 duration-500'
            />
        </div>
    </div>
  )
}

export default Highlights