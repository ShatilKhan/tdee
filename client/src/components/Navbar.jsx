import React, { useEffect, useState } from 'react'
import { MotionConfig, motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import MobileNav from './MobileNav';
import FlipLink from './FlipLink';
import { useLocation } from 'react-router-dom';

const NavMenuButtonVariants = {
    top: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            top: ["35%", "50%", "50%"],
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            top: ["50%", "50%", "35%"],
        },
    },
    middle: {
        open: {
            rotate: ["0deg", "0deg", "-45deg"],
        },
        closed: {
            rotate: ["-45deg", "0deg", "0deg"],
        },
    },
    bottom: {
        open: {
            rotate: ["0deg", "0deg", "45deg"],
            bottom: ["35%", "50%", "50%"],
            left: "50%",
        },
        closed: {
            rotate: ["45deg", "0deg", "0deg"],
            bottom: ["50%", "50%", "35%"],
            left: "calc(50% + 10px)",
        },
    },
}

export const navLinks = [
    {
        id: "/model",
        title: "Model",
    },
    {
        id: "/pages/Customize-Now",
        title: "CUSTOMIZE NOW",
    },
    {
        id: "/pages/My-Shop",
        title: "MY SHOP",
    },
    {
        id: "/pages/Impact",
        title: "IMPACT",
    },
    {
        id: "/pages/About",
        title: "ABOUT",
    },
];

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    // If the Mobile Menu is active scroll disable, else scroll enable
    useEffect(() => {
        toggle
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'auto')
    }, [toggle]);

    // Show navbar when scrolling up hide when scrolling down
    const { scrollY } = useScroll();

    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 250) {
            setHidden(true);
        }
        else {
            setHidden(false);
        }
    })

    const location = useLocation();
    const url = location.pathname;

    return (
        <motion.nav
            className="w-full flex items-center py-2 fixed top-0 z-40 bg-white/10 backdrop-blur-sm"
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className='sm:px-16 px-6 w-full flex justify-between items-center max-w-[1600px] mx-auto'>
                <a
                    href="/"
                    className='flex items-center gap-2'
                >
                    <img
                        src='/Home/logo.png'
                        alt='Logo'
                        className='object-contain w-[184px] h-[57px]'
                    />
                </a>

                <ul className='list-none hidden md:flex flex-row gap-10'>
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${url === link.id ? "text-primary" : "text-white"} 
                            text-[18px] font-medium cursor-pointer`}
                        >
                            <FlipLink href={`${link.id}`}>
                                {link.title}
                            </FlipLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu */}
                <div className={`${toggle ? "" : "md:hidden"} flex flex-1 justify-end items-center`}>
                    {/* Mobile menu button */}
                    <MotionConfig
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    >
                        <motion.button
                            initial={false}
                            animate={toggle ? "open" : "closed"}
                            onClick={() => {
                                setToggle(!toggle);
                            }}
                            className="relative h-10 w-20 rounded-full transition-colors hover:bg-white/20"
                        >
                            <motion.span
                                variants={NavMenuButtonVariants.top}
                                className="absolute h-1 w-10 bg-white"
                                style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                            />
                            <motion.span
                                variants={NavMenuButtonVariants.middle}
                                className="absolute h-1 w-10 bg-white"
                                style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                            />
                            <motion.span
                                variants={NavMenuButtonVariants.bottom}
                                className="absolute h-1 w-5 bg-white"
                                style={{
                                    x: "-50%",
                                    y: "50%",
                                    bottom: "35%",
                                    left: "calc(50% + 10px)",
                                }}
                            />
                        </motion.button>
                    </MotionConfig>

                    <AnimatePresence mode="wait">
                        {toggle &&
                            <MobileNav
                                toggle={toggle}
                                setToggle={setToggle}
                            />
                        }
                    </AnimatePresence>

                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar