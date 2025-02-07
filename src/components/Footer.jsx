import React from 'react';
import { RiFacebookCircleFill, RiTwitterXFill } from "react-icons/ri";
import { FaGooglePlus, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; // Email Icon

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto flex flex-col px-6">

                {/* Row: INTENSE + Other Headings */}
                <div className="flex justify-between items-start w-full flex-wrap gap-6">

                    {/* INTENSE Heading */}
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold">INTENSE</h2>
                        <p className="text-white opacity-30 text-sm mt-0.5">Real Estate</p>

                        {/* Social Icons - Small & Row-wise */}
                        <div className="flex space-x-3 mt-2">
                            <RiFacebookCircleFill className="text-white hover:text-blue-500 cursor-pointer" size={20} />
                            <RiTwitterXFill className="text-white hover:text-gray-400 cursor-pointer" size={20} />
                            <FaGooglePlus className="text-white hover:text-red-500 cursor-pointer" size={20} />
                            <FaLinkedin className="text-white hover:text-blue-600 cursor-pointer" size={20} />
                        </div>
                    </div>

                    {/* NEWSLETTER Section */}
                    <div className="max-w-xs mx-auto text-center">
                        <h2 className="text-lg font-bold">NEWSLETTER</h2>
                        <p className="text-white opacity-70 text-xs mt-2">
                            Keep up with the latest company news and events. Enter your e-mail and subscribe to our newsletter.
                        </p>

                        {/* Email Input + Subscribe Button */}
                        <div className="flex items-center bg-white mt-3 overflow-hidden rounded-lg">
                            <div className="bg-gray-800 p-2 flex items-center justify-center">
                                <MdEmail className="text-white" size={22} />
                            </div>
                            <input 
                                type="email" 
                                placeholder="Type your E-Mail"
                                className="flex-1 text-sm p-2 outline-none text-black"
                            />
                            <button className="bg-yellow-400 text-white font-bold text-sm px-4 py-2 transition-all duration-300 hover:bg-yellow-500">
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>

                    {/* USEFUL LINKS Section */}
                    <div>
                        <h2 className="text-lg font-bold">USEFUL LINKS</h2>
                        <ul className="list-disc mt-2 space-y-1 pl-4 marker:text-yellow-400 text-sm">
                            <li>Properties</li>
                            <li>Amenities</li>
                            <li>Rental</li>
                            <li>Mortgages</li>
                            <li>Agents</li>
                        </ul>
                    </div>

                    {/* LATEST NEWS */}
                    <div>
                        <h2 className="text-lg font-bold">LATEST NEWS</h2>
                        <ul className="mt-2 space-y-2">
                            <li className="flex flex-col">
                                <span className="flex items-center text-xs text-gray-400">
                                    <span className="text-yellow-400 mr-2">→</span> 05/14/2022
                                </span>
                                <span className="text-sm font-medium pl-4">Top 10 Apartments in LA</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="flex items-center text-xs text-gray-400">
                                    <span className="text-yellow-400 mr-2">→</span> 05/14/2023
                                </span>
                                <span className="text-sm font-medium pl-4">Choosing a Rental Property</span>
                            </li>
                            <li className="flex flex-col">
                                <span className="flex items-center text-xs text-gray-400">
                                    <span className="text-yellow-400 mr-2">→</span> 05/14/2024
                                </span>
                                <span className="text-sm font-medium pl-4">Features of Mortgage Loans</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* COPYRIGHT TEXT - CENTERED AT BOTTOM */}
                <div className="text-center text-xs text-white opacity-50 mt-8">
                    Intense Real Estate © 2025 . Privacy Policy
                </div>

            </div>
        </footer>
    );
};

export default Footer;













