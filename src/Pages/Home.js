import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import taboos from '../Images/taboos.jpg'
import dinner from '../Images/dinner.jpg'
import style from '../Images/style.jpg'
import children from '../Images/children.jpg'
import yoga from '../Images/yoga.jpg'
import Fashion from './Fashion'
import Travel from './Travel'
import Technology from './Technology'
import Articles from './Articles'
import banner3 from '../Images/banner3.jpg'

const Home = () => {
  return (
    <>
      <div className="mx-10 min-[450px]:mx-16 min-[600px]:mx-20 min-[690px]:mx-28 md:mx-0">
        <div className="categories m-0 min-[1360px]:m-6 border bg-gray-50  ">
          <div className="md:flex p-6 w-full ">
            <div className="md:w-1/4 w-full ">
              <Link to="travel/">
                {' '}
                <div className="relative text-white ">
                  <img
                    src={taboos}
                    alt=""
                    className="border border-white h-[250px] md:h-[200px] lg:h-[225px] w-full"
                    title="The top 10 traveling taboos you"
                  />
                  <div className="absolute bottom-4 left-5">
                    <span className="bg-green-600 p-1.5 text-white text-sm">
                      TRAVEL
                    </span>
                    <h1 className=" font-semibold  my-2">
                      The top 10 traveling taboos you <br /> should break
                    </h1>
                    <div className="flex">
                      <span class="material-symbols-outlined mr-3  text-sm">
                        quick_phrases
                      </span>
                      <h1 className=" text-sm">Add Comment</h1>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="what/">
                {' '}
                <div className="relative text-white">
                  <img
                    src={dinner}
                    alt=""
                    className="border border-white h-[250px] md:h-[200px] lg:h-[225px] w-full"
                    title="The top 10 traveling taboos you"
                  />
                  <div className="absolute bottom-4 left-5">
                    <span className="bg-yellow-500 p-1.5 text-white text-sm">
                      FOOD
                    </span>
                    <h1 className=" font-semibold  my-2">
                      The top 10 traveling taboos you <br /> should break
                    </h1>
                    <div className="flex">
                      <span class="material-symbols-outlined mr-3  text-sm">
                        quick_phrases
                      </span>
                      <h1 className=" text-sm">Add Comment</h1>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="md:w-2/4 w-full ">
              <Link to="what/">
                {' '}
                <div className="relative group ">
                  <img
                    src={style}
                    alt=""
                    className="border border-white h-[250px] md:h-[400px] lg:h-[450px] w-full inset-0 object-cover"
                    title="What do your friends really think"
                  />
                  <div className="absolute bottom-4 left-5">
                    <span className="bg-pink-500 p-1.5 text-white text-sm">
                      FASHION
                    </span>
                    <h1 className="md:text-2xl font-semibold text-white my-2">
                      What do your friends really think
                      <br /> about your style?
                    </h1>
                    <div className="flex">
                      <span class="material-symbols-outlined mr-3 text-white">
                        quick_phrases
                      </span>
                      <h1 className="text-white">Add Comment</h1>
                    </div>
                    <h1 className="text-white text-base hidden group-hover:block my-2 ">
                      Photo booth butcher authentic, quinoa gluten-free food
                      <br /> truck PBR scenester. Authentic pickled Cosby
                      sweater
                      <br /> farm-to-table, small batch distillery..
                    </h1>
                  </div>
                </div>
              </Link>
            </div>
            <div className="md:w-1/4 w-full">
              <Link to="what/">
                {' '}
                <div className="relative text-white">
                  <img
                    src={children}
                    alt=""
                    className="border border-white h-[250px] md:h-[200px] lg:h-[225px] w-full"
                    title="What do your friends really think"
                  />
                  <div className="absolute bottom-4 left-5">
                    <span className="bg-amber-700 p-1.5 text-white text-sm">
                      MOVIES
                    </span>
                    <h1 className=" font-semibold  my-2">
                      The top 10 traveling taboos you <br /> should break
                    </h1>
                    <div className="flex">
                      <span class="material-symbols-outlined mr-3  text-sm">
                        quick_phrases
                      </span>
                      <h1 className=" text-sm">Add Comment</h1>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="what/">
                {' '}
                <div className="relative text-white">
                  <img
                    src={yoga}
                    alt=""
                    className="border border-white h-[250px] md:h-[200px] lg:h-[225px] w-full"
                    title="What do your friends really think"
                  />
                  <div className="absolute bottom-4 left-5">
                    <span className="bg-red-600 p-1.5 text-white text-sm">
                      SPORTS
                    </span>
                    <h1 className=" font-semibold  my-2">
                      The top 10 traveling taboos you <br /> should break
                    </h1>
                    <div className="flex">
                      <span class="material-symbols-outlined mr-3  text-sm">
                        quick_phrases
                      </span>
                      <h1 className=" text-sm">Add Comment</h1>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <Fashion />
          <Travel />
          <Technology />
          <Articles />
        </div>
      </div>
      <img src={banner3} alt="" className="m-auto" />
    </>
  )
}

export default Home
