import React, { useEffect, useState } from 'react';
import { RiAdminLine } from 'react-icons/ri';
import { TiUserDeleteOutline } from 'react-icons/ti';
import Loading from '../../Loading/Loading';

const AllUser = () => {
    const [loading , setLoading] = useState(true) 
    const [ users , setUsers ]= useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/users')
        .then( res => res.json())
        .then( data => {
            setUsers(data)
            setLoading(false)
        })
    }, [])

    return (
      <div className="overflow-x-auto">
          {
            loading ? <Loading/>
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
                        users.map((user, idx)=> 
                        
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
      </div>
    );
};

export default AllUser;