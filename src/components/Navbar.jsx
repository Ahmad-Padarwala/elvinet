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
                <div className="flex items-center">
                    <img src={Logo} alt="logo" className="md:w-[200px] sm:w-[150px] w-[100px]" />
                </div>
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
                        {menuOpen ? <MdOutlineClose size={24} /> : <IoMenu size={24} />}
                    </button>
                </div>
                <div className={`flex-col md:flex-row md:flex items-center gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent px-4 md:px-0 py-4 md:py-0 z-50 transition-all duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden'}`}>
                    <NavLink to="/" className="nav-links text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/product" className="nav-links text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>Products</NavLink>
                    <NavLink to="/about" className="nav-links text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>About Us</NavLink>
                    <NavLink to="/faqs" className="nav-links text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>FaQ</NavLink>
                    <NavLink to="/contact" className="nav-links text-black hover:text-gray-600" onClick={() => setMenuOpen(false)}>Contact</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
