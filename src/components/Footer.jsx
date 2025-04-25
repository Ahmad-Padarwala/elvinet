import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-[#27242C] p-6'>
            <div className='sm:border-[8px] border-[4px] text-white border-black '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-[clamp(20px,4vw,50px)]'>
                    <div>
                        <h2 className='text-white text-lg mb-3 font-bold'>Switches and Accessories</h2>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><NavLink to="/">Switches</NavLink></li>
                            <li><NavLink to="/">Cober Plates</NavLink></li>
                            <li><NavLink to="/">Door Bells</NavLink></li>
                            <li><NavLink to="/">Security System</NavLink></li>
                            <li><NavLink to="/">Night Lamps</NavLink></li>
                            <li><NavLink to="/">Spike Guards</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-white text-lg mb-3 font-bold'>LED Lighting</h2>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><NavLink to="/">LED Tube Lights</NavLink></li>
                            <li><NavLink to="/">Wall Lights</NavLink></li>
                            <li><NavLink to="/">Strip Lights</NavLink></li>
                            <li><NavLink to="/">Slim Panel Lights</NavLink></li>
                            <li><NavLink to="/">LED COB Spot Lights</NavLink></li>
                            <li><NavLink to="/">Flood Lights</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-white text-lg mb-3 font-bold'>Fans</h2>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><NavLink to="/">Ceiling Fans</NavLink></li>
                            <li><NavLink to="/">Wall Fans</NavLink></li>
                            <li><NavLink to="/">Table Fans</NavLink></li>
                            <li><NavLink to="/">Ventilation and exhuast fans</NavLink></li>
                            <li><NavLink to="/">Industrial fans</NavLink></li>
                            <li><NavLink to="/">Register A Warranty</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-white text-lg mb-3 font-bold'>Home Application</h2>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><NavLink to="/">Wired Solutuion</NavLink></li>
                            <li><NavLink to="/">Retro fit Solution</NavLink></li>
                            <li><NavLink to="/">Pipes & Fitting</NavLink></li>
                            <li><NavLink to="/">Pipe</NavLink></li>
                            <li><NavLink to="/">Fittings</NavLink></li>
                            <li><NavLink to="/">Oval Conduits</NavLink></li>
                            <li><NavLink to="/">Home Protection</NavLink></li>
                            <li><NavLink to="/">Wires & Cables</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-[clamp(20px,4vw,50px)] pt-0'>
                    <div>
                        <h2 className='text-white text-lg mb-3 font-bold'>Company</h2>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><NavLink to="/">About Us</NavLink></li>
                            <li><NavLink to="/">Clientele</NavLink></li>
                            <li><NavLink to="/">Media</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-white text-lg mb-3 font-bold'>Careers</h2>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><NavLink to="/">Store Locator</NavLink></li>
                            <li><NavLink to="/">Catalogues</NavLink></li>
                            <li><NavLink to="/">Technical Manuals</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <h2 className='text-white text-lg mb-3 font-bold'>Contact Us</h2>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li><NavLink to="mailto:info@gmmodular.com">info@gmmodular.com</NavLink></li>
                            </ul>
                        </div>
                        <div className='flex gap-2 mt-5'>
                            <NavLink className='bg-[#727071] hover:bg-[#616060] transition duration-300 text-[16px] w-[35px] h-[35px] rounded-full flex items-center justify-center'>
                                <FaFacebookF />
                            </NavLink>
                            <NavLink className='bg-[#727071] hover:bg-[#616060] transition duration-300 text-[16px] w-[35px] h-[35px] rounded-full flex items-center justify-center'>
                                <FaInstagram />
                            </NavLink>
                            <NavLink className='bg-[#727071] hover:bg-[#616060] transition duration-300 text-[16px] w-[35px] h-[35px] rounded-full flex items-center justify-center'>
                                <FaTwitter />
                            </NavLink>
                            <NavLink className='bg-[#727071] hover:bg-[#616060] transition duration-300 text-[16px] w-[35px] h-[35px] rounded-full flex items-center justify-center'>
                                <FaLinkedinIn />
                            </NavLink>
                            <NavLink className='bg-[#727071] hover:bg-[#616060] transition duration-300 text-[16px] w-[35px] h-[35px] rounded-full flex items-center justify-center'>
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
