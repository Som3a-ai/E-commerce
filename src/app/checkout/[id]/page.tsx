"use client";

import Title from "../../_components/Title/Title";
import { IoMdHome } from "react-icons/io";
import { FaCircleInfo } from "react-icons/fa6";
import { FaCity } from "react-icons/fa6";
import { FaReceipt } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { FaMoneyBill } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { FaShieldAlt } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import CheckOutCards from "../../_components/CheckOutCards/CheckOutCards";
import { useEffect, useState } from "react";
import { getLoggedUserCart } from "@/actions/cart.actions";
import { CartDataType } from "@/api/types/cart.type";
import Loading from "../../_components/Loading/Loading";
import { Controller, useForm } from "react-hook-form";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckOutSchema, CheckOutType } from "@/schemas/checkout.schema";
import { onlinePayment } from "@/actions/checkout.action";
import { useParams } from "next/navigation";


export default function page() {


    const [userOrders , setuserOrders] = useState<null | CartDataType >(null)
    const [loading, setLoading] = useState(true);
    const {id} : {id : string} = useParams();

    const [isVisa , setisVisa] = useState(false)

    const {control , handleSubmit} = useForm<CheckOutType>({
      defaultValues:{
        details : "",
        phone : "",
        city : ""
      },
    
      resolver : zodResolver(CheckOutSchema)
    })


async function getUserFullCart(){

    const res = await getLoggedUserCart();
    console.log(res)
    if (res?.status === "success") {

        setuserOrders(res.data)
        setLoading(false)
        
        
    }

     
     
  }


  useEffect(()=>{


    getUserFullCart()

  },[])


   async function mySubmit(obj : CheckOutType){


    console.log(id)
  
   const res = await onlinePayment(id , "" , obj)

   if(res.status === "success"){

    location.href = res.session.url;
   }
  }


if(loading){

    return <Loading/>
  }

  return (
    <>
      <Title
        bgColor="#ffff"
        breadCrumbs="Checkout"
        heading="Complete Your Order"
        subHeading="Review your items and complete your purchase"
        iconBg="bg-green-600"
        textColor="text-black text-gray-900"
        icon={<FaReceipt className="text-4xl text-white" />}
      />

      <form onSubmit={handleSubmit(mySubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="bg-linear-to-r from-green-600 to-green-700 px-6 py-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <IoMdHome />
                  Shipping Address
                </h2>
                <p className="text-green-100 text-sm mt-1">
                  Where should we deliver your order?
                </p>
              </div>
              <div className="p-6 space-y-5">
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">


                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <FaCircleInfo className="text-blue-600 text-sm" />
                  </div>

                  <div>
                    <p className="text-sm text-blue-800 font-medium">
                      Delivery Information
                    </p>
                    <p className="text-xs text-blue-600 mt-0.5">
                      Please ensure your address is accurate for smooth delivery
                    </p>
                  </div>
                </div>

                <Controller
                              name="city"
                              control={control}
                              render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                  <FieldLabel htmlFor={"email"}>City</FieldLabel>
                                  <Input
                                    {...field}
                                    id={"city"}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="e.g Cairo , Alexandria , Giza"
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
                              name="details"
                              control={control}
                              render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                  <FieldLabel htmlFor={"password"}>Street Address</FieldLabel>
                                  <Input
                                    {...field}
                                    id={"details"}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Street name , building number , floor, apartment..."
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
                              name="phone"
                              control={control}
                              render={({ field, fieldState }) => (
                                <Field data-invalid={fieldState.invalid}>
                                  <FieldLabel htmlFor={"phone"}>Phone number</FieldLabel>
                                  <Input
                                    {...field}
                                    id={"phone"}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="01xxxxxxxxx"
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
              


              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <FaWallet />
                  Payment Method
                </h2>

                <p className="text-green-100 text-sm mt-1">
                  Choose how you'd like to pay
                </p>
              </div>

              <div className="p-6 space-y-4">
                <button
                  type="button"

                  onClick={()=>setisVisa(false)}
                  className={`w-full cursor-pointer p-5 rounded-xl border-2 transition-all flex items-center gap-4 group ${!isVisa ? "border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 shadow-sm" : "border-gray-200 hover:border-green-200 hover:bg-gray-50 group"} `}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all  ${!isVisa ?  "bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"} `}>
                    <FaMoneyBill className="text-xl" />
                  </div>

                  <div className="flex-1 text-left">
                    <h3 className={`font-bold text-green-700 ${!isVisa ? "text-green-600" : "text-gray-900"}`}>
                      Cash on Delivery
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Pay when your order arrives at your doorstep
                    </p>
                  </div>

                  <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${!isVisa ? "bg-green-600 text-white" : "border-gray-200"} `}>
                    {!isVisa && <FaCheck className="text-xs" />}
                  </div>
                </button>
                <button
                  type="button"

                  onClick={()=>setisVisa(true)}
                  className={`w-full cursor-pointer p-5 rounded-xl border-2 transition-all flex items-center gap-4 group ${isVisa ? "border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 shadow-sm" : "border-gray-200 hover:border-green-200 hover:bg-gray-50 group"} `}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all  ${isVisa ? "bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg shadow-green-500/30" : "bg-gray-100 text-gray-400 group-hover:bg-gray-200"} `}>
                    <CiCreditCard1 className="text-xl" />
                  </div>

                  <div className="flex-1 text-left">
                    <h3 className={`font-bold text-green-700 ${isVisa ? "text-green-600" : "text-gray-900"}`}>Pay Online</h3>
                    <p className="text-sm text-gray-500 mt-0.5">
                      Secure payment with Credit/Debit Card via Stripe
                    </p>

                  </div>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${isVisa ? "bg-green-600 text-white" : "border-gray-200"} `}>
                    {isVisa && <FaCheck className="text-xs" />}
                  </div>
                </button>

                <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 mt-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <FaShieldAlt className="text-green-600" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-green-800">
                      Secure & Encrypted
                    </p>
                    <p className="text-xs text-green-600 mt-0.5">
                      Your payment info is protected with 256-bit SSL encryption
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm sticky top-20">
                        <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">

                            <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                        <IoBag />
                                        Order Summary
                            </h2>

                            <p className="text-green-100 text-sm mt-1"> 4 items</p>
                        </div>

                        <div className="p-5">
                            <div className="space-y-3 max-h-56 overflow-y-auto mb-5 pr-1">
                                   {userOrders?.products && userOrders.products.map((product)=>{
                                    return <CheckOutCards key={product._id} product={product}/>
                                   }) }

                            </div>

                            <hr className="border-gray-100 my-4" />

                            <div className="space-y-3">
                                        <div className="flex justify-between text-gray-600">
                                            <span>Subtotal</span>
                                            <span className="font-medium">
                                                {userOrders?.totalCartPrice} EGP
                                            </span>
                                        </div>

                                        <div className="flex justify-between text-gray-600">
                                                <span className="flex items-center gap-2">
                                                        <FaTruck />
                                                    Shipping
                                                </span>

                                                <span className="text-green-600 font-semibold">FREE</span>

                                        </div>

                                        <hr className="border-gray-100" />

                                        <div className="flex justify-between items-center">
                                                <span className="text-lg font-bold text-gray-900">Total</span>

                                                        <div className="text-right">
                                                                <span className="text-2xl font-bold text-green-600">{userOrders?.totalCartPrice}</span>
                                                                <span className="text-sm text-gray-500 ml-1">EGP</span>
                                                        </div>

                                        </div>
                            </div>


                            <button type="submit" className="w-full cursor-pointer mt-6 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold hover:from-green-700 hover:to-green-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 active:scale-[0.98]">
                            <FaShieldAlt />
                            Proceed to Payment
                            </button>

                        </div>

                </div>

            </div>

        </div>
      </form>
    </>
  );
}
