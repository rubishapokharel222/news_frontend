import React from 'react'
import style1 from '../Images/style1.jpg'
import ad from '../Images/ad.jpg'
import fashion1 from '../Images/fashion1.jpg'
import fashion2 from '../Images/fashion2.jpg'
import fashion3 from '../Images/fashion3.jpg'
import fashion4 from '../Images/fashion4.jpg'
import fashion5 from '../Images/fashion5.jpg'
import fashion6 from '../Images/fashion6.jpg'
import { faker } from '@faker-js/faker'
import banner from '../Images/banner2.jpg'
import travel from '../Images/travel1.jpg'
import travel1 from '../Images/travel1.jpg'
import travel2 from '../Images/travel2.jpg'
import travel3 from '../Images/travel3.jpg'
import travel4 from '../Images/travel4.jpg'
import travel6 from '../Images/travel6.jpg'
import { Link } from 'react-router-dom'

function Travelcategory2() {
  return (
    <>
      <div className="flex mx-8 space-x-7 my-8">
        <div className="w-3/4">
          <div className=" border-b-2 border-green-600 ">
            <button className="bg-green-600 p-1.5 text-white text-sm ">
              TRAVEL
            </button>
          </div>

          <div className="md:grid grid-cols-2 gap-2 my-14 mx-9">
            {/* image1 */}
            <div className="flex space-x-4">
              <img src={travel1} alt="" className="w-48 h-32" />
              <div className="my-3">
                {' '}
                <a href="#">
                  {' '}
                  <span className="  text-green-600 text-sm hover:border-b-2 border-green-600">
                    TRAVEL
                  </span>
                </a>
                <a href="#">
                  <h1 className="text-lg font-semibold hover:text-blue-700">
                    Everything you ever need to known about scarves
                  </h1>
                </a>
                <span class="material-symbols-outlined text-sm text-[#666666]">
                  library_books
                </span>
                <span className="text-sm text-[#666666]">2 Min Read</span>
              </div>
            </div>
            {/* image2 */}
            <div className="flex space-x-4">
              <img src={travel2} alt="" className="w-48 h-32" />
              <div className="my-3">
                {' '}
                <a href="#">
                  {' '}
                  <span className="  text-green-600 text-sm hover:border-b-2 border-green-600">
                    TRAVEL
                  </span>
                </a>
                <a href="#">
                  <h1 className="text-lg font-semibold hover:text-blue-700">
                    Everything you ever need to known about scarves
                  </h1>
                </a>
                <span class="material-symbols-outlined text-sm text-[#666666]">
                  library_books
                </span>
                <span className="text-sm text-[#666666]">2 Min Read</span>
              </div>
            </div>
          
          </div>
          <div className="text-center">
            {' '}
            <Link to="/travel">
              <button className="bg-blue-600 py-1 px-3">1</button>
            </Link>
            <Link to="/trave2">
              <button className="bg-blue-600 py-1 px-3 ml-3">2</button>
            </Link>
            <Link to="/travel">
              <button className="bg-blue-600 py-1 px-10 float-left">
                PREVIOUS
              </button>
            </Link>
          </div>
        </div>

        <div className="w-1/4 mt-4">
          <div className=" border-b-2 border-black">
            {' '}
            <span className="bg-black text-white font-semibold p-1 px-3">
              All Topics
            </span>
          </div>
          <ul className="mt-5">
            <a href="">
              {' '}
              <li>
                <span className="bg-blue-800 text-white py-1 px-2 mr-3">5</span>
                Celebrities
              </li>
            </a>
            <a href="">
              {' '}
              <li className="mt-4">
                <span className="bg-blue-800 text-white py-1 px-2 mr-3">5</span>
                Celebrities
              </li>
            </a>
            <a href="">
              {' '}
              <li className="mt-4">
                <span className="bg-red-700 text-white py-1 px-2 mr-3">7</span>
                Entertainment
              </li>
            </a>
            <a href="">
              {' '}
              <li className="mt-4">
                <span className="bg-orange-400 text-white py-1 px-2 mr-3">
                  7
                </span>
                Fashion
              </li>
            </a>
            <a href="">
              {' '}
              <li className="mt-4">
                <span className="bg-yellow-700 text-white py-1 px-2 mr-3">
                  1
                </span>
                Food
              </li>
            </a>
            <a href="">
              {' '}
              <li className="mt-4">
                <span className="bg-green-800 text-white py-1 px-2 mr-3">
                  5
                </span>
                Celebrities
              </li>
            </a>
            <a href="">
              {' '}
              <li className="mt-4">
                <span className="bg-fuchsia-600 text-white py-1 px-2 mr-3">
                  3
                </span>
                Celebrities
              </li>
            </a>
            <a href="">
              {' '}
              <li className="mt-4">
                <span className="bg-indigo-900 text-white py-1 px-2 mr-3">
                  2
                </span>
                Celebrities
              </li>
            </a>
            <a href="">
              {' '}
              <li className="mt-4">
                <span className="bg-green-500 text-white py-1 px-2 mr-3">
                  1
                </span>
                Celebrities
              </li>
            </a>
          </ul>

          {/* featured */}
          <div className=" border-b-2 border-black mt-8 mb-5">
            {' '}
            <span className="bg-black text-white font-semibold p-1 px-3">
              Featured
            </span>
          </div>

          <div className="">
            {/* image1 */}
            <div className="flex">
              <img src={fashion1} alt="" className="w-20 h-14" />
              <div className="mb-3 ml-2">
                {' '}
                <a href="#">
                  {' '}
                  <span className="  text-pink-500 text-sm hover:border-b-2 border-pink-500">
                    FASHION
                  </span>
                </a>
                <a href="#">
                  <h1 className="text-sm  hover:text-blue-700">
                    Everything you ever need to known about scarves
                  </h1>
                </a>
              </div>
            </div>
            {/* image2 */}
            <div className="flex mt-2">
              <img src={fashion2} alt="" className="w-20 h-14" />
              <div className="mb-3 ml-2">
                {' '}
                <a href="#">
                  {' '}
                  <span className="  text-pink-500 text-sm hover:border-b-2 border-pink-500">
                    FASHION
                  </span>
                </a>
                <a href="#">
                  <h1 className="text-sm  hover:text-blue-700">
                    Everything you ever need to known about scarves
                  </h1>
                </a>
              </div>
            </div>
            {/* image3 */}
            <div className="flex mt-2">
              <img src={fashion3} alt="" className="w-20 h-14" />
              <div className="mb-3 ml-2">
                {' '}
                <a href="#">
                  {' '}
                  <span className="  text-pink-500 text-sm hover:border-b-2 border-pink-500">
                    FASHION
                  </span>
                </a>
                <a href="#">
                  <h1 className="text-sm  hover:text-blue-700">
                    Everything you ever need to known about scarves
                  </h1>
                </a>
              </div>
            </div>
            {/* second row */}
            {/* image1 */}
            <div className="flex mt-2">
              <img src={fashion4} alt="" className="w-20 h-14" />
              <div className="mb-3 ml-2">
                {' '}
                <a href="#">
                  {' '}
                  <span className="  text-pink-500 text-sm hover:border-b-2 border-pink-500">
                    FASHION
                  </span>
                </a>
                <a href="#">
                  <h1 className="text-sm  hover:text-blue-700">
                    Everything you ever need to known about scarves
                  </h1>
                </a>
              </div>
            </div>
            {/* image2 */}
            <div className="flex mt-2">
              <img src={fashion5} alt="" className="w-20 h-14" />
              <div className="mb-3 ml-2">
                {' '}
                <a href="#">
                  {' '}
                  <span className="  text-pink-500 text-sm hover:border-b-2 border-pink-500">
                    FASHION
                  </span>
                </a>
                <a href="#">
                  <h1 className="text-sm  hover:text-blue-700">
                    Everything you ever need to known about scarves
                  </h1>
                </a>
              </div>
            </div>
            {/* image3 */}
            <div className="flex mt-2">
              <img src={fashion6} alt="" className="w-20 h-14" />
              <div className="mb-3 ml-2">
                {' '}
                <a href="#">
                  {' '}
                  <span className="  text-pink-500 text-sm hover:border-b-2 border-pink-500">
                    FASHION
                  </span>
                </a>
                <a href="#">
                  <h1 className="text-sm  hover:text-blue-700">
                    Everything you ever need to known about scarves
                  </h1>
                </a>
              </div>
            </div>
          </div>
          <div className="my-10 sticky top-0 pt-8 ">
            <div className="">
              <a href="#">
                <img src={ad} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={banner} alt="" className="m-auto" />
      </div>
    </>
  )
}

export default Travelcategory2
