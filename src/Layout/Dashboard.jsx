import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { RiMenu2Fill } from "react-icons/ri";
import Sidebar from '../Component/DashboardComponent/Sidebar';
import Loading from '../Loading/Loading';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';

const Dashboard = () => {
    const {user} = useAuth()
    const [loading , setLoading] = useState(true)

    useEffect(()=> {
        const fetch =() =>{
            axios.get(`https://petuk-palace-server.vercel.app/users/${user?.email}`)
            .then( res =>{
                setLoading(false)
            })
        }
        fetch()
    }, [user])
    
    return (
        <div>
            {
                loading ? <Loading/>
                :
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
            }
        </div>
    );
};

export default Dashboard;