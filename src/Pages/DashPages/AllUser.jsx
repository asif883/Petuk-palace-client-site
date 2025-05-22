import React, { useEffect, useState } from 'react';
import { RiAdminLine } from 'react-icons/ri';
import { TiUserDeleteOutline } from 'react-icons/ti';
import Loading from '../../Loading/Loading';
import axios from 'axios';
import useUserData from '../../Hooks/useUserData';

const AllUser = () => {
  const { role } = useUserData()
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('access-token');

    axios.get('https://petuk-palace-server.vercel.app/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      setUsers(res.data);
      setLoading(false);
    })
    .catch(err => {
      console.error("Failed to fetch users:", err);
      setLoading(false);
    });
  }, []);


    return (
      <div className="overflow-x-auto">
          {
            loading ? <Loading/>
            :
             <>
             {
                role !== 'admin' ? 
                <div className='flex items-center justify-center min-h-screen'>
                    <h1 className='text-red-600 font-semibold text-2xl'>Only Admin Can Access The Users</h1>
                </div>
                :
                <table className="table">
                 
                <thead>
                    <tr className="bg-gray-100 font-bold text-lg">
                    <th>SL.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Make Admin</th>
                    <th>Delete user</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users?.map((user, idx)=> 
                        
                        <tr key={idx} >
                    <th>
                            <label>
                            {idx+1}
                            </label>
                        </th>
                    <th>
                            <label>
                            {user?.name}
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                            <div className="avatar">
                                <p>{user?.email}</p>
                            </div>
                            </div>
                        </td>
                        <td>
                            <p className="capitalize">{user?.role}</p>
                        </td>
                        <td>
                            <button  className="btn btn-ghost btn-xs">
                                <RiAdminLine size={24}/>
                            </button>
                        </td>
                        <th>
                            <button  className="btn btn-ghost btn-xs">
                                <TiUserDeleteOutline size={24}/>
                            </button>
                        </th>
                        </tr>
                    
                        )
                    }
                    
                </tbody>
          
            </table>
             }
             </>
          }
      </div>
    );
};

export default AllUser;