import React from 'react';
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
const NavEnd = () => {
    return (
        <div className='flex gap-4 items-center'>
            <div className=''>
                <button className='cursor-pointer'><FaSearch size={24}/></button>
            </div>
            <div className=''>        
               <div className="indicator">
                  <span className="indicator-item bg-gray-text-gray-400  badge rounded-badge badge-sm text-black px-1">0</span>
                    <Link to='/cart' className=""><TiShoppingCart size={24}/></Link>
                </div>
            </div>
        </div>
    );
};

export default NavEnd;