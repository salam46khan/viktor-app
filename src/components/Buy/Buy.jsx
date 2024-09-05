import buy from '../../assets/pic/buy.png'
import buy1 from '../../assets/svg/buy-1.svg'
import buy2 from '../../assets/svg/Ellipse 2.svg'
import buy3 from '../../assets/svg/viktor.svg'
const Buy = () => {
    return (
        <div className='bg-[#A9E1FE] border-black border-y'>
            <div className="container flex flex-col md:flex-row pt-16 justify-center">
                
                <div className="w-full md:w-1/2 flex flex-col justify-center pb-10 p-3">
                    <h3 className=' Mrs text-center md:text-start text-white text-5xl md:text-7xl '>how To Buy</h3>

                    <div className='space-y-5 pt-10'>
                        <div className='myBorder rounded-xl p-3 flex items-center gap-3'>
                            <div className='myBorder rounded-md p-2 bg-[#C5FDFF]'>
                                <img className='h-10 w-10' src={buy1} alt="" />
                            </div>
                            <div className='space-y-1'>
                                <h5 className='text-2xl'>Create a Crypto Wallet</h5>
                                <p className=''>Download a wallet app and follow the setup steps.</p>
                            </div>
                        </div>
                        <div className='myBorder rounded-xl p-3 flex items-center gap-3'>
                            <div className='myBorder rounded-md p-2 bg-[#C5FDFF]'>
                                <img className='h-10 w-10' src={buy2} alt="" />
                            </div>
                            <div className='space-y-1'>
                                <h5 className='text-2xl'>Get Some $SOL</h5>
                                <p className=''>Buy from the app or deposit from a crypto exchange.</p>
                            </div>
                        </div>
                        <div className='myBorder rounded-xl p-3 flex items-center gap-3'>
                            <div className='myBorder rounded-md p-2 bg-[#C5FDFF]'>
                                <img className='h-10 w-10' src={buy3} alt="" />
                            </div>
                            <div className='space-y-1'>
                                <h5 className='text-2xl'>Get cool with $VIKTOR</h5>
                                <p className=''>Connect your wallet and get your $VIKTOR</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-3 flex">
                    <img className='w-2/3 md:w-1/2 mx-auto' src={buy} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Buy;