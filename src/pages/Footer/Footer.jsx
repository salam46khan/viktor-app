import './Footer.css';
import logo from '../../assets/svg/loooogo.svg'
import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footer py-10 border-t border-black'>
            <div className="container">
                <div className='py-5 w-full max-w-5xl mx-auto'>
                    <div className=" text-center mx-auto">
                        <img className='mx-auto' src={logo} alt="" />
                        <p className='Mrs text-4xl text-[#FFBC00]'>VIKTOR</p>
                    </div>
                    <p className='py-4 text-2xl  text-center'>
                        <span className='text-[#FFBC00]'>Disclaimer:</span> VIKTOR is a meme coin made for entertainment purposes. We make no promises about future value, so be responsible. Crypto may be unregulated in your jurisdiction. Profits may be subject to taxes. Always do your own research before
                    </p>
                    <div className='flex justify-center gap-5 items-center'>
                        <Link to={'/'}>
                            <button className='h-12 w-12 rounded-full myBorder bg-white text-black flex justify-center items-center'>
                                <FaTelegramPlane className='text-2xl' />
                            </button>
                        </Link>
                        <Link to={'/'}>
                            <button className='h-12 w-12 rounded-full myBorder bg-white text-black flex justify-center items-center'>
                                <FaXTwitter className='text-2xl' />
                            </button>
                        </Link>
                    </div>

                </div>
                <div className='flex justify-center w-full'>
                    <p className='text-center block text-xl'>Copyright © 2024 $VIKTOR. All rights reserved</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;