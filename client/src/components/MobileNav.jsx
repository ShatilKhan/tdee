import { motion } from 'framer-motion';
import { navLinks } from './Navbar';
import { useLocation } from 'react-router-dom';


const mobileMenuSlide = {
    initial: { x: "calc(100% + 150px)" },
    enter: { x: "0", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } },
    exit: { x: "calc(100% + 150px)", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.6 } }
}

const MobileNav = ({ toggle, setToggle }) => {
    const location = useLocation();
    const url = location.pathname;
    
    return (
        <motion.button
            variants={mobileMenuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className="h-screen w-full bg-black fixed right-0 top-0 
            text-white -z-10"
        >
            <div className="h-full wrapper flex flex-col justify-between">
                <div className="flex flex-col gap-4 mt-40">
                    {
                        navLinks.map((link, index) => (
                            <motion.a
                                href={link.id}
                                key={index}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.2 + 0.3,
                                    ease: "easeInOut",
                                    type: "spring"
                                }}
                                exit={{ scale: 0, opacity: 0 }}
                                className={`${url === link.id ? "text-white" : "text-secondary"} 
                                text-2xl font-medium my-2 text-left z-50 cursor-auto pointer-events-auto`}
                            >
                                {link.title}
                                <div className='w-full h-0.5 bg-white' />
                            </motion.a>
                        ))
                    }
                </div>
            </div>
        </motion.button>
    )
}

export default MobileNav