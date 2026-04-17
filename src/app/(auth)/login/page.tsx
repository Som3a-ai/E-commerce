"use client"

import React from 'react'
import cartImg from "../../../assests/2e5810ff3e-e750761ebcd4ae5907db.png"
import { FaTruck } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaFacebook, FaGoogle } from 'react-icons/fa6';
import { Controller, useForm } from 'react-hook-form';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, loginType } from '@/schemas/auth.schema';
import { Login } from '@/actions/auth.actions';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import {signIn} from "next-auth/react"




export default function page() {

  const navigate = useRouter()

const {control , handleSubmit} = useForm({
  defaultValues:{
    email : "",
    password : ""
  },

  resolver : zodResolver(LoginSchema)
})


async function logInSumbit(obj : loginType){


  const response = await signIn("credentials" , {...obj , redirect : false})

  console.log(response)

    // const isLogin = await Login(obj)
  
  
        if(response?.ok){
            toast.success("LoggedIn Successfully 👍" , {duration : 3000 , position : "top-center"})
  
            setTimeout(()=>{
              navigate.push("/")
            },3000)
  
        }else{
  
  
          toast.error(response?.error , {duration : 3000 , position : "top-center"})
        }
  
}



  return (
    <>
    <div className="container py-16 mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
             
              <div className="hidden lg:block">
                <div className="text-center space-y-6">
                      <img className="w-full h-96 object-cover rounded-2xl shadow-lg" alt="fresh vegetables and fruits shopping cart illustration, modern clean style, green theme" src={cartImg.src}/>
                      <div className="space-y-4">
                                  <h2 className="text-3xl font-bold text-gray-800">FreshCart - Your One-Stop Shop for Fresh Products</h2>
                                  <p className="text-lg text-gray-600">
                                    Join thousands of happy customers who trust FreshCart for their daily grocery needs
                                  </p>
                                  <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <FaTruck className='text-green-600 mr-2' />

                                              Free Delivery
                                            </div>
                                            <div className="flex items-center">
                                                <FaShieldAlt  className='text-green-600 mr-2' />

                                              Secure Payment

                                            </div>
                                            <div className="flex items-center">
                                                <FaClock  className='text-green-600 mr-2' />

                                              24/7 Support

                                            </div>

                                  </div>
                      </div>
                </div>
              </div>



               <div className="bg-white rounded-2xl shadow-lg px-6 py-10">
                          <h2 className="text-center text-3xl font-semibold mb-2">
                            <span className="text-3xl font-bold text-green-600">
                              Fresh
                            </span>
                            <span className="text-gray-800">Cart</span>
                          </h2>
                          <p className="text-center">
                            Welcome Back!

                          </p>
                          <p className="text-gray-600 text-center mt-3">Sign in to continue your fresh shopping experience</p>
                          <div className=" flex gap-2 *:grow my-10">
                            <button
                              className="btn bg-transparent border border-gray-300 cursor-pointer hover:bg-gray-100 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
                              aria-label="Sign up with Google"
                            >
                              <FaGoogle className="text-red-600 mr-1" />
              
                              <span>Google</span>
                            </button>
                            <button
                              className="btn bg-transparent border border-gray-300 hover:bg-gray-100 flex justify-center items-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                              aria-label="Sign up with Facebook"
                            >
                              <FaFacebook className="text-blue-600 mr-1" />
              
                              <span>Facebook</span>
                            </button>
                          </div>
                          <div className="divider relative w-full h-0.5 bg-gray-300/30 my-4 flex items-center before:content-['or'] before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:bg-white before:px-4">
                            <span className="sr-only">or</span>
                          </div>
              
                          <form className="space-y-7" onSubmit={handleSubmit(logInSumbit)}>
                            <Controller
                              name="email"
                              control={control}
                              render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                  <FieldLabel htmlFor={"email"}>Email Address</FieldLabel>
                                  <Input
                                    {...field}
                                    id={"email"}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Enter your Email"
                                    autoComplete="off"
                                    type="text"
                                    className="focus-visible:ring-0 focus-visible:border-green-500"
                                  />
                                  {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                  )}
                                </Field>
                              )}
                            />
                            <Controller
                              name="password"
                              control={control}
                              render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                  <FieldLabel htmlFor={"password"}>Password</FieldLabel>
                                  <Input
                                    {...field}
                                    id={"password"}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Enter your password "
                                    autoComplete="off"
                                    type="password"
                                    className="focus-visible:ring-0 focus-visible:border-green-500"
                                  />
                                  {fieldState.invalid && (
                                    <FieldError errors={[fieldState.error]} />
                                  )}
                                </Field>
                              )}
                            />
              

              
                            <div>
                              <div className="flex items-center gap-2">
                                <input
                                  id="keepSignIn"
                                  className="size-4 accent-green-600"
                                  type="checkbox"
                                  name="keepSignIn"
                                />
                                <label htmlFor="keepSignIn" className="ms-2">
                                  Keep me signed in
                                </label>
                              </div>
                            </div>
              
                            <button type="submit" className="btn flex items-center justify-center gap-2 bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed w-full transition-colors">
                              Sign In
                            </button>
                          </form>
                          <p className="border-t pt-10 border-gray-300/30 my-4 text-center">
                         New to FreshCart?{" "}
                          <Link className="text-green-600 hover:underline font-medium" href="/register">Ceate an account</Link>
                          </p>
                        </div>
      </div>
    </div>
    
    
    </>
  )
}
