import './Banner.css';
// import sky from '../../assets/pic/Group (3).png'
import building from '../../assets/pic/build.png'
import car from '../../assets/pic/hero area.png'
import '../../assets/font.css'
const Banner = () => {
    return (
        <div className='banner relative'>
            <div className='absolute -z-0 w-full bottom-0 build left-0 border'>
                <img className=' w-full -z-20 absolute bottom-2/3 max-w-6xl left-1/2 -translate-x-1/2' src={building} alt="" />
                <div className='h-16 w-full absolute bottom-0 -z-10 build-border'>
                </div>
            </div>
            <div className='absolute car  -z-0 w-full bottom-0 left-0 '>
                <img className=' w-full max-w-5xl -z-0 absolute bottom-0 left-1/2 -translate-x-1/2' src={car} alt="" />
                
            </div>
            
            <div className="container relative z-40">
                <h1 className='text-3xl customFont'>
                   
                    quibusdam. Sit autem, dolore est voluptatem maiores veniam ex quod niet mollitia asperiores atque officia pariatur dignissimos beatae molestiae dolorum illum quasi ratione tenetur ab alias corrupti consectetur autem dolor? Iure, dolorem. Magni est dolores voluptatem optio recusandae. Autem, qui reprehenderit exercitationem, neque maxime explicabo, accusantium possimus tempora animi error labore cumque harum molestiae itaque.
                </h1>
            </div>
        </div>
    );
};

export default Banner;