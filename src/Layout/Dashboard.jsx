import React from 'react';
import { Outlet } from 'react-router-dom';
import { RiMenu2Fill } from "react-icons/ri";
import Sidebar from '../Component/DashboardComponent/Sidebar';

const Dashboard = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden mb-4">
                      <RiMenu2Fill size={20}/>
                    </label>
                    <div className='p-2 lg:p-8'>
                        <Outlet/>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-6">
                    {/* Sidebar content here */}
                       <Sidebar/>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;