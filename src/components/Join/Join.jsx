import { Link } from 'react-router-dom';
import join from '../../assets/pic/join.png'
import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import jupitar from '../../assets/pic/jupiter-logo 1.png'
const Join = () => {
    return (
        <div className='bg-[#A9E1FE] border-y border-black'>
            <div className="container flex flex-col md:flex-row-reverse pt-16 justify-center">
                <div className="w-full md:w-1/2 flex flex-col justify-center pb-10 p-3">
                    <h3 className='uppercase Mrs text-center md:text-start text-white text-5xl md:text-7xl '>Join community</h3>
                    <div className='pt-6 space-y-2 text-xl text-center md:text-start'>
                        <p>
                            We invite you to join our VIKTOR Community and stay up to date with all the latest updates and news from VIKTOR!
                        </p>
                    </div>

                    <div className='flex items-center justify-center md:justify-start gap-3 pt-6'>
                        <Link to={'/'}>
                            <button className='h-12 w-12 rounded-full myBorder bg-white text-black flex justify-center items-center'>
                                <FaTelegramPlane className='text-2xl'/>
                            </button>
                        </Link>
                        <Link to={'/'}>
                            <button className='h-12 w-12 rounded-full myBorder bg-white text-black flex justify-center items-center'>
                                <FaXTwitter className='text-2xl'/>
                            </button>
                        </Link>
                        <Link to={'/'}>
                            <button className='h-12 w-12 rounded-full myBorder bg-white text-black flex justify-center items-center'>
                                <FaInstagram className='text-2xl'/>
                            </button>
                        </Link>
                        <Link to={'/'}>
                            <button className='h-12 w-12 rounded-full myBorder bg-white text-black flex justify-center items-center'>
                                <img className='w-1/2' src={jupitar} alt="" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-3 flex">
                    <img className='w-2/3 md:w-1/2 mx-auto' src={join} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Join;