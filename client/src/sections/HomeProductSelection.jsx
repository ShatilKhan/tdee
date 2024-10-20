import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const CardData = [
    {
        img: "/Home/product1.png",
        name: "T-shirt",
        link: ""
    },
    {
        img: "/Home/product2.png",
        name: "T-shirt",
        link: ""
    },
    {
        img: "/Home/product3.png",
        name: "T-shirt",
        link: ""
    },
    {
        img: "/Home/product4.png",
        name: "T-shirt",
        link: ""
    },
    {
        img: "/Home/product5.png",
        name: "T-shirt",
        link: ""
    },
    {
        img: "/Home/product6.png",
        name: "T-shirt",
        link: ""
    },

]
const HomeProductSelection = () => {
    return (
        <div className='bg-tertiary w-full h-full'>
            <div className="wrapper">
                <h1 className='text-primary sectionHeader mb-[100px]'>
                    Select Your Product
                </h1>

                <div className='grid lg:grid-cols-2 2xl:grid-cols-3 lg:gap-10 place-items-center'>
                    {CardData.map((e, id) => (
                        <div key={id} className='sm:w-[432px] sm:h-[192px] border-2 border-primary flex px-4 py-6 
                        relative mb-20 bg-white group'>
                            <img
                                src={e.img}
                                alt={e.name}
                                className='w-[100px] h-[130px] sm:w-[216px] sm:h-[270px] sm:-mt-[100px] 
                                group-hover:-mt-[140px] transition-all duration-300 ease-in-out'
                            />

                            <div className='w-full h-full flex flex-col justify-between space-y-14 sm:space-y-0'>
                                <p className='text-black font-semibold text-3xl text-center'>
                                    {e.name}
                                </p>

                                <a href="">
                                    <button className="text-base md:text-xl group transition duration-300 ease-in-out rounded-sm relative
                                    text-white py-1 px-3 bg-primary hover:bg-[#EF476F]/50 flex justify-center items-center"
                                    >
                                        Customize Now
                                        <FontAwesomeIcon icon={faAngleRight}
                                            className='ml-3 my-auto group-hover:translate-x-2 transition duration-300 ease-in-out'
                                        />
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeProductSelection