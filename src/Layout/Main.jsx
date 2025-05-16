import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Header/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;