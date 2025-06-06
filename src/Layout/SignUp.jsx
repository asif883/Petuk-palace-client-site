import React from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import signUpBanner from '../assets/signUP.avif'
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';

const SignUp = () => {
    const {createUser} = useAuth()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState:{errors}
    } =useForm()

    const handleRegister = (data) =>{
       const name = data.name
       const email = data.email
       const password = data.password
       const role = 'buyer'
       
       const userInfo = {
            name, email, role
       }

        createUser( email, password )
        .then( ()=>{
            axios.post('https://petuk-palace-server.vercel.app/user', userInfo)
            .then((res)=>{
                // console.log(res.data);
                if(res.data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Registration Successful',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                        confirmButtonColor: '#18181B'
                      }); 
                }
                navigate('/')
            })
            
        }).catch (error =>{
            console.error( error)
            Swal.fire({
                title: 'Error!',
                text: `${error.message}`,
                icon: 'error',
                confirmButtonText: 'Try again',
                confirmButtonColor: '#18181B'
              })
        })
       reset()
    }
    return (
        <div className="min-h-screen flex">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-gradient-to-b from-gray-200 to-white p-8 rounded-l-3xl">
                <div className="w-full max-w-md">
                <div className="text-left mb-6">
                    <Link to='/' className='text-xl font-semibold flex items-center gap-1 mb-3 text-gray-800'><FaArrowLeft/>Back Home</Link>
                    <h1 className="text-4xl font-bold text-gray-800">Create an account</h1>
                </div>

                <form onSubmit={handleSubmit(handleRegister)}  className="space-y-6">
                    <div className="form-control">               
                              <input type="text" name="Name"  placeholder=" Full Name" className='bg-white w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none' {...register('name' ,{required: true})} />
                                {
                                errors.name && ( 
                                <p className='text-red-500 text-sm font-light'>Name is required</p>
                                    )
                                }
                                       
                    </div>
                                   
                    <div className="form-control">
                        <input type="email" name='email' placeholder="Email" className='bg-white w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none'{...register("email", {required: true})} />
                            {
                             errors.email && ( 
                             <p className='text-red-500 text-sm font-light'>Email is required</p>
                                )
                            } 
                                        
                    </div>

                    <div className="form-control ">
                                  
                        <input
                         type="password"
                         placeholder="Enter your password"
                         className= 'bg-white w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none'
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
                    <div className="form-control">
                       <input type='password' 
                         name='confirm-password' 
                          placeholder="Confirm Password" 
                          className='bg-white w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none' 
                          {...register("confirmPassword", {
                           required: true ,
                           validate:(value)=>{
                            if(watch("password") != value){
                            return "Your password don't match"
                            }
                            }
                            } )}
                           /> 
                           {
                            errors.confirmPassword &&(
                            <p className='text-red-500 text-sm font-light'>Both password must match</p>
                            )
                            }           
                </div>                         
                <div className="form-control mt-6">
                  <button type='submit' className=" w-full border-2 mr-4  px-4 rounded-lg py-3 bg-gray-800 text-gray-200  font-semibold cursor-pointer">Sign Up</button>
                </div>
                 <label className="label">
                     <p className="label-text-alt text-sm md:text-lg text-gray-800">Already have an account? Please <Link to='/login' className="underline font-medium">Login</Link></p>
                 </label>           
                </form>
                <div className="text-sm mt-6 ">
                    <a href="#" className="text-black font-medium">Terms & Conditions</a>
                </div>
                </div>
            </div>

            {/* Right Section */} 
            <div className="hidden lg:block  lg:w-1/2">
                <img
                src={signUpBanner}
                alt="register"
                className="w-full h-full object-fill"
                />
            </div>
        </div>
    );
};

export default SignUp;