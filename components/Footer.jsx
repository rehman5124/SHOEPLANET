import React from 'react'

function Footer() {
  return (
    <div className=' bg-gradient-to-b from-rose-500 to-red-500 text-white'>
        <div className=' flex justify-center gap-40 pt-8 pb-10 mt-12'>
            <div className=' hidden md:block'>
                <h1 className=' text-lg font-bold'>ABOUT NIKE</h1>
                <h4>News</h4>
                <h4>Career</h4>
                <h4>Investor</h4>
                <h4>Purpose</h4>
                <h4>Sustainability</h4>
            </div>
            <div className=' hidden md:block'>
                <h1 className=' text-lg font-bold'>GET HELP</h1>
                <h4>Order Status</h4>
                <h4>Shipping & Delivery</h4>
                <h4>Payment Options</h4>
                <h4>Gift Card Balance</h4>
                <h4>Blog</h4>
                <h4>FAQ</h4>
                <h4>Contact Us</h4>
            </div>
            <div className=' hidden md:block'>
                <h1 className=' text-lg font-bold'>COMPANY</h1>
                <h4>Gift Cards</h4>
                <h4>Promotions</h4>
                <h4>Find A Store</h4>
                <h4>Signup</h4>
                <h4>Nike Jouneral</h4>
                <h4>Send Us Feeback</h4>
            </div>
        </div>

        <div className=' mr-24 sm:mr-44 text-center pb-4'>
            <h2 className=' relative right-0 '>Copyright© <b>All Rights Reserved 2023 </b> </h2>
        </div>
    </div>
  )
}

export default Footer