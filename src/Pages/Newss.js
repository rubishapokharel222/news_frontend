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
import man from '../Images/man.jpg'



function Newss() {
  return (
    <>
    <div className='flex mx-8 space-x-7 my-8'>
         <div className='w-3/4'>
         <div className='my-3'> <a href="#"> <span className="  text-pink-500 text-lg hover:border-b-2 border-pink-500">
                  FASHION
                </span></a>
                <a href="#"><h1 className='text-5xl font-semibold hover:text-blue-700'>What the music industry can teach you about fashion</h1></a>
                  <span class="material-symbols-outlined text-sm text-[#666666]">
               library_books
                    </span>
                    <span className='text-sm text-[#666666]'>2 Min Read</span>
        </div>
        <div><img src={style1} alt="" /></div>
        {/* para */}
     <div className='flex flex-wrap my-7 ml-7'>
        <div className='w-1/5 '>
            <div><img src={faker.image.avatar()} alt="" className='rounded-full px-5 w-32 h-24' />
            <h1 className='pt-1 hover:text-blue-700'>Patrick Callahan</h1>
            <p className='text-sm pl-5 hover:text-blue-700'>mekshq</p>
            </div>
            <div className='hover:text-blue-700'>
            <span class="material-symbols-outlined text-3xl pl-7 pt-9  font-bold">
             quick_phrases
              </span>
            <p className=' '>Add Comment</p>
              
            </div>
            <div className='hover:text-blue-700'>
            <span class="material-symbols-outlined text-3xl pl-7 pt-9 font-bold">
             share
              </span>
            <p className='pl-3'>Share this!</p>
              
            </div>
        </div>
        
        <div className='w-4/5'>
            <h1 className='font-semibold text-xl'>Photo booth butcher authentic, quinoa gluten-free food truck PBR scenester. Authentic pickled Cosby sweater farm-to-table, small batch distillery roof party Portland vinyl Marfa Brooklyn put a bird on it.</h1>
            <h1 className='text-base py-8'>Single-origin coffee quinoa normcore Pinterest drinking vinegar. Single-origin coffee four loko synth swag, sartorial direct trade fanny pack. Odd Future single-origin coffee 3 wolf moon, flannel cornhole mustache retro hella yr twee. Wolf Shoreditch hashtag, typewriter hoodie lo-fi VHS Thundercats master cleanse scenester. Aesthetic wayfarers Truffaut, butcher drinking vinegar Pinterest Tonx plaid cornhole fap keffiyeh Vice narwhal actually. Small batch migas PBR&B hoodie farm-to-table, cold-pressed vegan. Mixtape taxidermy Vice, forage aesthetic Tonx cold-pressed art party dreamcatcher</h1>
           <h1>Paleo disrupt gentrify mixtape post-ironic, before they sold out Brooklyn. Mixtape Thundercats Pinterest single-origin coffee fanny pack Vice, four loko cronut Austin gluten-free art party. Ethical biodiesel chillwave cardigan tilde butcher. Umami bespoke kogi mustache polaroid. Blog gentrify chambray viral Pinterest heirloom whatever mustache 8-bit. Banjo PBR cornhole pop-up four loko. Mumblecore Pinterest messenger bag chillwave semiotics gluten-free Schlitz</h1>
       <h1 className='text-base py-8'>3 wolf moon Portland Schlitz, direct trade cred narwhal four dollar toast artisan. +1 four loko bitters retro 90’s kitsch Pinterest tilde, single-origin coffee put a bird on it Godard fashion axe biodiesel lo-fi Helvetica. PBR&B tattooed Bushwick lo-fi, cronut you probably haven’t heard of them Truffaut whatever meggings yr twee slow-carb beard try-hard four dollar toast. Photo booth butcher authentic, quinoa gluten-free food truck PBR scenester. Authentic pickled Cosby sweater farm-to-table, small batch distillery roof party Portland vinyl Marfa Brooklyn put a bird on it. Next level freegan Kickstarter pickled flannel hoodie. Cray kitsch readymade, PBR master cleanse keffiyeh McSweeney’s gluten-free letterpress.</h1>
       <h1>Umami Williamsburg meh fingerstache Tonx deep v. Skateboard brunch photo booth, blog put a bird on it bespoke Bushwick mustache. Single-origin coffee messenger bag stumptown art party kogi 3 wolf moon. 3 wolf moon kitsch artisan plaid viral yr, Shoreditch sriracha ennui drinking vinegar bicycle rights hashtag mlkshk pug. Gastropub wolf biodiesel vegan wayfarers pickled. Try-hard asymmetrical flexitarian, small batch Bushwick Brooklyn fap. Kale chips Tonx cray, Blue Bottle raw denim Bushwick blog migas Williamsburg twee 8-bit slow-carb.

      </h1>
      <div className='my-14'><a href="#"><img src={banner} alt="" className='md:m-auto my-3  w-full' /></a></div>
      
        </div>

     </div>


     <div className='flex justify-between border-b-2 border-black'>
         <button className="bg-black p-1.5 text-white text-sm ">
                  You May Also Like
                </button>
      
    </div>
     <div className='md:grid grid-cols-3 gap-7 my-3'>
    {/* image1 */}
        <div>
        <img src={fashion1} alt="" />
      <div className='my-3'> <a href="#"> <span className="  text-pink-500 text-sm hover:border-b-2 border-pink-500">
                  FASHION
                </span></a>
                <a href="#"><h1 className='text-sm font-semibold hover:text-blue-700'>Everything you ever need to known <br /> about scarves</h1></a>
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
                <a href="#"><h1 className='text-sm font-semibold hover:text-blue-700'>The beginner’s guide to buying the <br /> right skirt</h1></a>
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
                <a href="#"><h1 className='text-sm font-semibold hover:text-blue-700'>How to make your accessories look <br /> like a million bucks</h1></a>
                  <span class="material-symbols-outlined text-sm text-[#666666]">
               library_books
                    </span>
                    <span className='text-sm text-[#666666]'>2 Min Read</span>
        </div>
        </div>
       
    </div>


    <div>
    <div className='flex space-x-4 border-b-2 border-black'>
         <button className="bg-black p-1.5 text-white text-sm ">
                  About the author
                </button>
                <div> <a href="#" className='pr-2'>
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className='pr-2'>
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className='pr-2'>
              {' '}
              <i class="fa-brands fa-google-plus-g"></i>
            </a></div>
            </div>
      <div className='flex my-6'>
        <div><img src={man} alt="" className='rounded-full w-52' /></div>
        <div className='mx-6'>
            <h1 className='font-semibold text-2xl'>Patrick Callahan</h1>
            <h1 className='py-4'>This is an example of author bio/description. Beard fashion axe trust fund, post-ironic listicle scenester. Uniquely mesh maintainable users rather than plug-and-play testing procedures.</h1>
        </div>
      </div>
    
    </div>

<div className='py-6'>
<div className='border-b-2 border-black'>
         <button className="bg-black p-1.5 text-white text-sm ">
                  Add Comment
                </button>
</div>
<div className='m-6 border-2 bg-gray-100'>
<form action="" className='m-6'>
<h1 className='text-[#444444]'>Comment</h1>
<textarea name="" id="" cols="30" rows="10" className='border-2 w-full '>
</textarea>
<div className='flex mt-6 space-x-4'>
<div>
    <h1 className='text-lg text-[#444444]'>Name*</h1>
    <input type="text" className='border-2 py-3 px-10'  />
</div>
<div>
    <h1 className='text-lg text-[#444444]'>Email*</h1>
    <input type="email" className='border-2 py-3 px-10'  />
</div>
<div>
    <h1 className='text-lg text-[#444444]'>Website</h1>
    <input type="text" className='border-2 py-3 px-10 '   />
</div>
</div>
<div className='my-5'><input type="checkbox" />
<label for="vehicle1" className='pl-2'> Save my name, email, and website in this browser for the next time I comment.</label><br />
 <button className='text-white bg-blue-600 py-2 px-11 my-5'>Post Comment</button>
</div>
</form>
</div>
</div>

 </div>



    <div className='w-1/4 mt-4'>
          <div className=' border-b-2 border-black'>  <span className='bg-black text-white font-semibold p-1 px-3'>All Topics</span></div>
          <ul className='mt-5'>
           <a href=""> <li><span className='bg-blue-800 text-white py-1 px-2 mr-3'>5</span>Celebrities</li></a>
           <a href=""> <li className='mt-4'><span className='bg-blue-800 text-white py-1 px-2 mr-3'>5</span>Celebrities</li></a>
           <a href=""> <li className='mt-4'><span className='bg-red-700 text-white py-1 px-2 mr-3'>7</span>Entertainment</li></a>
           <a href=""> <li className='mt-4'><span className='bg-orange-400 text-white py-1 px-2 mr-3'>7</span>Fashion</li></a>
           <a href=""> <li className='mt-4'><span className='bg-yellow-700 text-white py-1 px-2 mr-3'>1</span>Food</li></a>
           <a href=""> <li className='mt-4'><span className='bg-green-800 text-white py-1 px-2 mr-3'>5</span>Celebrities</li></a>
           <a href=""> <li className='mt-4'><span className='bg-fuchsia-600 text-white py-1 px-2 mr-3'>3</span>Celebrities</li></a>
           <a href=""> <li className='mt-4'><span className='bg-indigo-900 text-white py-1 px-2 mr-3'>2</span>Celebrities</li></a>
           <a href=""> <li className='mt-4'><span className='bg-green-500 text-white py-1 px-2 mr-3'>1</span>Celebrities</li></a>

             </ul>


             {/* featured */}
    <div className=' border-b-2 border-black mt-8 mb-5'>  <span className='bg-black text-white font-semibold p-1 px-3'>Featured</span></div>

             <div className=''>
    {/* image1 */}
        <div className='flex'>
        <img src={fashion1} alt="" className='w-20 h-14' />
      <div className='mb-3 ml-2'> <a href="#"> <span className="  text-pink-500 text-sm hover:border-b-2 border-pink-500">
                  FASHION
                </span></a>
                <a href="#"><h1 className='text-sm  hover:text-blue-700'>Everything you ever need to known about scarves</h1></a>
                
        </div>
        </div>
        {/* image2 */}
        <div className='flex mt-2'>
        <img src={fashion2} alt="" className='w-20 h-14' />
      <div className='mb-3 ml-2'> <a href="#"> <span className="  text-pink-500 text-sm hover:border-b-2 border-pink-500">
                  FASHION
                </span></a>
                <a href="#"><h1 className='text-sm  hover:text-blue-700'>Everything you ever need to known about scarves</h1></a>
                
        </div>
        </div>
         {/* image3 */}
         <div className='flex mt-2'>
        <img src={fashion3} alt="" className='w-20 h-14' />
      <div className='mb-3 ml-2'> <a href="#"> <span className="  text-pink-500 text-sm hover:border-b-2 border-pink-500">
                  FASHION
                </span></a>
                <a href="#"><h1 className='text-sm  hover:text-blue-700'>Everything you ever need to known about scarves</h1></a>
                
        </div>
        </div>
        {/* second row */}
          {/* image1 */}
          <div className='flex mt-2'>
        <img src={fashion4} alt="" className='w-20 h-14' />
      <div className='mb-3 ml-2'> <a href="#"> <span className="  text-pink-500 text-sm hover:border-b-2 border-pink-500">
                  FASHION
                </span></a>
                <a href="#"><h1 className='text-sm  hover:text-blue-700'>Everything you ever need to known about scarves</h1></a>
                
        </div>
        </div>
        {/* image2 */}
        <div className='flex mt-2'>
        <img src={fashion5} alt="" className='w-20 h-14' />
      <div className='mb-3 ml-2'> <a href="#"> <span className="  text-pink-500 text-sm hover:border-b-2 border-pink-500">
                  FASHION
                </span></a>
                <a href="#"><h1 className='text-sm  hover:text-blue-700'>Everything you ever need to known about scarves</h1></a>
                
        </div>
        </div>
         {/* image3 */}
         <div className='flex mt-2'>
        <img src={fashion6} alt="" className='w-20 h-14' />
      <div className='mb-3 ml-2'> <a href="#"> <span className="  text-pink-500 text-sm hover:border-b-2 border-pink-500">
                  FASHION
                </span></a>
                <a href="#"><h1 className='text-sm  hover:text-blue-700'>Everything you ever need to known about scarves</h1></a>
                
        </div>
        </div>
          </div>
             <div className='my-10 sticky top-0 pt-8 '>
             <div className=''><a href="#"><img src={ad} alt="" /></a></div>
             </div>
          
          </div>
    </div>

    <div><img src={banner} alt="" className='m-auto' /></div>
   </>
    
  )
}

export default Newss