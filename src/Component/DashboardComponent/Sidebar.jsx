import {  NavLink, useNavigate } from 'react-router-dom';
import { ImProfile } from "react-icons/im";
import { GrOverview } from "react-icons/gr";
import { PiUsersThreeBold } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { BiCollection } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import useAuth from '../../Hooks/useAuth';
import useUserData from '../../Hooks/useUserData';


const AdminRoutes = [
    {
       id: 1,
       route: "/dashboard/users" ,
       icon: <PiUsersThreeBold/>,
       name: 'All-User'
    }
]
const SellerRoutes = [
    {
       id: 1,
       route: "/dashboard/my-product" ,
       icon: <BiCollection/>,
       name: 'My Product'
    },
    {
       id: 2,
       route: "/dashboard/add-product" ,
       icon: <MdOutlineAddCircleOutline/>,
       name: 'Add Product'
    }
]
const BuyerRoutes = [
    {
       id: 1,
       route: "/dashboard/my-cart" ,
       icon: <MdOutlineShoppingCart/>,
       name: 'My Cart'
    },
    {
       id: 1,
       route: "/dashboard/my-wishList" ,
       icon: <FaRegHeart/>,
       name: 'My Wish List'
    }
]

const Sidebar = () => {
    const {logout} = useAuth()
    const navigate = useNavigate()

    const {role} = useUserData()
    console.log(role);

    const handleLogout= () =>{
        logout()
        .then(()=>{
            navigate("/")
        })

    }
    return (
        <div className='space-y-4'>
            <div className='mb-8 text-center'>
                <h1 className="text-3xl text-gray-900 font-bold">Petuk-Palace</h1>
            </div>
            <NavLink to='/dashboard/overview' className={({ isActive }) =>
                     `border px-4 py-2 text-center font-bold rounded-lg flex gap-2 items-center ${isActive ? "bg-gray-700 text-gray-200" : "bg-white"}`}>
                <GrOverview/>
                < >Overview</>
            </NavLink>
            {
                role === "admin" && 
                <>
              {
                AdminRoutes.map((r, idx)=>
                    <NavLink to={`${r.route}`} key={idx} className={({ isActive }) =>
                     `border px-4 py-2 text-center font-bold rounded-lg flex gap-2 items-center ${isActive ? "bg-gray-700 text-gray-200" : "bg-white"}`}>
                        <>{r.icon}</>
                        <>{r.name}</>
                    </NavLink>   
                )
              }
                </>
            }
            {
                role === "seller" && 
                <>
              {
                SellerRoutes.map((r, idx)=>
                    <NavLink to={`${r.route}`
                    } key={idx} className={({ isActive }) =>
                     `border px-4 py-2 text-center font-bold rounded-lg flex gap-2 items-center ${isActive ? "bg-gray-700 text-gray-200" : "bg-white"}`}>
                        <>{r.icon}</>
                        <>{r.name}</>
                    </NavLink>   
                )
              }
                </>
            }
            {
                role === "buyer" && 
                <>
              {
                BuyerRoutes.map((r, idx)=>
                    <NavLink 
                      to={`${r.route}`} 
                      key={idx}
                      className={({ isActive }) =>
                     `border px-4 py-2 text-center font-bold rounded-lg flex gap-2 items-center ${isActive ? "bg-gray-700 text-gray-200" : "bg-white"}`}
                      >
                        
                        <>{r.icon}</>
                        <>{r.name}</>
                    </NavLink>   
                )
              }
                </>
            }
            
            <NavLink to='/dashboard/profile'   className={({ isActive }) =>
             `border px-4 py-2 text-center font-bold rounded-lg flex gap-2 items-center ${isActive ?  "bg-gray-700 text-gray-200" : "bg-white"}`}>
                <ImProfile/>
                < >Profile</>
            </NavLink>
            <NavLink to='/'   className={({ isActive }) =>
                `border px-4 py-2 text-center font-bold rounded-lg flex gap-2 items-center ${isActive ?  "bg-gray-700 text-gray-200" : "bg-white"}`}>
                 <IoHomeOutline/>
                <>Home</>
            </NavLink>
            <button onClick={handleLogout} className='bg-white border w-full px-4 py-2 text-center font-bold rounded-lg flex gap-2 items-center cursor-pointer'>
                 <CiLogout/>
                 <>Logout</>
            </button>
           
        </div>
    );
};

export default Sidebar;