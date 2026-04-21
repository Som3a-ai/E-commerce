"use client";

import Title from "../_components/Title/Title";
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
import CheckOutCards from "../_components/CheckOutCards/CheckOutCards";
import { useEffect, useState } from "react";
import { getLoggedUserCart } from "@/actions/cart.actions";
import { CartDataType } from "@/api/types/cart.type";
import Loading from "../_components/Loading/Loading";


export default function page() {


    const [userOrders , setuserOrders] = useState<null | CartDataType >(null)
    const [loading, setLoading] = useState(true);

    const [isVisa , setisVisa] = useState(false)


async function getUserFullCart(){

    const res = await getLoggedUserCart();
    if (res?.status === "success") {

        setuserOrders(res.data)
        setLoading(false)
        
    }

     
     
  }


  useEffect(()=>{


    getUserFullCart()

  },[])



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

      <form>
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

                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    City
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <FaCity className="text-gray-500 text-sm" />
                    </div>

                    <input
                      id="city"
                      className="w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      placeholder="e.g. Cairo, Alexandria, Giza"
                      type="text"
                      name="city"
                    />
                  </div>

                  <p className="text-sm text-red-600 mt-2 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
                    City name must be at least 2 characters
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="details"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Street Address
                  </label>

                  <div className="relative">
                    <div className="absolute left-4 top-4 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <FaLocationDot />
                    </div>

                    <textarea
                      id="details"
                      rows={3}
                      className="w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all resize-none border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      placeholder="Street name, building number, floor, apartment..."
                      name="details"
                    />
                  </div>

                  <p className="text-sm text-red-600 mt-2 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
                    Address details must be at least 10 characters
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                      <FaPhone className="text-sm text-gray-500" />
                    </div>

                    <input
                      id="phone"
                      className="w-full px-4 py-3.5 pl-14 border-2 rounded-xl focus:outline-none transition-all border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      placeholder="01xxxxxxxxx"
                      type="tel"
                      name="phone"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                      Egyptian numbers only
                    </span>
                  </div>

                  <p className="text-sm text-red-600 mt-2 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 rounded-full bg-red-500"></span>
                    Please enter a valid Egyptian phone number
                  </p>
                </div>
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
