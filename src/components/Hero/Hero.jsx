import heroImg from '../../assets/pic/hero-bg.png'
import './Horo.css';
import { CiWallet } from "react-icons/ci";
import sol from '../../assets/svg/Ellipse 2.svg';
import viktor from '../../assets/svg/viktor.svg'
import { RxLoop } from "react-icons/rx";


const Hero = () => {
    return (
        <div className='relative text-md border-b border-black'>
            <img className='min-h-[120vh] -z-10 min-w-full max-w-full' src={heroImg} alt="" />
            <div className=" container z-10 absolute top-20 md:top-28 left-1/2 -translate-x-1/2 flex flex-col md:flex-row">
                <div className='w-full md:w-[60%] py-5 px-2'>
                    <h1 className='uppercase text-5xl md:text-[4em] lg:text-[6em] text-center md:text-left font-bold Mrs text-white'>
                        welcome TO <br /> <span className='text-[#FFBC00]'>VIKTOR</span> TOKEN <br /> PRESALE
                    </h1>
                </div>
                <div className='w-full md:w-[40%] md:p-5 p-3 flex justify-center'>
                    <div className='bg-[#fffffa] w-full max-w-xl hero-card p-3 md:p-5'>
                        <h4 className='text-xl font-semibold text-center font-serif Milky'>Buy to win in the meme VIKTOR!</h4>
                        <div className='flex justify-center items-center gap-2 md:gap-3 pt-4 py-3'>
                            <div className='card-item py-3 overflow-hidden text-center -space-y-1 w-1/4'>
                                <h2 className='text-3xl font-bold text-white stroke'>20</h2>
                                <p className='textarea-xs md:text-[16px]'>Days</p>
                            </div>
                            <div className='card-item py-3 overflow-hidden text-center -space-y-1 w-1/4'>
                                <h2 className='text-3xl font-bold text-white stroke'>8</h2>
                                <p className='textarea-xs md:text-[16px]'>Hours</p>
                            </div>
                            <div className='card-item py-3 overflow-hidden text-center -space-y-1 w-1/4'>
                                <h2 className='text-3xl font-bold text-white stroke'>38</h2>
                                <p className='textarea-xs md:text-[16px]'>Minutes</p>
                            </div>
                            <div className='card-item py-3 overflow-hidden text-center -space-y-1 w-1/4'>
                                <h2 className='text-3xl font-bold text-white stroke'>21</h2>
                                <p className='textarea-xs md:text-[16px]'>Seconds</p>
                            </div>
                        </div>

                        <div className="flex w-full flex-col py-3">
                            <div className="divider divider-neutral">1 Solana = 100 VIKTOR</div>
                        </div>

                        <div className='py-2'>
                            <div className='flex justify-between'>
                                <p className=''>Amount in SOL you pay:</p>
                                <div className='flex gap-2 items-center'>
                                    <CiWallet />
                                    <p className=''>0.00 SOL</p>
                                </div>
                            </div>
                            <div className='myBorder rounded-full mt-1 p-1 flex justify-between items-center'>
                                <div className='flex w-32 items-center p-1 gap-2 myBorder rounded-full bg-[#FFF7E7]'>
                                    <img className='h-9' src={sol} alt="" />
                                    <p>SOL</p>
                                </div>
                                <p className='px-2'>0.00</p>
                            </div>
                        </div>

                        <div className='h-8 my-5 relative flex justify-center'>
                            <hr className='border-black absolute w-full left-0 top-1/2 translate-y-1/2 z-0' />
                            <div className='h-8 w-8 border border-1 border-black rounded-full flex justify-center items-center bg-[#fffffa] z-20 relative'>
                                <RxLoop className='rotate-90 text-[#FF9D01]' />
                            </div>
                        </div>

                        <div className='py-2'>
                            <div className='flex justify-between'>
                                <p className=''>Amount in SOL you pay:</p>
                                
                            </div>
                            <div className='myBorder rounded-full mt-1 p-1 flex justify-between items-center'>
                                <div className='flex w-32 items-center p-1 gap-2 myBorder rounded-full bg-[#FFF7E7]'>
                                    <img className='h-9 border' src={viktor} alt="" />
                                    <p>VIKTOR</p>
                                </div>
                                <p className='px-2'>0.00</p>
                            </div>
                        </div>

                        <button className='p-3 text-xl mt-5 bg-[#FFBC00] myBorder rounded-full w-full'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;