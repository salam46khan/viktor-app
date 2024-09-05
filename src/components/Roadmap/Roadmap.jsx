import roadmap from '../../assets/pic/roadmap.png'
import './Roadmap.css'
const Roadmap = () => {
    return (
        <div className='relative roadmap py-20 border-black border-y'>
            {/* <div className=''>
                <img className='w-full relative -z-10 min-h-[60vh]' src={roadmap} alt="" />
            </div> */}
            <div className=" container p-3 z-10 top-16 pb-60">
                <h3 className='uppercase Mrs text-center text-white text-5xl md:text-7xl '>Roadmap</h3>

                <div className='space-y-7 md:space-y-10 mt-10 md:mt-20'>
                    <div className='md:pl-5 pl-4'>
                        <div className='myBorder  inline-block p-4 rounded-2xl bg-[#B3EBFF]'>
                            <p className='text-2xl'>Phase 1: Meme</p>
                        </div>
                    </div>
                    <div className='md:pl-16 pl-8'>
                        <div className='myBorder  inline-block p-4 rounded-2xl bg-[#B3EBFF]'>
                            <p className='text-2xl '>Phase 1: Meme</p>
                        </div>
                    </div>
                    <div className='md:pl-28 pl-12'>
                        <div className='myBorder  inline-block p-4 rounded-2xl bg-[#B3EBFF]'>
                            <p className='text-2xl'>Phase 1: Meme</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;