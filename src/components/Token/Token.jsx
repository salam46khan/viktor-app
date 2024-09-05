import './Token.css';
import car from '../../assets/pic/token-car.png'

const Token = () => {
    return (
        <div className="py-16 token p-3 border-black border-y">
            <div className='container'>
                <h3 className='uppercase Mrs text-center text-white text-5xl md:text-7xl '>tokenomics</h3>
                <div className='flex flex-col py-8 md:flex-row justify-center gap-6 md:gap-16 items-stretch'>
                    <div className='bg-[#A9E1FE] myBorder rounded-xl text-center space-y-4 py-10 w-full md:w-1/3 lg:w-1/4'>
                        <h4 className='text-5xl text-[#FFBC00] Mrs'>822,9M</h4>
                        <p className='text-2xl'>Total token supply</p>
                    </div>
                    <div className='bg-[#A9E1FE] myBorder rounded-xl text-center space-y-4 py-10 w-full md:w-1/3 lg:w-1/4'>
                        <h4 className='text-5xl text-[#FFBC00] Mrs'>177.1m</h4>
                        <p className='text-2xl'>Burned token</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img className='w-full max-w-sm' src={car} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Token;