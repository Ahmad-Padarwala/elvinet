import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-[#27242C] p-4'>
            <div className='border-4 text-white border-black '>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-[clamp(20px,4vw,50px)]'>
                    <div>
                        <h2 className='text-white text-xl mb-3 font-bold'>Switches and Accessories</h2>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>About Us</li>
                            <li>Clientele</li>
                            <li>Media</li>
                            <li>About Us</li>
                            <li>Clientele</li>
                            <li>Media</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-white text-xl mb-3 font-bold'>LED Lighting</h2>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>About Us</li>
                            <li>Clientele</li>
                            <li>Media</li>
                            <li>About Us</li>
                            <li>Clientele</li>
                            <li>Media</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-white text-xl mb-3 font-bold'>Fans</h2>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>About Us</li>
                            <li>Clientele</li>
                            <li>Media</li>
                            <li>About Us</li>
                            <li>Clientele</li>
                            <li>Media</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-white text-xl mb-3 font-bold'>Home Application</h2>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>About Us</li>
                            <li>Clientele</li>
                            <li>Media</li>
                            <li>About Us</li>
                            <li>Clientele</li>
                            <li>Media</li>
                        </ul>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-[clamp(20px,4vw,50px)]'>
                    <div>
                        <h2 className='text-white text-xl mb-3 font-bold'>Switches and Accessories</h2>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>About Us</li>
                            <li>Clientele</li>
                            <li>Media</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-white text-xl mb-3 font-bold'>LED Lighting</h2>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>About Us</li>
                            <li>Clientele</li>
                            <li>Media</li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <h2 className='text-white text-xl mb-3 font-bold'>Fans</h2>
                            <ul className="space-y-3 text-sm text-gray-300">
                                <li>info@gmmodular.com</li>
                            </ul>
                        </div>
                        <div className='flex gap-2 mt-5'>
                            <NavLink className='bg-[#727071] text-[16px] w-[35px] h-[35px] rounded-full flex items-center justify-center'>
                                <FaFacebookF />
                            </NavLink>
                            <NavLink className='bg-[#727071] text-[16px] w-[35px] h-[35px] rounded-full flex items-center justify-center'>
                                <FaFacebookF />
                            </NavLink>
                            <NavLink className='bg-[#727071] text-[16px] w-[35px] h-[35px] rounded-full flex items-center justify-center'>
                                <FaFacebookF />
                            </NavLink>
                            <NavLink className='bg-[#727071] text-[16px] w-[35px] h-[35px] rounded-full flex items-center justify-center'>
                                <FaFacebookF />
                            </NavLink>
                            <NavLink className='bg-[#727071] text-[16px] w-[35px] h-[35px] rounded-full flex items-center justify-center'>
                                <FaFacebookF />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
