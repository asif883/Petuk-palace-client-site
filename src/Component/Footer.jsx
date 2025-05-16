import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";


const Footer = () => {
    return (
        <div className='bg-gray-950 mt-16'>
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-4 px-6 py-20 text-white max-w-7xl mx-auto'>
                <div>
                    <h1 className="text-4xl font-bold font-barlow">Petuk Palace</h1>
                    <p className='mt-7 text-gray-400'>At Petuk Palace, we bring you a delicious fusion of flavors crafted with the ingredients.</p>
                    <p className='flex items-center gap-2 mt-6 font-semibold text-gray-400'><MdEmail/> <span>testybites@gmail.com</span></p>
                    <p className='flex items-center gap-2 mt-6 font-semibold text-gray-400'><IoCallSharp/> <span>+880 123456789</span></p>
                    <p className='flex items-center gap-2 mt-6 font-semibold text-gray-400'><FaLocationDot/> <span>123, Mirpur, Dhaka</span></p>
                </div>
                <div>
                    <h1 className="text-xl font-semibold font-barlow uppercase border-b pb-1 border-gray-400">Recent Posts</h1>
                </div>
                <div>
                  <h1 className="text-xl font-semibold font-barlow uppercase border-b pb-1 border-gray-400">About Us</h1>
                  <ul className='space-y-3 mt-3  font-semibold text-gray-400'>
                    <li>Our Team </li>
                    <li>Our Mission </li>
                    <li>Dine-In & Online </li>
                    <li>Quality & Freshness</li>
                    <li>Customer Satisfaction </li>
                    <li>Community & Sustainability</li>
                  </ul>
                </div>
                <div>
                 <h1 className="text-xl font-semibold font-barlow uppercase border-b pb-1 border-gray-400 ">Terms & Conditions</h1>
                 <ul className='space-y-3 mt-3  font-semibold text-gray-400'>
                    <li>Delivery & Pickup</li>
                    <li>Acceptance of Terms</li>
                    <li>Ordering & Payments</li>
                    <li>Cancellations & Refunds</li>
                  </ul>
                </div>
            </div>
            <footer className="max-w-7xl mx-auto flex gap-6 md:gap-0 flex-col md:flex-row items-center justify-between p-4 border-t border-dashed border-gray-500 text-gray-300">
                <aside className="flex items-center text-center">
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Petuk Palace</p>
                </aside>
                <nav className="flex items-center gap-4 md:place-self-center md:justify-self-end">
                    <p>Follow Us</p>
                    <a href='#'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                    </a>
                    <a  href='#'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path
                        d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                    </a>
                    <a  href='#'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current">
                        <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                    </a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;