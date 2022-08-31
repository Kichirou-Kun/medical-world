import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../assets/icons/logo_hori.svg";
import cartIcon from "../../../assets/icons/cart.svg";
import orderIcon from "../../../assets/icons/order_active@2x.svg";
import notiIcon from "../../../assets/icons/noti_active@2x.svg";
import userIcon from "../../../assets/icons/pp_active@2x.svg";

const Header = () => {
    return (
        <nav className='w-full sticky bg-bodyBg z-20 top-0 left-0 py-6'>
            {/* desktop size*/}
            <div className='container md:px-16 px-8 flex items-center justify-between relative'>
                {/* Search Box */}
                <div className='hidden md:flex relative xl:w-275 w-225 bg-white h-8 rounded-md'>
                    <input type="text" placeholder="SEARCH ITEMS" className='h-8 pl-4 xl:w-225 w-180 bg-transparent placeholder:text-mainColor placeholder:text-xs text-md font-normal' />
                    <div className='absolute top-1 right-4 h-4 w-4 rounded-full bg-hoverColor cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out'>
                        <div className='absolute -bottom-1 right-0 h-1 w-1 rounded-full bg-mainColor'>
                        </div>
                    </div>
                </div>

                {/* Logo Image */}
                <Link to="/">
                    <img src={logo} alt="medical world" className='w-130 lg:w-150 xl:w-225' />
                </Link>

                {/* Menu Actions */}
                <ul className='hidden md:flex items-center'>
                    <li>
                        <Link to="/" className='font-semibold text-textColor xl:ml-8 ml-4 text-md'> <span className='hidden lg:inline-block'>Cart</span> <img src={cartIcon} alt='cart' className='lg:hidden inline-block w-8 h-8' /></Link>
                    </li>
                    <li>
                        <Link to="/orders" className='font-semibold text-textColor xl:ml-8 ml-4 text-md'> <span className='hidden lg:inline-block'>Orders</span> <img src={orderIcon} alt='orders' className='lg:hidden inline-block w-6 h-6' /></Link>
                    </li>
                    <li>
                        <Link to="/notifications" className='font-semibold text-textColor xl:ml-8 ml-4 text-md'> <span className='hidden lg:inline-block'>Notifications</span> <img src={notiIcon} alt='notifications' className='lg:hidden inline-block w-6 h-6' /></Link>
                    </li>
                    <li>
                        <Link to="/profile" className='font-semibold text-textColor xl:ml-8 ml-4 text-md'> <span className='hidden lg:inline-block'>Profile</span> <img src={userIcon} alt='profile' className='lg:hidden inline-block w-6 h-6' /></Link>
                    </li>
                </ul>
                <div className='md:hidden ml-8 hover:scale-110 transition-transform duration-300 ease-in-out flex absolute xs:top-1 lg:top-2 right-8 h-4 w-4 rounded-full bg-hoverColor cursor-pointer'>
                    <div className='absolute -bottom-1 right-0 h-1 w-1 rounded-full bg-mainColor'>
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <nav className='md:hidden bg-white bottom-0 left-0 w-full fixed z-10'>
                <div className='flex items-center justify-between'>
                    <div className='px-8 py-2  rounded-lg cursor-pointer '>
                        <img src={cartIcon} alt="cart icon" className='h-6 hover:scale-125 transition-transform duration-300 ease-in-out' />
                    </div>
                    <div className='px-8 py-2  rounded-lg cursor-pointer'>
                        <img src={orderIcon} alt="orders icon" className='h-6 hover:scale-125 transition-transform duration-300 ease-in-out' />
                    </div>
                    <div className='px-8 py-2 rounded-lg cursor-pointer'>
                        <img src={notiIcon} alt="noti icon" className='h-6 hover:scale-125 transition-transform duration-300 ease-in-out' />
                    </div>
                    <div className='px-8 py-2 rounded-lg cursor-pointer'>
                        <img src={userIcon} alt="user icon" className='h-6 hover:scale-125 transition-transform duration-300 ease-in-out' />
                    </div>
                </div>
            </nav>
        </nav>
    )
}

export default Header
