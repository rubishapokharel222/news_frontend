import React from 'react'
import Logo from '../Images/logo.png'
import banner from '../Images/banner.jpg'
import { Link } from 'react-router-dom'

function Topnav() {
  const currdate = new Date().toDateString()
  return (
    <>
      <div className="block min-[1250px]:hidden bg-blue-600 ">
        <div className="flex justify-between mx-5">
          <div>
            <span class="material-symbols-outlined text-white text-5xl py-7">
              menu
            </span>
          </div>

          <div className="logo py-7 ">
            <img src={Logo} alt="" />
          </div>

          <div>
            <span class="material-symbols-outlined text-white text-5xl py-7">
              search
            </span>
          </div>
        </div>
      </div>

      <div className="hidden min-[1250px]:block">
        <div className="topnav bg-black ">
          <div className="topnav_content mx-6 py-3 text-sm text-gray-400 flex flex-wrap justify-between">
            <div className="first_content ">
              <ul className=" flex flex-wrap space-x-5 ">
                <a href="#">
                  <li className="hover:text-white">Layouts</li>
                </a>
                <a href="#">
                  <li className="hover:text-white">Styleguide</li>
                </a>
                <a href="#">
                  {' '}
                  <li className="hover:text-white">Contact</li>
                </a>
                <a href="#">
                  {' '}
                  <li className="hover:text-white">Shop</li>
                </a>
                <a href="#">
                  {' '}
                  <li className="hover:text-white">Forum</li>
                </a>
              </ul>
            </div>
            <div className="date flex">
              <span class="material-symbols-outlined text-base pr-2">
                calendar_month
              </span>
              <h1 className="text-base">{currdate}</h1>
            </div>
          </div>
        </div>

        {/* logo and banner*/}
        <div className="bg-blue-600">
          <div className="logo and banner  flex justify-between mx-6">
            <div className="logo py-7 ">
              <img src={Logo} alt="" />
            </div>

            <div className="banner py-4">
              <a href="#">
                <img src={banner} alt="" />
              </a>
            </div>
          </div>
        </div>

        {/* navbar */}

        <nav className="bg-blue-500 flex justify-between px-6 ">
          <div className="navbar flex  ">
            <div className=" home relative ">
              <Link to="/">
                <button class="peer px-5 py-2 b hover:bg-white text-white hover:text-black text-sm font-semibold ">
                  HOME
                  <span class="material-symbols-outlined text-sm">
                    arrow_drop_down
                  </span>
                </button>
              </Link>
              <div
                class="hidden peer-hover:flex hover:flex absolute top-9
         w-[200px]
         flex-col bg-white drop-shadow-lg"
              >
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  eg.1
                </a>
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  eg.2
                </a>
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  eg.3
                </a>
              </div>
            </div>
            {/* module */}
            <div className=" module relative">
              <button class="peer px-5 py-2 b hover:bg-white text-white hover:text-black text-sm font-semibold ">
                MODULES
                <span class="material-symbols-outlined text-sm">
                  arrow_drop_down
                </span>
              </button>
              <div
                class="hidden peer-hover:flex hover:flex absolute top-9
         w-[200px]
         flex-col bg-white drop-shadow-lg"
              >
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  eg.1
                </a>
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  eg.2
                </a>
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  eg.3
                </a>
              </div>
            </div>

            {/* posts */}
            <div className=" posts relative">
              <button class="peer px-5 py-2 b hover:bg-white text-white hover:text-black text-sm font-semibold ">
                POSTS
                <span class="material-symbols-outlined text-sm">
                  arrow_drop_down
                </span>
              </button>
              <div
                class="hidden peer-hover:flex hover:flex absolute top-9
         w-[200px]
         flex-col bg-white drop-shadow-lg"
              >
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  eg.1
                </a>
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  eg.2
                </a>
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  eg.3
                </a>
              </div>
            </div>

            {/* archives */}
            <div className=" archives relative">
              <button class="peer px-5 py-2 b hover:bg-white text-white hover:text-black text-sm font-semibold ">
                ARCHIVES
                <span class="material-symbols-outlined text-sm">
                  arrow_drop_down
                </span>
              </button>
              <div
                class="hidden peer-hover:flex hover:flex absolute top-9
         w-[200px]
         flex-col bg-white drop-shadow-lg"
              >
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  eg.1
                </a>
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  eg.2
                </a>
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  eg.3
                </a>
              </div>
            </div>

            {/* PAGES */}
            <div className=" pages relative">
              <button class="peer px-5 py-2 b hover:bg-white text-white hover:text-black text-sm font-semibold ">
                PAGES
                <span class="material-symbols-outlined text-sm">
                  arrow_drop_down
                </span>
              </button>
              <div
                class="hidden peer-hover:flex hover:flex absolute top-9
         w-[200px]
         flex-col bg-white drop-shadow-lg"
              >
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  eg.1
                </a>
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  eg.2
                </a>
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  eg.3
                </a>
              </div>
            </div>

            {/* features */}
            <div className=" features relative">
              <button class="peer px-5 py-2 b hover:bg-white text-white hover:text-black text-sm font-semibold ">
                FEATURES
                <span class="material-symbols-outlined text-sm">
                  arrow_drop_down
                </span>
              </button>
              <div
                class="hidden peer-hover:flex hover:flex absolute top-9
         w-[200px]
         flex-col bg-white drop-shadow-lg"
              >
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  eg.1
                </a>
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  eg.2
                </a>
                <a class="px-5 py-3 hover:bg-gray-200" href="#">
                  eg.3
                </a>
              </div>
            </div>

            {/* contact */}
            <div className=" contact relative">
              <Link to="/contact">
                {' '}
                <button class="peer px-5 py-2 b hover:bg-white text-white hover:text-black text-sm font-semibold h-full ">
                  CONTACT
                </button>
              </Link>
            </div>
            <div>
              <a href="/search">
                <span class="material-symbols-outlined font-bold pt-2 text-white hover:bg-white hover:text-black h-full">
                  search
                </span>
              </a>
            </div>
          </div>
          {/* socialmedia */}
          <div className="socialmedia text-white py-2 space-x-2 mr-10">
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              {' '}
              <i class="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="#">
              {' '}
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-vk"></i>
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Topnav
