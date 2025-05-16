import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Header/Navbar';
import Footer from '../Component/Footer';

const Main = () => {
    return (
        <div>
            <Navbar/>
             <div className='min-h-screen'>
                <Outlet/>
             </div>
            <Footer/>
        </div>
    );
};

export default Main;