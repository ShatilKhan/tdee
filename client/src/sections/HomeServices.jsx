import React from 'react'


const cardData = [
    {
        title: "Affordable Pricing",
        img: "/Home/service1.svg",
        text: "Overlays provides you with the most reasonable pricing based on your needs.",
    },
    {
        title: "Fast and Easy",
        img: "/Home/service2.svg",
        text: "We provide a 3D seamless customization option with an easy-to-use interface.",
    },
    {
        title: "Reliable Deal",
        img: "/Home/service3.svg",
        text: "We provide you with accurate updates on your order.",
    },
    {
        title: "Top-Notch Quality",
        img: "/Home/service4.svg",
        text: "We craft every product with precision, ensuring durability and style.",
    },
]
const HomeServices = () => {
    return (
        <div className='bg-tertiary w-full h-full'>
            <div className="wrapper">
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className='mb-6'>
                        <h1 className='text-primary sectionHeader mb-2'>
                            Our Services
                        </h1>
                        <p className='basicText text-black'>
                            We provide innovative and deeply embedded financing solutions to smallholder
                            farmers in Bangladesh.
                        </p>

                        <div className='grid grid-cols-2 gap-y-10 gap-x-4 mt-10 place-items-center lg:place-items-start'>
                            {cardData.map((e, id) => (
                                <div key={id} className='max-w-[312px] h-full flex flex-col justify-center items-center bg-gray1'>
                                    <div className='w-full h-[60px] md:h-[95px] bg-black flex justify-center items-center'>
                                        <p className='basicText text-center text-white'>
                                            {e.title}
                                        </p>
                                    </div>
                                    <img
                                        src={e.img}
                                        alt={e.title}
                                        className='mt-4 mb-8'
                                    />
                                    <p className='smallText px-4 pb-8'>
                                        {e.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <img
                            src='/Home/ourServices.png'
                            alt='Charecter'
                            className=' w-full h-full'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeServices