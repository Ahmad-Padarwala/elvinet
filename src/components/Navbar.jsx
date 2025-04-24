import React, { useState } from 'react';
import Logo from "../assets/image/logo1.png";
import { NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white w-full">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                {/* Logo */}
                <div className="flex items-center">
                    <img src={Logo} alt="logo" className="w-[200px]" />
                </div>

                {/* Hamburger Icon for Small Screens */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
                        {menuOpen ? <MdOutlineClose size={24} /> : <IoMenu size={24} />}
                    </button>
                </div>

                {/* Nav Links */}
                <div className={`flex-col md:flex-row md:flex items-center gap-6 absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent px-4 md:px-0 py-4 md:py-0 z-50 transition-all duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden'}`}>
                    <NavLink to="/" className="nav-links text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/product" className="nav-links text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>Products</NavLink>
                    <NavLink to="/about" className="nav-links text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>About Us</NavLink>
                    <NavLink to="/faqs" className="nav-links text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>FAQ</NavLink>
                    <NavLink to="/contact" className="nav-links text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>Contact</NavLink>

                    {/* Sign In button only in mobile menu */}
                    <div className="md:hidden">
                        <NavLink to="/login" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 block mt-2 text-center" onClick={() => setMenuOpen(false)}>Sign In</NavLink>
                    </div>
                </div>

                {/* Sign In button for large screens */}
                <div className="hidden md:flex items-center">
                    <NavLink to="/login" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Sign In</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
