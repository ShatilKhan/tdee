import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const CardData = [
    {
        img: "/Home/trending1.webp",
        name: "KUET Cyborg Premimum Jersey",
        location: "KUET Cyborg",
        volume: "ONE",
        types: [
            {
                title: "Polyester",
                img: "/Home/polyester.png"
            },
            {
                title: "Jersey",
                img: ""
            },
        ]
    },
    {
        img: "/Home/trending1.webp",
        name: "KUET Cyborg Premimum Jersey",
        location: "KUET Cyborg",
        volume: "ONE",
        types: [
            {
                title: "Polyester",
                img: "/Home/polyester.png"
            },
            {
                title: "Jersey",
                img: ""
            },
        ]
    },
    {
        img: "/Home/trending1.webp",
        name: "KUET Cyborg Premimum Jersey",
        location: "KUET Cyborg",
        volume: "ONE",
        types: [
            {
                title: "Polyester",
                img: "/Home/polyester.png"
            },
            {
                title: "Jersey",
                img: ""
            },
        ]
    },
    {
        img: "/Home/trending1.webp",
        name: "KUET Cyborg Premimum Jersey",
        location: "KUET Cyborg",
        volume: "ONE",
        types: [
            {
                title: "Polyester",
                img: "/Home/polyester.png"
            },
            {
                title: "Jersey",
                img: ""
            },
        ]
    },
    {
        img: "/Home/trending1.webp",
        name: "KUET Cyborg Premimum Jersey",
        location: "KUET Cyborg",
        volume: "ONE",
        types: [
            {
                title: "Polyester",
                img: "/Home/polyester.png"
            },
            {
                title: "Jersey",
                img: ""
            },
        ]
    },
    {
        img: "/Home/trending1.webp",
        name: "KUET Cyborg Premimum Jersey",
        location: "KUET Cyborg",
        volume: "ONE",
        types: [
            {
                title: "Polyester",
                img: "/Home/polyester.png"
            },
            {
                title: "Jersey",
                img: ""
            },
        ]
    },
]
const HomeTrending = () => {
    return (
        <div className='bg-tertiary w-full h-full'>
            <div className="wrapper">
                <h1 className='text-primary sectionHeader mb-10'>
                    Trending Now
                </h1>

                <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]}
                    breakpoints={{
                        520: {
                            slidesPerView: 1,
                        },
                        1040: {
                            slidesPerView: 2,
                        },
                        1224: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <div className=''>
                        {CardData.map((e, id) => (
                            <SwiperSlide key={id} className='pb-14'>
                                <div key={id} className='sm:w-[432px] h-auto shadow-md shadow-black/60'>
                                    <div className="relative w-full h-[430px]">
                                        <img
                                            src={e.img}
                                            alt='Garment'
                                            className='w-full h-[430px] bg-cover object-contain'
                                        />
                                        <div className='absolute bottom-0 left-0 
                                    w-full h-[118px] z-0 bg-black/30 backdrop-blur-xl'>
                                            <div className='w-full h-full flex flex-col justify-center text-white p-6'>
                                                <p className='text-lg'>
                                                    {e.name}
                                                </p>
                                                <div className="flex justify-between mt-4">
                                                    <p className='smallText'>
                                                        {e.location}
                                                    </p>

                                                    <a href="">
                                                        <button className="text-sm group transition 
                                                    duration-300 ease-in-out rounded-sm text-black bg-white py-1 px-3 
                                                    flex justify-center items-center"
                                                        >
                                                            Explore
                                                            <FontAwesomeIcon icon={faAngleRight}
                                                                className='ml-3 my-auto group-hover:translate-x-2 transition 
                                                            duration-300 ease-in-out'
                                                            />
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full h-full p-6 bg-gray1">
                                        <div className='flex justify-between'>
                                            <p className='text-black'>
                                                Type(s)
                                            </p>
                                            <div className='flex gap-4'>
                                                {e.types.map((type, id) => (
                                                    <div key={id} className="bg-primary px-2 py-1 text-white flex 
                                                justify-center items-center rounded-sm">
                                                        {type.img && (
                                                            <img src={type.img} alt={type.title} className='size-[18px] mr-2' />
                                                        )}
                                                        <p className=''>{type.title}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex justify-between mt-2">
                                            <p className='text-black underline'>
                                                Volume
                                            </p>
                                            <p className='text-gray-400'>
                                                {e.volume}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </div>

                    {/* Custom Navigation Buttons */}
                    <button className="custom-prev">
                        &#8249; {/* Left Arrow */}
                    </button>
                    <button className="custom-next">
                        &#8250; {/* Right Arrow */}
                    </button>
                </Swiper>
                </div>
            </div>
        </div>
    )
}

export default HomeTrending