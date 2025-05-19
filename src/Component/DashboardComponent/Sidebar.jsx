import {  NavLink, useNavigate } from 'react-router-dom';
import { ImProfile } from "react-icons/im";
import { GrOverview } from "react-icons/gr";
import { PiUsersThreeBold } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { MdOutlineFoodBank } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiFoodTruck } from "react-icons/gi";
import useAuth from '../../Hooks/useAuth';
import useUserData from '../../Hooks/useUserData';


const AdminRoutes = [
    {
       id: 1,
       route: "/dashboard/users" ,
       icon: <PiUsersThreeBold size={18}/>,
       name: 'All-User'
    },

    {
       id: 2,
       route: "/dashboard/menu" ,
       icon: <MdOutlineFoodBank size={20}/>,
       name: 'Menu'
    },
    {
       id: 3,
       route: "/dashboard/add-menu" ,
       icon: <MdOutlineAddCircleOutline size={20}/>,
       name: 'Add Menu'
    }
]
const BuyerRoutes = [
    {
       id: 1,
       route: "/dashboard/my-cart" ,
       icon: <MdOutlineShoppingCart size={18}/>,
       name: 'My Cart'
    },
    {
       id: 2,
       route: "/dashboard/my-order" ,
       icon: <GiFoodTruck size={18}/>,
       name: 'My Order'
    }
]

const Sidebar = () => {
    const {logout} = useAuth()
    const navigate = useNavigate()

    const {role} = useUserData()

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
                <GrOverview size={18}/>
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
                <ImProfile size={18}/>
                < >Profile</>
            </NavLink>
            <NavLink to='/'   className={({ isActive }) =>
                `border px-4 py-2 text-center font-bold rounded-lg flex gap-2 items-center ${isActive ?  "bg-gray-700 text-gray-200" : "bg-white"}`}>
                 <IoHomeOutline size={18}/>
                <>Home</>
            </NavLink>
            <button onClick={handleLogout} className='bg-white border w-full px-4 py-2 text-center font-bold rounded-lg flex gap-2 items-center cursor-pointer'>
                 <CiLogout size={18}/>
                 <>Logout</>
            </button>
           
        </div>
    );
};

export default Sidebar;