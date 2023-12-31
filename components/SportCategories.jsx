import React from 'react'

function SportCategories() {
  return (
    <div className=' pt-12'>
        <h1 className=' text-5xl text-center font-[poppins] font-bold'>SHOP BY SPORT</h1>

        <div className=' grid md:grid-cols-2 lg:grid-cols-3'>
            <div className=' mx-12'>
                <img 
                    src='/images/products/footballCover.webp'
                    alt='football img'
                    className=' rounded-2xl mt-12'
                />
                <h2 className=' text-lg font-semibold my-4 ml-2'>FootBall</h2>
            </div>

            <div className=' mx-12'>
                <img 
                    src='/images/products/basketBallCover.webp'
                    alt='basketBall img'
                    className=' rounded-2xl mt-10'
                />
                <h2 className=' text-lg font-semibold my-4 ml-2'>BasketBall</h2>
            </div>

            <div className=' mx-12'>
                <img 
                    src='/images/products/runningCover.webp'
                    alt='running img'
                    className=' rounded-2xl mt-10'
                />
                <h2 className=' text-lg font-semibold my-4 ml-2'>Running</h2>
            </div>
        </div>
    </div>
  )
}

export default SportCategories