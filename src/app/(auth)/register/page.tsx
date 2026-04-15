"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import reviewProfilePic from "../../../assests/review-author.png";
import RatingStars from "@/app/_components/RatingStars/RatingStars";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Controller, useForm } from "react-hook-form";
import { HiUserAdd } from "react-icons/hi";
import { toast } from "sonner"

import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";


import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import {RegisterationSchema, RegisterSchemaType} from "../../../schemas/auth.schema"
import { Register } from "@/actions/auth.actions";
import { useRouter } from "next/navigation";




export default function page() {

const navigate = useRouter()

  const { control, handleSubmit } = useForm<RegisterSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },

    resolver: zodResolver(RegisterationSchema),
  });

 async function mySubmit(obj : RegisterSchemaType){

      const isRegisitered = await Register(obj)


      if(isRegisitered){
          toast.success("Registered Successfully 👍" , {duration : 3000 , position : "top-center"})

          setTimeout(()=>{
            navigate.push("/login")
          },3000)

      }else{


        toast.error("Error please try again later 😥" , {duration : 3000 , position : "top-center"})
      }

  }



  return (
    <>
      <main className="py-10">
        <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 p-4">
          <div>
            <h1 className="text-4xl font-bold">
              Welcome to <span className="text-green-600">FreshCart</span>
            </h1>
            <p className="text-xl mt-2 mb-4">
              Join thousands of happy customers who enjoy fresh groceries
              delivered right to their doorstep.
            </p>
            <ul className="*:flex *:items-start *:gap-4 space-y-6 my-8">
              <li>
                <div className="icon size-12 text-2xl bg-green-200 text-green-600 rounded-full flex justify-center items-center">
                  <FaStar />
                </div>
                <div className="content">
                  <h2 className="text-lg font-semibold">Premium Quality</h2>
                  <p className="text-gray-600">
                    Premium quality products sourced from trusted suppliers.
                  </p>
                </div>
              </li>
              <li>
                <div className="icon size-12 text-2xl bg-green-200 text-green-600 rounded-full flex justify-center items-center">
                  <FaShippingFast />
                </div>
                <div className="content">
                  <h2 className="text-lg font-semibold">Fast Delivery</h2>
                  <p className="text-gray-600">
                    Same-day delivery available in most areas
                  </p>
                </div>
              </li>
              <li>
                <div className="icon size-12 text-2xl bg-green-200 text-green-600 rounded-full  flex justify-center items-center">
                  <FaShieldAlt />
                </div>
                <div className="content">
                  <h2 className="text-lg font-semibold">Secure Shopping</h2>
                  <p className="text-gray-600">
                    Your data and payments are completely secure
                  </p>
                </div>
              </li>
            </ul>
            <div className="review bg-white shadow-sm p-4 rounded-md">
              <div className="author flex items-center gap-4 mb-4">
                <img
                  alt="profile pic"
                  className="size-12 rounded-full"
                  src={reviewProfilePic.src}
                />
                <div>
                  <h3>Sarah Johnson</h3>
                  <div className="rating *:text-yellow-300">
                    <RatingStars rating={5} />
                  </div>
                </div>
              </div>

              <blockquote>
                <p className="italic text-gray-600">
                  "FreshCart has transformed my shopping experience. The quality
                  of the products is outstanding, and the delivery is always on
                  time. Highly recommend!"
                </p>
              </blockquote>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg px-6 py-10">
            <h2 className="text-center text-3xl font-semibold mb-2">
              Create Your Account
            </h2>
            <p className="text-center">
              Start your fresh journey with us today
            </p>
            <div className="register-options flex gap-2 *:grow my-10">
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

            <form className="space-y-7" onSubmit={handleSubmit(mySubmit)}>
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Name*</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Ali"
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
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={"email"}>Email*</FieldLabel>
                    <Input
                      {...field}
                      id={"email"}
                      aria-invalid={fieldState.invalid}
                      placeholder="ali@example.com"
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
                    <FieldLabel htmlFor={"password"}>Password*</FieldLabel>
                    <Input
                      {...field}
                      id={"password"}
                      aria-invalid={fieldState.invalid}
                      placeholder="create a strong password"
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

              <Controller
                name="rePassword"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={"rePassword"}>
                      Confirm Password*
                    </FieldLabel>
                    <Input
                      {...field}
                      id={"rePassword"}
                      aria-invalid={fieldState.invalid}
                      placeholder="Confirm your password"
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

              <Controller
                name="phone"
                control={control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={"phone"}>Phone Number*</FieldLabel>
                    <Input
                      {...field}
                      id={"phone"}
                      aria-invalid={fieldState.invalid}
                      placeholder="+! 234 567 8900"
                      autoComplete="off"
                      type="tel"
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
                    id="terms"
                    className="size-4 accent-green-600"
                    type="checkbox"
                    name="terms"
                  />
                  <label htmlFor="terms" className="ms-2">
                    I agree to the{" "}
                    <Link
                      className="text-green-600 hover:underline"
                      href="/terms"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      className="text-green-600 hover:underline"
                      href="/privacy-policy"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              <button type="submit" className="btn flex items-center justify-center gap-2 bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed w-full transition-colors">
                <HiUserAdd className="w-5 h-5" />
                <span>Create My Account</span>
              </button>
            </form>
            <p className="border-t pt-10 border-gray-300/30 my-4 text-center">
            Already have an account?{" "}
            <Link className="text-green-600 hover:underline font-medium" href="/login">Sign In</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
