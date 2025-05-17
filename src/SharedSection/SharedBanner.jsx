import React from 'react';
import { Link } from 'react-router-dom';
import NavEnd from '../Component/Header/NavEnd';

const SharedBanner = ({banner, heading, subHeading}) => {
    return (
        <div className="relative h-[450px] bg-fixed" style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <div className="absolute inset-0 bg-black/80"></div> 

            <div className="absolute top-0 left-0 w-full z-20 text-gray-100">
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
                                <><Link to='/' className='mb-1'>Home</Link></>
                                <><Link to='/reservation' className='mb-1'>Reservation</Link></>
                                <><Link to='/menu' className='mb-1'>Menu</Link></>
                                <><Link to='/about' className='mb-1'>About us</Link></>
                                <><Link to='/blog' className=''>Blog</Link></>
                            </ul>
                            </div>
                            <Link to='/' className="text-2xl lg:text-4xl font-barlow font-semibold hover:text-gray-400">Petuk Palace</Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 text-lg font-barlow font-medium uppercase text-gray-200">
                                <><Link to='/' className='mr-8 hover:text-gray-400'>Home</Link></>
                                <><Link to='/reservation' className='mr-8 hover:text-gray-400'>Reservation</Link></>
                                <><Link to='/menu' className='mr-8 hover:text-gray-400'>Menu</Link></>
                                <><Link to='/about' className='mr-8 hover:text-gray-400'>About us</Link></>
                                <><Link to='/blog' className='hover:text-gray-400'>Blog</Link></>
                            </ul>
                        </div>
                        <div className="navbar-end text-white">
                            <NavEnd/>
                        </div>
                </div>
            </div>
            <div className="relative text-center top-1/3 text-gray-200 px-6">
                <h1 className="text-2xl lg:text-4xl font-barlow font-bold mb-6 uppercase">{heading}</h1>
                    <p className="text-sm lg:text-lg text-gray-400 max-w-3xl mx-auto">
                        {subHeading}
                    </p>
            </div>
        </div>
    );
};

export default SharedBanner;