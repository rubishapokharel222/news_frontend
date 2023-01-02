import React from 'react'
import fashion1 from '../Images/fashion1.jpg'
import fashion2 from '../Images/fashion2.jpg'
import fashion3 from '../Images/fashion3.jpg'
import fashion4 from '../Images/fashion4.jpg'
import fashion5 from '../Images/fashion5.jpg'
import fashion6 from '../Images/fashion6.jpg'


function Fashion() {
  return (
    <div className='Fashion px-6 '>
    <div className='flex justify-between border-b-2 border-pink-500'>
         <button className="bg-pink-500 p-1.5 text-white text-sm ">
                  FASHION
                </button>
        <button className=" p-1.5 text-[#666666] border text-sm">
                 View all
            </button>
    </div>
    <div className='md:grid grid-cols-3 gap-7 my-3'>
    {/* image1 */}
        <div>
        <img src={fashion1} alt="" />
      <div className='my-3'> <a href="#"> <span className="  text-pink-500 text-sm hover:border-b-2 border-pink-500">
                  FASHION
                </span></a>
                <a href="#"><h1 className='text-2xl font-semibold hover:text-blue-700'>Everything you ever need to known <br /> about scarves</h1></a>
                  <span class="material-symbols-outlined text-sm text-[#666666]">
               library_books
                    </span>
                    <span className='text-sm text-[#666666]'>2 Min Read</span>
        </div>
        </div>
        {/* image2 */}
        <div>
        <img src={fashion2} alt="" />
      <div className='my-3'> <a href="#"> <span className="  text-pink-500 text-sm hover:border-b-2 border-pink-500">
                  FASHION
                </span></a>
                <a href="#"><h1 className='text-2xl font-semibold hover:text-blue-700'>The beginner’s guide to buying the <br /> right skirt</h1></a>
                  <span class="material-symbols-outlined text-sm text-[#666666]">
               library_books
                    </span>
                    <span className='text-sm text-[#666666]'>2 Min Read</span>
        </div>
        </div>
         {/* image3 */}
         <div>
        <img src={fashion3} alt="" />
      <div className='my-3'> <a href="#"> <span className="  text-pink-500 text-sm hover:border-b-2 border-pink-500">
                  FASHION
                </span></a>
                <a href="#"><h1 className='text-2xl font-semibold hover:text-blue-700'>How to make your accessories look <br /> like a million bucks</h1></a>
                  <span class="material-symbols-outlined text-sm text-[#666666]">
               library_books
                    </span>
                    <span className='text-sm text-[#666666]'>2 Min Read</span>
        </div>
        </div>
        {/* second row */}
          {/* image1 */}
          <div>
        <img src={fashion4} alt="" />
      <div className='my-3'> <a href="#"> <span className="  text-pink-500 text-sm hover:border-b-2 border-pink-500">
                  FASHION
                </span></a>
                <a href="#"><h1 className='text-2xl font-semibold hover:text-blue-700'>What the music industry can teach <br /> you about fashion</h1></a>
                  <span class="material-symbols-outlined text-sm text-[#666666]">
               library_books
                    </span>
                    <span className='text-sm text-[#666666]'>2 Min Read</span>
        </div>
        </div>
        {/* image2 */}
        <div>
        <img src={fashion5} alt="" />
      <div className='my-3'> <a href="#"> <span className="  text-pink-500 text-sm hover:border-b-2 border-pink-500">
                  FASHION
                </span></a>
                <a href="#"><h1 className='text-2xl font-semibold hover:text-blue-700'>Thinking about a new haircut? These 6 br styles will get you started</h1></a>
                  <span class="material-symbols-outlined text-sm text-[#666666]">
               library_books
                    </span>
                    <span className='text-sm text-[#666666]'>2 Min Read</span>
        </div>
        </div>
         {/* image3 */}
         <div>
        <img src={fashion6} alt="" />
      <div className='my-3'> <a href="#"> <span className="  text-pink-500 text-sm hover:border-b-2 border-pink-500">
                  FASHION
                </span></a>
                <a href="#"><h1 className='text-2xl font-semibold hover:text-blue-700'>How to make your accessories look <br /> like a million bucks</h1></a>
                  <span class="material-symbols-outlined text-sm text-[#666666]">
               library_books
                    </span>
                    <span className='text-sm text-[#666666]'>2 Min Read</span>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Fashion