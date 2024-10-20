import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";



const fadeIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
        y: direction === 'up' ? 200 : direction === 'down' ? -200 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

const textVariant = (delay) => ({
    hidden: {
        y: 50,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.25,
            delay,
        },
    },
});

//  In the First tab right section, each row is a fuction and called in the Main Default- function HomeTab
function TabOneRight({ circleNumber, header, text, order1, order2, headerColor }) {
    return (
        <div className="grid grid-cols-3 md:grid-cols-4 items-center gap-4 py-6">
            <div className={`text-center rounded-full size-[80px] md:size-[117px] border-2 border-gray-300 flex 
            items-center justify-center ${order1}`}
            >
                <div className="bg-primary rounded-full size-[30px] md:size-[42px] border
                border-gray-200 shadow-lg text-white font-bold flex items-center justify-center">
                    <p>{circleNumber}</p>
                </div>
            </div>
            <div className={`col-span-2 md:col-span-3 ${order2}`}>
                <p className={`text-lg font-bold mb-2 lg:mb-6 ${headerColor}`}>
                    {header}
                </p>
                <p className="text-secondary mb-2 lg:mb-6 text-xs md:text-sm font-semibold">
                    {text}
                </p>
                <div className={`mt-6 md:mt-10 w-full h-0.5 bg-gray-300`}></div>
            </div>
        </div>
    )
}

const images = [
    '/Home/hometab.png',
    '/Home/hometab.png',
    '/Home/hometab.png',
    '/Home/hometab.png',
    '/Home/hometab.png',
];


const steps = [
    {
        title: 'Choose What You Want to Create',
        description: 'Select from T-shirts, polos, jackets, caps, hoodies, shirts, or any other product you want to customize.'
    },
    {
        title: 'Select Your Fabric Color',
        description: 'Choose your preferred color from the color palette.'
    },
    {
        title: 'Upload Your Design',
        description: 'Upload your image or PSD/AI file to design online and select options like print or embroidery.'
    },
    {
        title: 'Review Your Order',
        description: 'View a technical draft of your design and an estimated cost, which usually takes a few days.'
    },
    {
        title: 'Enjoy Your Custom Product',
        description: 'Receive your customized product and enjoy! Share your unique design with friends or colleagues.'
    }
];

function HomeTab() {
    // Second Tab left Images
    const [currentIndex, setCurrentIndex] = useState(1);
    const handleButtonClick = (index) => {
        setCurrentIndex(index);
    };
    //When Second Tab is active Show different Text and Image in every 5 seconds once
    useEffect(() => {
        if (true) {
            const intervalId = setInterval(() => {
                if (currentIndex === images.length) {
                    setCurrentIndex(1);
                }
                else {
                    setCurrentIndex(currentIndex + 1);
                }
            }, 5000)

            return () => clearInterval(intervalId);
        }
    }, [currentIndex])


    // Second Tab left section images
    function LeftTabImage() {
        return (
            <motion.img
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeIn('up', 'spring', 0.2, 0.5)}
                src={images[currentIndex - 1]}
                alt="Image"
                className="mx-auto object-cover order-2 lg:order-1 md:h-[750px]"
            />
        )
    }

    // Primary color line animation
    const animation = {
        start: {
            height: 0
        },
        end: {
            height: ["0%", "100%"],
            transition: {
                type: 'tween',
                ease: 'easeInOut',
                duration: 5
            }
        }
    };

    return (
        <div className="w-full h-full bg-tertiary">
            <div className="wrapper">
                <ul
                    className="mx-auto flex flex-row border border-gray-30 
                    text-black font-bold text-sm sm:text-lg md:text-2xl"
                >
                    <li className="h-[58px] w-full flex items-center justify-center bg-gray1 rounded-[3px]">
                        <p>
                            Merchant Journey
                        </p>
                    </li>
                    <li className="h-[58px] w-full flex items-center justify-center bg-primary rounded-[3px]">
                        <p>
                            How to Place an Order?
                        </p>
                    </li>
                </ul>

                <div className="p-4 rounded-lg bg-tertiary h-auto">
                    <>
                        <div className="grid lg:grid-cols-2 px-auto py-auto gap-6">
                            <LeftTabImage />

                            <div className="my-2 lg:my-10 order-1 lg:order-2">
                                {steps.map((step, index) => (
                                    <div key={index} className="grid grid-cols-3">
                                        <div>
                                            <button
                                                className={`w-[42px] h-[42px] text-white rounded-full text-center font-bold ${currentIndex >= index + 1 ? 'bg-primary' : 'bg-secondary'}`}
                                                onClick={() => handleButtonClick(index + 1)}
                                            >
                                                {index + 1}
                                            </button>
                                            {index < steps.length - 1 && (
                                                <div className={`ml-5 w-0.5 h-[112px] bg-black/20 ${currentIndex > index + 1 ? 'bg-primary' : ''}`}>
                                                    {currentIndex === index + 1 && (
                                                        <motion.div
                                                            className={`w-0.5 ${currentIndex >= index + 1 ? 'bg-primary' : 'bg-black/20'}`}
                                                            animate="end"
                                                            variants={animation}
                                                        />
                                                    )}
                                                </div>
                                            )}
                                        </div>

                                        <div className={`col-span-2 text-right ${currentIndex === index + 1 ? 'text-black' : 'text-secondary'}`}>
                                            <p className="font-bold text-lg mb-2 lg:mb-4">
                                                {step.title}
                                            </p>
                                            <div className="font-semibold md:text-sm text-xs mb-2 lg:mb-4">
                                                <motion.p
                                                    initial="hidden"
                                                    whileInView="show"
                                                    viewport={{ once: true, amount: 0.25 }}
                                                    variants={textVariant(0.5)}
                                                >
                                                    {step.description}
                                                </motion.p>
                                            </div>
                                            <div className="mb-3 w-full h-0.5 rounded-full bg-black/20" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </div>
    );
}

export default HomeTab;
