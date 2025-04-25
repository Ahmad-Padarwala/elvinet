import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-[#27242C] p-6'>
            <div className='border-[8px] text-white border-black '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-[clamp(20px,4vw,50px)]'>
                    <div>
                        <h2 className='text-white text-lg mb-3 font-bold'>Switches and Accessories</h2>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>Switches</li>
                            <li>Cober Plates</li>
                            <li>Door Bells</li>
                            <li>Security System</li>
                            <li>Night Lamps</li>
                            <li>Spike Guards</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-white text-lg mb-3 font-bold'>LED Lighting</h2>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>LED Tube Lights</li>
                            <li>Wall Lights</li>
                            <li>Strip Lights</li>
                            <li>Slim Panel Lights</li>
                            <li>LED COB Spot Lights</li>
                            <li>Flood Lights</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-white text-lg mb-3 font-bold'>Fans</h2>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>Ceiling Fans</li>
                            <li>Wall Fans</li>
                            <li>Table Fans</li>
                            <li>Ventilation and exhuast fans</li>
                            <li>Industrial fans</li>
                            <li>Register A Warranty</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-white text-lg mb-3 font-bold'>Home Application</h2>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>Wired Solutuion</li>
                            <li>Retro fit Solution</li>
                            <li>Pipes & Fitting</li>
                            <li>Pipe</li>
                            <li>Fittings</li>
                            <li>Oval Conduits</li>
                            <li>Home Protection</li>
                            <li>Wires & Cables</li>
                        </ul>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-[clamp(20px,4vw,50px)] pt-0'>
                    <div>
                        <h2 className='text-white text-lg mb-3 font-bold'>Company</h2>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>About Us</li>
                            <li>Clientele</li>
                            <li>Media</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-white text-lg mb-3 font-bold'>Careers</h2>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>Store Locator</li>
                            <li>Catalogues</li>
                            <li>Technical Manuals</li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <h2 className='text-white text-lg mb-3 font-bold'>Contact Us</h2>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li>info@gmmodular.com</li>
                            </ul>
                        </div>
                        <div className='flex gap-2 mt-5'>
                            <NavLink className='bg-[#727071] text-[16px] w-[35px] h-[35px] rounded-full flex items-center justify-center'>
                                <FaFacebookF />
                            </NavLink>
                            <NavLink className='bg-[#727071] text-[16px] w-[35px] h-[35px] rounded-full flex items-center justify-center'>
                                <FaInstagram />
                            </NavLink>
                            <NavLink className='bg-[#727071] text-[16px] w-[35px] h-[35px] rounded-full flex items-center justify-center'>
                                <FaTwitter />
                            </NavLink>
                            <NavLink className='bg-[#727071] text-[16px] w-[35px] h-[35px] rounded-full flex items-center justify-center'>
                                <FaLinkedinIn />
                            </NavLink>
                            <NavLink className='bg-[#727071] text-[16px] w-[35px] h-[35px] rounded-full flex items-center justify-center'>
                                <FaYoutube />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
