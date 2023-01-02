import React from 'react'
import logo from '../Images/logo.png'
import blueberry from '../Images/blueberry.jpg'

function Footer() {
  return (
    <div className="bg-[#231F20] my-4">
      <div className="grid grid-cols-1 md:grid-cols-2 min-[1250px]:grid-cols-4  py-6 gap-7 mx-6 min-[420px]:mx-16 min-[520px]:mx-24 min-[620px]:mx-36 min-[700px]:mx-44  md:mx-10">
        <div>
          <img src={logo} alt="" />
          <h1 className="text-white py-3 pb-7">
            Herald is the next generation WordPress magazine theme, featuring a
            fully flexible header with 3 customizable areas and an easy-to-use
            module builder for unlimited layout combinations
          </h1>
          <span className="bg-blue-600 text-white p-2 ">Find Out More</span>
        </div>
        <div className="">
          <h1 className="text-white font-semibold text-lg border-b-2 border-gray-300">
            Most Popular
          </h1>
          <div className="flex pt-4">
            <div className="">
              {' '}
              <img src={blueberry} alt="" className=" h-12 w-24" />
            </div>
            <a href="#">
              {' '}
              <div className="text-sm pl-1 pr-5 text-white hover:text-blue-600">
                Grandma’s secret blueberry pie recipe revealed!
              </div>
            </a>
          </div>
          <div className="flex pt-4">
            <div className="">
              {' '}
              <img src={blueberry} alt="" className=" h-12 w-24" />
            </div>
            <a href="#">
              {' '}
              <div className="text-sm pl-1 pr-5 text-white hover:text-blue-600">
                Grandma’s secret blueberry pie recipe revealed!
              </div>
            </a>
          </div>
          <div className="flex pt-4">
            <div className="">
              {' '}
              <img src={blueberry} alt="" className=" h-12 w-24" />
            </div>
            <a href="#">
              {' '}
              <div className="text-sm pl-1 pr-5 text-white hover:text-blue-600">
                Grandma’s secret blueberry pie recipe revealed!
              </div>
            </a>
          </div>
        </div>
        <div className="">
          <h1 className="text-white font-semibold text-lg border-b-2 border-gray-300">
            Most Discuss
          </h1>
          <div className="flex pt-4">
            <div className="">
              {' '}
              <img src={blueberry} alt="" className=" h-12 w-24" />
            </div>
            <a href="#">
              {' '}
              <div className="text-sm pl-1 pr-5 text-white hover:text-blue-600">
                Grandma’s secret blueberry pie recipe revealed!
              </div>
            </a>
          </div>
          <div className="flex pt-4">
            <div className="">
              {' '}
              <img src={blueberry} alt="" className=" h-12 w-24" />
            </div>
            <a href="#">
              {' '}
              <div className="text-sm pl-1 pr-5 text-white hover:text-blue-600">
                Grandma’s secret blueberry pie recipe revealed!
              </div>
            </a>
          </div>
          <div className="flex pt-4">
            <div className="">
              {' '}
              <img src={blueberry} alt="" className=" h-12 w-24" />
            </div>
            <a href="#">
              {' '}
              <div className="text-sm pl-1 pr-5 text-white hover:text-blue-600">
                Grandma’s secret blueberry pie recipe revealed!
              </div>
            </a>
          </div>
        </div>
        <div className="">
          <h1 className="text-white font-semibold text-lg border-b-2 border-gray-300 ">
            Tags
          </h1>
          <div className="mt-5 flex flex-wrap space-x-1 space-y-1 ">
            <button className="bg-[#444444] p-1 text-green-50">company</button>
            <button className="bg-[#444444] p-1 text-green-50 ">blog</button>
            <button className="bg-[#444444] p-1 text-green-50 ">
              company culture
            </button>
            <button className="bg-[#444444] p-1 text-green-50 ">fashion</button>
            <button className="bg-[#444444] p-1 text-green-50 ">food</button>
            <span className="bg-[#444444] p-1 text-green-50">company</span>
            <span className="bg-[#444444] p-1 text-green-50 ">company</span>
            <span className="bg-[#444444] p-1 text-green-50 ">company</span>
            <span className="bg-[#444444] p-1 text-green-50 ">environment</span>
            <span className="bg-[#444444] p-1 text-green-50 ">future</span>
            <span className="bg-[#444444] p-1 text-green-50 ">company</span>
            <span className="bg-[#444444] p-1 text-green-50 ">funk</span>
            <span className="bg-[#444444] p-1 text-green-50 ">company</span>
            <span className="bg-[#444444] p-1 text-green-50 ">stdio</span>
            <span className="bg-[#444444] p-1 text-green-50 ">technology</span>
            <span className="bg-[#444444] p-1 text-green-50 ">technology</span>
            <span className="bg-[#444444] p-1 text-green-50 ">technology</span>
            <span className="bg-[#444444] p-1 text-green-50 ">technology</span>
            <span className="bg-[#444444] p-1 text-green-50 ">technology</span>
            <span className="bg-[#444444] p-1 text-green-50 ">technology</span>
            <span className="bg-[#444444] p-1 text-green-50 ">technology</span>
            <span className="bg-[#444444] p-1 text-green-50 ">technology</span>
            <span className="bg-[#444444] p-1 text-green-50 ">technology</span>
            <span className="bg-[#444444] p-1 text-green-50 ">technology</span>
            <span className="bg-[#444444] p-1 text-green-50 ">technology</span>
            <span className="bg-[#444444] p-1 text-green-50 ">technology</span>
            <span className="bg-[#444444] p-1 text-green-50 ">technology</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
