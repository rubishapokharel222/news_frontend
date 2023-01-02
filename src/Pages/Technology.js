import React from 'react'
import tech1 from '../Images/tech1.jpg'
import tech2 from '../Images/tech2.jpg'
import tech3 from '../Images/tech3.jpg'
import tech4 from '../Images/tech4.jpg'
import tech6 from '../Images/tech6.jpg'
import banner from '../Images/banner2.jpg'

function Technology() {
  return (
    <div className="tech px-6 ">
      <div className="flex justify-between border-b-2 border-blue-500">
        <button className="bg-green-600 p-1.5 text-white text-sm ">
          TECHNOLOGY
        </button>
        <button className=" p-1.5 text-[#666666] border text-sm">
          View all
        </button>
      </div>
      <div className="md:grid grid-cols-3 gap-7 my-3">
        {/* image1 */}
        <div>
          <img src={tech1} alt="" className="w-full h-auto" />
          <div className="my-3">
            {' '}
            <a href="#">
              {' '}
              <span className="  text-blue-500 text-sm hover:border-b-2 border-blue-500">
                TECHNOLOGY
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
          <img src={tech2} alt="" className="w-full h-auto" />
          <div className="my-3">
            {' '}
            <a href="#">
              {' '}
              <span className="  text-blue-500 text-sm hover:border-b-2 border-blue-500">
                TECHNOLOGY
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
          <img src={tech3} alt="" className="w-full h-auto" />
          <div className="my-3">
            {' '}
            <a href="#">
              {' '}
              <span className="  text-blue-500 text-sm hover:border-b-2 border-blue-500">
                TECHNOLOGY
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
          <img src={tech4} alt="" className="w-full h-auto" />
          <div className="my-3">
            {' '}
            <a href="#">
              {' '}
              <span className="  text-blue-500 text-sm hover:border-b-2 border-blue-500">
                TECHNOLOGY
              </span>
            </a>
            <a href="#">
              <h1 className="text-2xl font-semibold hover:text-blue-700">
                What the music industry can teach <br /> you about tech
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
            className="w-full h-auto md:h-[225px]"
            src="https://www.youtube.com/embed/XsEMu5UCy0g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="my-3">
            {' '}
            <a href="#">
              {' '}
              <span className="  text-blue-500 text-sm hover:border-b-2 border-blue-500">
                TECHNOLOGY
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
          <img src={tech6} alt="" className="w-full h-auto" />
          <div className="my-3">
            {' '}
            <a href="#">
              {' '}
              <span className="  text-blue-500 text-sm hover:border-b-2 border-blue-500">
                TECHNOLOGY
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
      <a href="#">
        <img src={banner} alt="" className="md:m-auto my-3 mt-6 w-full" />
      </a>
    </div>
  )
}

export default Technology
