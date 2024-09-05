import about from '../../assets/pic/about.png'
const AboutSec = () => {
    return (
        <div className='bg-[#A9E1FE] border-y border-black'>
            <div className="container flex flex-col md:flex-row-reverse pt-16 justify-center">
                <div className="w-full md:w-1/2 flex flex-col justify-center pb-10 p-3">
                    <h3 className='uppercase Mrs text-center md:text-start text-white text-5xl md:text-7xl '>About us</h3>
                    <div className='pt-6 space-y-2 text-xl text-center md:text-start'>
                        <p>
                            VIKTOR is a simian who seeks to become a crypto millionaire alongside his friends in this bull run!
                        </p>
                        <p>
                            VIKTOR mission is to conquer all meme coins and establish his dominion as the king of cryptocurrencies.
                        </p>
                        <p>
                            He won't stop until he achieves it!
                        </p>
                    </div>

                    <div className='flex items-center justify-center md:justify-start gap-3 pt-6'>
                        <button className='myBorder rounded-full border-none px-6 py-1 bg-[#FFBC00]'>See Cart</button>
                        <button className='myBorder rounded-full !border-[#ffbc00] px-6 py-1 border-2'>Buy Now</button>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-3 flex">
                    <img className='w-2/3 md:w-1/2 mx-auto' src={about} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutSec;