import logo from '../../assets/svg/logo.svg'
const MarqueeItem = () => {
    return (
        <div className='flex items-center gap-2 pt-2 px-5'>
            <img src={logo} alt="" />
            <h2 className='Mrs text-white text-3xl'>VIKTOR</h2>
        </div>
    );
};

export default MarqueeItem;