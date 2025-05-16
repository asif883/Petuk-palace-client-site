import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import '../../CSS/font.css'
import '../../CSS/nav.css'

const Navbar = () => {
    return (
        <div className="w-full fixed z-10 bg-black bg-opacity-60  text-white ">
           <div className='navbar max-w-7xl mx-auto'>
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
                    <Link to='/' className="text-2xl lg:text-4xl font-barlow hover:text-[#FFD71B]">Petuk Palace</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl font-barlow">
                        <><NavLink to='/' className='mr-5 hover:text-[#FFD71B]'>Home</NavLink></>
                        <><NavLink to='/reservation' className='mr-5 hover:text-[#FFD71B]'>Reservation</NavLink></>
                        <><NavLink to='/menu' className='mr-5 hover:text-[#FFD71B]'>Menu</NavLink></>
                        <><NavLink to='/about' className='mr-5 hover:text-[#FFD71B]'>About us</NavLink></>
                        <><NavLink to='/blog' className='hover:text-[#FFD71B]'>Blog</NavLink></>
                    </ul>
                </div>
                <div className="navbar-end pr-2">
                    <div className='flex items-center'>
                        <input type="text" placeholder='Search' className='p-2 w-20 lg:w-40' />
                        <button className='bg-[#FFD71B] p-3 text-black'><FaSearch size={16}/></button>
                    </div>
                    <div className='ml-2'>        
                        <div className="indicator">
                            <span className="indicator-item bg-[#FFD71B] rounded-badge text-black px-1">0</span>
                            <Link to='/cart' className=""><TiShoppingCart size={32}/></Link>
                        </div>
                    </div>
                </div>
           </div>
      </div>
    );
};

export default Navbar;