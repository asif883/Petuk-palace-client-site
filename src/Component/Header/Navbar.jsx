import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import '../../CSS/font.css'
import '../../CSS/nav.css'
import NavEnd from './NavEnd';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!hasScrolled && currentScrollY > 0) {
        setHasScrolled(true);
      }

      if (currentScrollY === 0) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, hasScrolled]);
    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } bg-white shadow`}>
           <div className='navbar max-w-7xl mx-auto px-4'>
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
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <><NavLink to='/' className='mb-1'>Home</NavLink></>
                        <><NavLink to='/reservation' className='mb-1'>Reservation</NavLink></>
                        <><NavLink to='/menu' className='mb-1'>Menu</NavLink></>
                        <><NavLink to='/about' className='mb-1'>About us</NavLink></>
                        <><NavLink to='/blog' className=''>Blog</NavLink></>
                    </ul>
                    </div>
                    <Link to='/' className="text-2xl lg:text-4xl font-barlow font-semibold hover:text-gray-400 text-gray-600">Petuk Palace</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg font-barlow text-gray-700 uppercase">
                        <><NavLink to='/' className='mr-8 hover:text-gray-900 '>Home</NavLink></>
                        <><NavLink to='/reservation' className='mr-8 hover:text-gray-900 '>Reservation</NavLink></>
                        <><NavLink to='/menu' className='mr-8 hover:text-gray-900 '>Menu</NavLink></>
                        <><NavLink to='/about' className='mr-8 hover:text-gray-900 '>About us</NavLink></>
                        <><NavLink to='/blog' className='hover:text-gray-900 '>Blog</NavLink></>
                    </ul>
                </div>
                <div className="navbar-end">
                   <NavEnd/>
                </div>
           </div>
      </div>
    );
};

export default Navbar;