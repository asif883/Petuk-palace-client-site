import React from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowLeft } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import img from '../assets/login.avif'
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';

const SignIn = () => {
    const {login , googleLogin} = useAuth()
    const  navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState:{errors}
    }= useForm()

    const handleLogin = (data)=>{
        const email = data.email 
        const password = data.password

        login( email, password)
        .then(res => {
            // console.log(res);
            Swal.fire({
                title: 'Success!',
                text: 'Login Successful',
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#18181B'
              });
              navigate(location?.state ? location.state : '/');
             
        })
        .catch (error =>{
        console.error( error)
        Swal.fire({
            title: 'Error!',
            text: `${error.message}`,
            icon: 'error',
            confirmButtonText: 'Try again',
            confirmButtonColor: '#18181B'
            })
        })
        
    }

    const handleGoogleLogin = () =>{
         googleLogin()
         .then(res=>{            
                const name = res?.user?.displayName
                const email = res?.user?.email
                const userInfo= {
                    name,
                    email,
                    role : "buyer"
                  }
                  axios.post('https://petuk-palace-server.vercel.app/user',userInfo)
                 .then((res)=>{
                    navigate(location?.state ? location.state : '/'); 
                })
            })
    }
    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-gradient-to-b from-gray-200 to-white p-8 rounded-l-3xl">
                <div className="w-full max-w-md">
                <div className="text-left mb-6">
                    <Link to='/' className='text-xl font-semibold flex items-center gap-1 mb-3 hover:text-gray-600 text-gray-900'><FaArrowLeft/>Back Home</Link>
                    <h1 className="text-3xl font-bold text-gray-900">Welcome Back!!</h1>
                    <p className="text-sm text-gray-500">Enter Your Email and Password to Access Your Account</p>
                </div>

                <form onSubmit={handleSubmit(handleLogin)}  className="">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-white focus:outline-none" {...register("email" ,{required: true})} />
                            {
                                errors.email && (
                                    <p className='text-red-500 text-sm font-light'> Email is required</p>
                                )
                            }
                            </div>

                            <div className="form-control relative mt-2">
                                <label className="label">
                                    <span className=" label-text text-lg font-semibold">Password</span>
                                </label>
                                
                                <input
                                        type="password"
                                        placeholder="Enter Your Password"
                                        className= "w-full px-4 py-3 border border-gray-200 bg-white rounded-xl focus:outline-none"
                                        {...register("password", {
                                        required: "Password is required.",
                                        minLength: {
                                            value: 8,
                                            message: "Password must be at least 8 characters long.",
                                        },
                                        pattern: {
                                            value: /(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/,
                                            message:
                                            "Password must include uppercase, lowercase, a number, and a special character.",
                                        },
                                        })}
                                        
                                    />
                                    {
                                    errors.password && <p className='text-red-500'>{
                                        errors.password.message
                                    }</p>
                                    }
                                    
                                
                                </div>
                            
                            <div className="form-control mt-6">
                            <button type='submit' className="w-full border-2 mr-4  px-4  rounded-lg py-3 bg-gray-900 text-gray-200  font-semibold cursor-pointer">Sing In</button>
                            </div>
                            
                            <label className="label mt-0.5">
                                <p className={`label-text-alt text-sm md:text-lg text-gray-800`}>New here? Please <Link to='/signUp' className="underline  font-medium">Sing up</Link></p>
                            </label>
                </form>

                <div className="flex w-full flex-col mt-6">
                    
                    <div className="divider">Or login with</div>
                    <div className="w-full mx-auto mt-6">
                        <button onClick={handleGoogleLogin} className="w-full flex justify-center items-center border border-gray-300 px-4 py-2 rounded-xl text-lg cursor-pointer">
                        <img src="https://img.icons8.com/color/20/google-logo.png" alt="google" className="mr-2" />
                             Google
                    </button>
                    </div>
                </div>

        
                </div>
            </div>

            {/* Right Section */}
             <div className="hidden lg:block  lg:w-1/2">
                <img
                src={img}
                alt="LOgin"
                className="w-full h-full object-cover"
                />

            </div>
        </div>
    );
};

export default SignIn;