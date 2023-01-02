import React from 'react'
import travel1 from '../Images/travel1.jpg'
import travel2 from '../Images/travel2.jpg'
import travel3 from '../Images/travel3.jpg'
import travel4 from '../Images/travel4.jpg'
import travel6 from '../Images/travel6.jpg'

function Travel() {
  return (
    <div className="travel px-6 ">
      <div className="flex justify-between border-b-2 border-green-600">
        <button className="bg-green-600 p-1.5 text-white text-sm ">
          TRAVEL
        </button>
        <button className=" p-1.5 text-[#666666] border text-sm">
          View all
        </button>
      </div>
      <div className="md:grid grid-cols-3 gap-7 my-3">
        {/* image1 */}
        <div>
          <img src={travel1} alt="" className="w-full h-auto" />
          <div className="my-3">
            {' '}
            <a href="#">
              {' '}
              <span className="  text-green-600 text-sm hover:border-b-2 border-green-600">
                TRAVEL
              </span>
            </a>
            <a href="#">
              <h1 className="text-2xl font-semibold hover:text-blue-700">
                Everything you ever need to known <br /> about scarves
              </h1>
            </a>
            <span class="material-symbols-outlined text-sm text-[#666666]">
              library_books
            </span>
            <span className="text-sm text-[#666666]">2 Min Read</span>
          </div>
        </div>
        {/* image2 */}
        <div>
          <img src={travel2} alt="" className="w-full h-auto" />
          <div className="my-3">
            {' '}
            <a href="#">
              {' '}
              <span className="  text-green-600 text-sm hover:border-b-2 border-green-600">
                TRAVEL
              </span>
            </a>
            <a href="#">
              <h1 className="text-2xl font-semibold hover:text-blue-700">
                The beginner’s guide to buying the <br /> right skirt
              </h1>
            </a>
            <span class="material-symbols-outlined text-sm text-[#666666]">
              library_books
            </span>
            <span className="text-sm text-[#666666]">2 Min Read</span>
          </div>
        </div>
        {/* image3 */}
        <div>
          <img src={travel3} alt="" className="w-full h-auto" />
          <div className="my-3">
            {' '}
            <a href="#">
              {' '}
              <span className="  text-green-600 text-sm hover:border-b-2 border-green-600">
                TRAVEL
              </span>
            </a>
            <a href="#">
              <h1 className="text-2xl font-semibold hover:text-blue-700">
                How to make your accessories look <br /> like a million bucks
              </h1>
            </a>
            <span class="material-symbols-outlined text-sm text-[#666666]">
              library_books
            </span>
            <span className="text-sm text-[#666666]">2 Min Read</span>
          </div>
        </div>
        {/* second row */}
        {/* image1 */}
        <div>
          <img src={travel4} alt="" className="w-full h-auto" />
          <div className="my-3">
            {' '}
            <a href="#">
              {' '}
              <span className="  text-green-600 text-sm hover:border-b-2 border-green-600">
                TRAVEL
              </span>
            </a>
            <a href="#">
              <h1 className="text-2xl font-semibold hover:text-blue-700">
                What the music industry can teach <br /> you about TRAVEL
              </h1>
            </a>
            <span class="material-symbols-outlined text-sm text-[#666666]">
              library_books
            </span>
            <span className="text-sm text-[#666666]">2 Min Read</span>
          </div>
        </div>
        {/* image2 */}
        <div>
          <iframe
            src="https://www.youtube.com/embed/XsEMu5UCy0g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="w-full h-auto md:h-[225px]"
          ></iframe>
          <div className="my-3">
            {' '}
            <a href="#">
              {' '}
              <span className="  text-green-600 text-sm hover:border-b-2 border-green-600">
                TRAVEL
              </span>
            </a>
            <a href="#">
              <h1 className="text-2xl font-semibold hover:text-blue-700">
                Thinking about a new haircut? These 6 styles will get you
                started
              </h1>
            </a>
            <span class="material-symbols-outlined text-sm text-[#666666]">
              library_books
            </span>
            <span className="text-sm text-[#666666]">2 Min Read</span>
          </div>
        </div>
        {/* image3 */}
        <div>
          <img src={travel6} alt="" className="w-full h-auto" />
          <div className="my-3">
            {' '}
            <a href="#">
              {' '}
              <span className="  text-green-600 text-sm hover:border-b-2 border-green-600">
                TRAVEL
              </span>
            </a>
            <a href="#">
              <h1 className="text-2xl font-semibold hover:text-blue-700">
                5 ways you can use your hairstyle to <br /> become irresistible
              </h1>
            </a>
            <span class="material-symbols-outlined text-sm text-[#666666]">
              library_books
            </span>
            <span className="text-sm text-[#666666]">2 Min Read</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Travel
