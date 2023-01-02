import React from 'react'
import banner from '../Images/banner2.jpg'

function Contact() {
  return (
    <div className='mx-24 my-10'>
        <h1 className='text-4xl font-bold'>Contact</h1>
        <h1 className='py-6 text-xl'> <span className='font-bold'> This is an example of a contact page with full support for the WP Forms WordPress plugin.</span>  Please use <span className='text-blue-600'> our official <br /> contact page</span> if you have any pre-sale questions. We would love to hear from you!</h1>
      <form action="">
        <h1 className='pt-5 text-lg text-[#444444]'>Your Name *</h1>
        <input type="text" className='border-2 px-80 py-2'  />
        <h1 className='pt-5 text-lg text-[#444444]'>Your Email *</h1>
        <input type="email" className='border-2 px-80 py-2'  />
        <h1 className='pt-5 text-lg text-[#444444]'>Your Message *</h1>
        <textarea name="" id="" cols="110" rows="5" className='border-2 '></textarea> <br />
        <button className='bg-blue-500 py-2 px-5 my-2'>Submit</button>
      </form>
    <div><img src={banner} alt="" className='m-auto' /></div>

    </div>
  )
}

export default Contact