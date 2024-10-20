import React from 'react'

const cardData = [
    {
        img: "/Home/customize1.png",
        header: "Stylish Garments & Merchandise",
        text: "Tailor hoodies, jackets, t-shirts, and more with printed or embroidered logos and choose from a wide range of colors."
    },
    {
        img: "/Home/customize2.png",
        header: "Personalized Leather Goods",
        text: "Personalize your leather corporate bags, wallets, and clutches with printed or embroidered logos."
    },
    {
        img: "/Home/customize3.png",
        header: "Corporate Gifts & Merchandise",
        text: "From custom pens and mobile stands to high-quality notebooks and desk organizers, we offer personalization with your company logo."
    },
    {
        img: "/Home/customize4.png",
        header: "Bespoke Showpieces",
        text: "Customize wall clocks, wall décor, and framed art pieces to enhance your space."
    },
    {
        img: "/Home/customize5.png",
        header: "Sustainable & Eco-friendly Options",
        text: "Opt for eco-friendly materials like jute in bags, bottle holders, and pouches, while still customizing logos and colors."
    },
    {
        img: "/Home/customize6.png",
        header: "Personalized Home Décor",
        text: "Select colors, patterns, and personalization options for cushions, throws, and curtains that match your home aesthetics."
    },
]
const HomeCustomize = () => {
    return (
        <div className='bg-tertiary w-full h-full'>
            <div className="wrapper">
                <h1 className='text-primary sectionHeader mb-10'>
                    Customize with Confidence
                </h1>

                <div className='grid lg:grid-cols-2 grid-rows-3 gap-6'>
                    {cardData.map(({ img, header, text }, id) => (
                        <div key={id} className='w-full h-auto bg-gray1 px-6 py-2 flex justify-center items-center rounded-sm'>
                            <img
                                src={img}
                                alt='Customize Image'
                                className='size-[60px] md:size-[126px] object-contain mr-2'
                            />
                            <div className='text-black'>
                                <h1 className='basicText'>
                                    {header}
                                </h1>
                                <p className='smallText mt-1'>
                                    {text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default HomeCustomize