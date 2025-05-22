import React, { useEffect, useState } from 'react';
import Loading from '../../Loading/Loading';

const DashMenu = () => {
    const [menuData , setMenuData] = useState([])
    const [loading , setLoading] = useState(true)

    useEffect(()=> {
          fetch('https://petuk-palace-server.vercel.app/menu')
          .then( res => res.json())
          .then( data => {
              setMenuData(data)
              setLoading(false)
          })
     }, [])
    
    return (
        <div>
            {
                loading ? <Loading/>
                :
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {menuData?.map((item) => (
                <div
                  key={item._id}
                  className="border border-gray-300 p-4"
                >
                  <div className='flex items-center justify-between'>
                      <h1 className='text-xl uppercase font-barlow font-semibold'>{item?.title}</h1>
                      <p className='bg-gray-100 p-1 rounded-full font-semibold'>${item?.price}</p>
                  </div>
                  <p className='my-1 text-gray-600'>{item?.description}</p>
                  <div className='flex justify-end mt-5'>
                     
                    <button className='border border-gray-300 text-gray-800 px-2 py-1 font-semibold hover:bg-gray-800 hover:text-gray-200 cursor-pointer'>Update</button>
                          
                  </div>
                </div>
              ))}
          </div>
            }
        </div>
    );
};

export default DashMenu;