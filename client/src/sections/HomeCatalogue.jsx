import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


const HomeCatalogue = () => {
  return (
    <div className='w-full h-full relative'>
    <img
        src='/Home/catalogue.webp'
        alt='Overlays Cover'
        className='w-full  bg-fixed bg-cover object-cover z-0'
    />

    <div className='absolute inset-0 z-10'>
        <div className='wrapper relative'>

            <a href="">
                <button className="text-sm md:text-xl group transition duration-300 ease-in-out rounded-sm
                text-white py-1 px-3 bg-primary hover:bg-[#EF476F]/50 flex justify-center items-center absolute bottom-[20%]"
                >
                    See Now
                    <FontAwesomeIcon icon={faAngleRight}
                        className='ml-3 my-auto group-hover:translate-x-2 transition duration-300 ease-in-out'
                    />
                </button>
            </a>
        </div>
    </div>
</div>
  )
}

export default HomeCatalogue