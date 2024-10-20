import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';



const HomeOverlays = () => {
    return (
        <div className='w-full h-full relative'>
            <img
                src='/Home/overlays.webp'
                alt='Overlays Cover'
                className='w-full bg-fixed bg-cover object-cover z-0'
            />

            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-0 w-full 
            h-full block md:hidden' />

            <div className='absolute inset-0 z-10'>
                <div className='wrapper text-white flex flex-col justify-center'>
                    <h1 className='sectionHeader'>
                        Become A<br />
                        Campus Merchant
                    </h1>
                    <p className='smallText mt-2 mb-4 md:mb-14'>
                        Earn Money by Selling Unique Merchandise on Your Campus!
                    </p>

                    <a href="">
                        <button className="text-sm md:text-xl group transition duration-300 ease-in-out rounded-sm
                        text-white py-1 px-3 bg-primary hover:bg-[#EF476F]/50 flex justify-center items-center"
                        >
                            Apply Now
                            <FontAwesomeIcon icon={faAngleRight}
                                className='ml-3 my-auto group-hover:translate-x-2 transition duration-300 ease-in-out'
                            />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomeOverlays