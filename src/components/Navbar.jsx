import React, { useState } from 'react';
import { IoMdMailOpen, IoIosCall } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className='w-full px-4 sm:px-8 py-4 bg-white shadow-md'>
            {/* Upper Section */}
            <div className='flex flex-col sm:flex-row justify-between sm:items-center py-2 border-b-2 border-gray-300'>
                <ul className='flex gap-3 text-sm sm:text-md text-gray-600 justify-center sm:justify-start'>
                    <li className='uppercase cursor-pointer'>Login</li>
                    <li className='uppercase cursor-pointer'>Register</li>
                </ul>
                <ul className='flex gap-4 text-sm sm:text-md text-gray-800 justify-center sm:justify-end'>
                    <li className='flex justify-center items-center gap-2'>
                        <IoMdMailOpen /> info@realestate.in
                    </li>
                    <li className='flex justify-center items-center gap-2'>
                        <IoIosCall /> 1800-1234-567
                    </li>
                </ul>
            </div>

            {/* Main Navigation Section */}
            <div className='flex justify-between items-center py-4'>
                {/* Logo Section */}
                <span className='text-2xl font-bold'>
                    INTENSE <span className='text-sm text-yellow-500'>real estate</span>
                </span>

                {/* Hamburger Menu for Mobile */}
                <div className='sm:hidden text-2xl cursor-pointer' onClick={toggleMenu}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </div>

                {/* Navigation Links */}
                <ul
                    className={`flex flex-col sm:flex-row gap-6 text-lg sm:text-xl uppercase font-bold bg-white sm:bg-transparent absolute sm:static top-[70px] left-0 w-full sm:w-auto transition-all duration-300 ${
                        menuOpen ? 'block' : 'hidden sm:flex'
                    }`}
                >
                    <li className='cursor-pointer hover:text-yellow-500 px-4 sm:px-0'>Home</li>
                    <li className='cursor-pointer hover:text-yellow-500 px-4 sm:px-0'>Catalog</li>
                    <li className='cursor-pointer hover:text-yellow-500 px-4 sm:px-0'>Submit Property</li>
                    <li className='cursor-pointer hover:text-yellow-500 px-4 sm:px-0'>Services</li>
                    <li className='cursor-pointer hover:text-yellow-500 px-4 sm:px-0'>About</li>
                    <li className='cursor-pointer hover:text-yellow-500 px-4 sm:px-0'>Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
