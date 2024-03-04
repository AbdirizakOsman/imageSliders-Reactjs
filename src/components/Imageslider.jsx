import React from 'react';
import { useState } from 'react';
import {BsChevronCompactLeft, BsChevronCompactRight, BsDribbble} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
function Imageslider() {
  const sliders = [
    {
      url:
        'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      url:
        'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      url:
        'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      url:
        'https://img.freepik.com/free-photo/new-york-city_649448-1679.jpg?t=st=1709551380~exp=1709554980~hmac=3c63c8393d457370169fefbb5d0bcc03dbfb141f5abda83a47c1568f9d81d973&w=900',
    },
  ];

  const [curentIdex,setcurentIdex] = useState(0)

  const prevslide = () =>{
   const isfirstslide = curentIdex === 0;
   const newIndex = isfirstslide ? sliders.length -1 : curentIdex -1
   setcurentIdex(newIndex) 
  }

  const nextslide = () =>{
   const islastslide = curentIdex === sliders.length -1
   const newIdex = islastslide ? 0 : curentIdex +1
   setcurentIdex(newIdex)
  }

  const goToslide = (slideindex) => {
    setcurentIdex(slideindex)
  }
   
 
  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div
        style={{
          backgroundImage: `url(${sliders[curentIdex].url})`, // Access the url property of the first slider
        }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevslide}  size={30}/>
      </div>

      <div className='hidden group-hover:block group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextslide} size={30} />
      </div>
      <div className='flex top-5 justify-center py-2'>

        {/* {sliders.map((slide, slideindex) =>{
            <div key={slideindex} className='text-2xl cursor-pointer'>
                <RxDotFilled />
            </div>
        })} */}
        
        {sliders.map((slide, slideindex) => (
          <div key={slideindex} onClick={() => goToslide(slideindex)} className='text-2xl cursor-pointer'>
                <RxDotFilled />
         </div>
        ))}

        
      </div>
    </div>
  );
}

export default Imageslider; // Fix the export statement name
