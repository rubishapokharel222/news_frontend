import React from 'react'
import blueberry from '../Images/blueberry.jpg'
import football from '../Images/football.jpg'
import golf from '../Images/golf.jpg'
import little from '../Images/little.jpg'
import pasta from '../Images/pasta.jpg'
import coffee from '../Images/coffee.jpg'

function Headlines() {
  return (
    <>
      <div className="hidden min-[1250px]:block">
        <div className="p-6 flex bg-[#eeeeee] mx-10 ">
          <div className="flex">
            <div className="">
              {' '}
              <img src={blueberry} alt="" className="blueberry" />
            </div>
            <a href="#">
              {' '}
              <div className="text-sm pl-1 pr-5 text-[#666666] hover:text-black">
                Grandma’s secret blueberry pie recipe revealed!
              </div>
            </a>
          </div>
          <div className="flex">
            <div className="">
              {' '}
              <img src={little} alt="" className="blueberry" />
            </div>
            <a href="#">
              {' '}
              <div className="text-sm pl-1 pr-10 text-[#666666] hover:text-black">
                Little known facts about football and why they matter
              </div>
            </a>
          </div>
          <div className="flex">
            <div className="">
              {' '}
              <img src={football} alt="" className="blueberry" />
            </div>
            <a href="#">
              {' '}
              <div className="text-sm pl-2 text-[#666666] hover:text-black">
                Learn to play golf by practicing 15 minutes a day
              </div>
            </a>
          </div>
          <div className="flex">
            <div className="">
              {' '}
              <img src={golf} alt="" className="blueberry" />
            </div>
            <a href="#">
              {' '}
              <div className="text-sm text-[#666666] hover:text-black">
                Everything you ever need to known about scarves
              </div>
            </a>
          </div>
          <div className="flex">
            <div className="">
              {' '}
              <img src={pasta} alt="" className="blueberry" />
            </div>
            <a href="#">
              {' '}
              <div className="text-sm text-[#666666] hover:text-black">
                Pasta is the secret ingredient for a healthy lifestyle
              </div>
            </a>
          </div>
          <div className="flex">
            <div className="">
              {' '}
              <img src={coffee} alt="" className="blueberry" />
            </div>
            <a href="#">
              {' '}
              <div className="text-sm text-[#666666] hover:text-black">
                This is how coffee can help you predict the future
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Headlines
