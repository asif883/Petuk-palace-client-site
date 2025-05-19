import { TiShoppingCart } from "react-icons/ti";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useUserData from '../../Hooks/useUserData';
import { MdOutlineDashboard } from 'react-icons/md';


const NavEnd = () => {
    const {role } = useUserData()

    return (
        <div className='flex gap-4 items-center'>
            <div className=''>
                <Link to='#'><FaSearch size={27}/></Link>
            </div>
            <div className='flex items-center'>        
               {
                 role === 'admin' ? 
                 <Link to='/dashboard/overview'>
                    <MdOutlineDashboard size={30}/>
                </Link>
                :
                <div>
                    <Link to='/dashboard/my-cart' className=""><TiShoppingCart size={28}/></Link>
                </div>
               }
            </div>
        </div>
    );
};

export default NavEnd;