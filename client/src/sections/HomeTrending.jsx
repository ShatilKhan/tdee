import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";




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

// Custom Next Arrow Component
const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} mr-20 z-[20]`}
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon={faAngleRight}
                style={{ color: '#EF476F', fontSize: '40px' }}
            />
        </div>
    );
};

// Custom Prev Arrow Component
const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} ml-20 z-[20]`}
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon={faAngleLeft}
                style={{ color: '#EF476F', fontSize: '40px' }}
            />
        </div>
    );
};

const HomeTrending = () => {
    var settings = {
        // className: "center",
        // centerMode: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        speed: 500,
        // centerPadding: "60px",
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        rows: 1,
        slidesPerRow: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1921,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 1441,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
        ],
    };

    return (
        <div className='bg-tertiary w-full h-full pb-20'>
            <h1 className='text-primary sectionHeader mb-10 wrapper'>
                Trending Now
            </h1>

            <div className='w-full h-auto relative'>
                <div className='z-[10] absolute inset-0 w-full xl:block hidden'>
                    <div className='relative w-full h-full flex'>
                        <div className="flex-grow h-full bg-white/50 backdrop-blur-sm" />
                        <div className='w-[1480px]' />
                        <div className="flex-grow h-full bg-white/50 backdrop-blur-sm" />
                    </div>
                </div>

                <div className='z-0'
                    style={{
                        width: "100%",
                    }}
                >
                    <Slider {...settings}>
                        {CardData.map((e, id) => (
                            <div key={id} className='pb-2 px-6 sm:px-16 2xl:px-0'>
                                <div className='sm:w-[432px] shadow-md shadow-black/60'>
                                    <div className="relative w-full">
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
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div >
    )
}

export default HomeTrending