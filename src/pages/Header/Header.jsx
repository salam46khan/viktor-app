import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/svg/loooogo.svg'

const Header = () => {
    const navBar = <>
        <li><NavLink to={'/'}>About</NavLink></li>
        <li><NavLink to={'/pre-sale'}>Pre-Sale</NavLink></li>
        <li><NavLink to={'/airdrop'}>Airdrop</NavLink></li>
        <li><NavLink to={'/token'}>Tokenomics</NavLink></li>
        <li><NavLink to={'/aduit'}>Aduit</NavLink></li>
    </>
    return (
        <div className="navbar z-50 container absolute top-6 left-1/2 -translate-x-1/2 bg-[#fffffa] myBorder rounded-full">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu uppercase text-[#656565] menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navBar}
                    </ul>
                </div>
                <Link className="px-2 flex-col flex" to={'/'}>
                    <img className="h-7" src={logo} alt="" />
                    <p className="text-xs stroke text-[#FFBC00]">VIKTOR</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-[#656565] uppercase menu-horizontal px-1">
                    {navBar}
                </ul>
            </div>
            <div className="navbar-end flex gap-2 md:gap-2 px-1">
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
    );
};

export default Header;