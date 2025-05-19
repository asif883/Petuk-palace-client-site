import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';
import axios from 'axios';

const useUserData = () => {
    const {user} = useAuth()
    const [userData , setUserData] = useState({})

    useEffect(()=> {
        const fetch =() =>{
            axios.get(`https://petuk-palace-server.vercel.app/users/${user?.email}`)
            .then( res =>{
                setUserData(res.data)
            })
        }
        fetch()
    }, [user])


    return userData;
};

export default useUserData;