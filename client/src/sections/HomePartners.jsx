import React from 'react'
import Marquee from "react-fast-marquee";

const partnersData = [
    {
        img: "/Home/partner1.png",
        alt: "",
        link: "",
    },
    {
        img: "/Home/partner2.png",
        alt: "",
        link: "",
    },
    {
        img: "/Home/partner3.png",
        alt: "",
        link: "",
    },
    {
        img: "/Home/partner4.png",
        alt: "",
        link: "",
    },
    {
        img: "/Home/partner5.png",
        alt: "",
        link: "",
    },
    {
        img: "/Home/partner6.png",
        alt: "",
        link: "",
    },
]
const HomePartners = () => {
    return (
        <div className='bg-tertiary w-full h-full'>
            <div className="wrapper">
                <h1 className='text-primary sectionHeader mb-10'>
                    Corporate Partners
                </h1>

                <div className="overflow-hidden sm:pt-10 pb-10">
                    <Marquee speed={80} pauseOnClick={true} pauseOnHover={true} gradient={true} direction='right'
                        gradientColor="white" gradientWidth={100} autoFill={true} style={{ "overflow": "hidden" }}
                    >
                        {partnersData.map((e, id) => (
                            <a href={e.link} target='new' key={id}>
                                <img
                                    src={e.img}
                                    alt={e.alt}
                                    className="size-[80px] sm:size-[144px] cursor-pointer 
                                    bg-center object-contain mx-2 sm:mx-6"
                                />
                            </a>
                        ))}
                    </Marquee>

                    <Marquee speed={80} pauseOnClick={true} pauseOnHover={true} gradient={true} direction='left' 
                        className='mt-10'
                        gradientColor="white" gradientWidth={100} autoFill={true} style={{ "overflow": "hidden" }}
                    >
                        {partnersData.map((e, id) => (
                            <a href={e.link} target='new' key={id}>
                                <img
                                    src={e.img}
                                    alt={e.alt}
                                    className="size-[80px] sm:size-[144px] cursor-pointer 
                                    bg-center object-contain mx-2 sm:mx-6"
                                />
                            </a>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default HomePartners