import React from 'react'

const socials = [
    {
        img: "/fb.png",
        link: "",
    },
    {
        img: "/x.png",
        link: "",
    },
    {
        img: "instra.png",
        link: "",
    },
    {
        img: "tiktok.png",
        link: "",
    },
    {
        img: "snapchat.png",
        link: "",
    },
]

const payments = [
    {
        img: "/Payment/payment1.png",
    },
    {
        img: "/Payment/payment2.png",
    },
    {
        img: "/Payment/payment3.png",
    },
    {
        img: "/Payment/payment4.png",
    },
    {
        img: "/Payment/payment5.png",
    },
    {
        img: "/Payment/payment6.png",
    },
    {
        img: "/Payment/payment7.png",
    },
    {
        img: "/Payment/payment8.png",
    },
    {
        img: "/Payment/payment9.png",
    },
    {
        img: "/Payment/payment10.png",
    },
    {
        img: "/Payment/payment11.png",
    },
    {
        img: "/Payment/payment12.png",
    },
    {
        img: "/Payment/payment13.png",
    },
    {
        img: "/Payment/payment14.png",
    },
]
const Footer = () => {
    return (
        <div className='w-full h-full bg-black overflow-hidden'>
            <div className='wrapper smallText text-white'>
                <div className='flex gap-10 xl:gap-[120px] flex-wrap justify-between'>

                    <div className=''>
                        <div className='flex gap-10 xl:gap-[120px]'>
                            <div className='smallText'>
                                <p className='text-white uppercase mb-4'>
                                    COMPANY INFO
                                </p>
                                <a href=''>
                                    <p className='text-primary mb-2'>
                                        About Overlays Next
                                    </p>
                                </a>
                                <a href=''>
                                    <p className='text-primary mb-2'>
                                        Social Responsibility
                                    </p>
                                </a>
                                <a href=''>
                                    <p className='text-primary mb-2'>
                                        Affiliate
                                    </p>
                                </a>
                                <a href=''>
                                    <p className='text-primary mb-2'>
                                        Fashion Blogger
                                    </p>
                                </a>
                            </div>

                            <div className='smallText space-y-4'>
                                <p className='text-white uppercase mb-4'>
                                    HElp & Support
                                </p>
                                <a href=''>
                                    <p className='text-primary mb-2'>
                                        Shipping Info
                                    </p>
                                </a>
                                <a href=''>
                                    <p className='text-primary mb-2'>
                                        Returns
                                    </p>
                                </a>
                                <a href=''>
                                    <p className='text-primary mb-2'>
                                        How to Order
                                    </p>
                                </a>
                                <a href=''>
                                    <p className='text-primary mb-2'>
                                        How to Track
                                    </p>
                                </a>
                                <a href=''>
                                    <p className='text-primary'>
                                        Size Chart
                                    </p>
                                </a>
                            </div>

                            <div className='smallText space-y-4'>
                                <p className='text-white uppercase mb-4'>
                                    customer care
                                </p>
                                <a href=''>
                                    <p className='text-primary mb-2'>
                                        Contact Us
                                    </p>
                                </a>
                                <a href=''>
                                    <p className='text-primary mb-2'>
                                        Payment
                                    </p>
                                </a>
                                <a href=''>
                                    <p className='text-primary mb-2'>
                                        Bonus Point
                                    </p>
                                </a>
                                <a href=''>
                                    <p className='text-primary'>
                                        Notices
                                    </p>
                                </a>
                            </div>
                        </div>

                        <div className='mt-10 xl:mt-[136px]'>
                            <p className='text-primary'>
                                ©2010-2022 Overlays Next All Rights Reserved
                            </p>
                            <div className='mt-6 flex'>
                                <a href=''>
                                    <p className='text-white underline'>
                                        Privacy Center
                                    </p>
                                </a>
                                &nbsp;|&nbsp;
                                <a href=''>
                                    <p className='text-white underline'>
                                        Privacy & Cookie Policy
                                    </p>
                                </a>
                                &nbsp;|&nbsp;
                                <a href=''>
                                    <p className='text-white underline'>
                                        Manage Cookies
                                    </p>
                                </a>
                                &nbsp;|&nbsp;
                            </div>

                            <div className='mt-6 flex'>
                                <a href=''>
                                    <p className='text-white underline'>
                                        Terms & Conditions
                                    </p>
                                </a>
                                &nbsp;|&nbsp;
                                <a href=''>
                                    <p className='text-white underline'>
                                        Copyright Notice
                                    </p>
                                </a>
                                &nbsp;|&nbsp;
                                <a href=''>
                                    <p className='text-white underline'>
                                        Imprint
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* Socials */}
                    <div className='md:w-[40%]'>
                        <div className='min-w-[550px] xl:flex justify-between'>
                            <div className=''>
                                <p className='smallText text-white mb-4 uppercase'>
                                    Socials
                                </p>

                                <div className='flex gap-4'>
                                    {socials.map((e, id) => (
                                        <a key={id} href={e.link}>
                                            <img
                                                src={e.img}
                                                alt={e.img}
                                                className='size-[32px]'
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className='mt-4 xl:mt-0'>
                                <p className='smallText text-white mb-4 uppercase'>
                                    Platforms
                                </p>

                                <div className='flex gap-4'>
                                    <a href="">
                                        <img
                                            src="/android.png"
                                            alt="Android"
                                            className='size-[32px]'
                                        />
                                    </a>
                                    <a href="">
                                        <img
                                            src="/apple.png"
                                            alt="Apple"
                                            className='size-[32px]'
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="smallText md:flex gap-4 mt-10 w-full">
                            <form
                                className='flex flex-col w-[300px] sm:w-full h-auto'
                            >
                                <label className='flex flex-col'>
                                    <span className='text-white smallText mb-2 text-nowrap'>
                                        SIGN UP FOR OVERLAYS NEXT NEWS
                                    </span>
                                    <input
                                        type="email"
                                        name="email"
                                        // value={form.email}
                                        required
                                        // onChange={handleChange}
                                        placeholder="Your email"
                                        className="bg-white py-4 px-6 placeholder:text-secondary outline-none border-none"
                                    />
                                </label>
                            </form>
                            <button className='py-4 px-6 bg-white text-primary mt-7'>
                                Subcribe
                            </button>
                        </div>
                        <p className='text-[13px] mt-4 text-white'>
                            By clicking the SUBSCRIBE button, you are agreeing to our
                            <spna className="text-primary underline">
                                {" "} Privacy & Cookie Policy
                            </spna>
                        </p>

                        <div className='mt-10 sm:mt-20'>
                            <p className='uppercase text-white'>
                                We Accept
                            </p>
                            <div className="flex mt-4 flex-wrap gap-4">
                                {payments.map((e, id) => (
                                    <img
                                        key={id}
                                        src={e.img}
                                        alt={e.img}
                                        className='w-[50px] h-[32px] object-contain'
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer