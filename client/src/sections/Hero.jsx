import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div>
      <img
        src='/Home/hero.webp'
        alt='Hero Image'
        className='w-full h-screen bg-fixed bg-center bg-cover object-cover z-0'
      />

      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/20 z-0 w-full h-full' />

      <div className='absolute inset-0 z-10'>
        <div className='wrapper flex items-center'>
          <div className='text-white'>
            <h1 className='font-semibold md:leading-[84px] text-4xl sm:text-5xl md:text-[70px]'>
              Craft Your Style,<br />Your Way
            </h1>
            <p className='text-xl md:text-[30px] md:leading-[40px] font-medium mt-4'>
              Customize garments and accessories with a 3D view.<br />
              Craft your look, and let us bring it to life.
            </p>

            <a href="">
              <button className="text-base md:text-xl mt-10 md:mt-20 group transition duration-300 ease-in-out rounded-sm
                text-white py-1 px-3 bg-primary hover:bg-[#EF476F]/50 flex justify-center items-center"
              >
                Explore
                <FontAwesomeIcon icon={faAngleRight}
                  className='ml-3 my-auto group-hover:translate-x-2 transition duration-300 ease-in-out'
                />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero