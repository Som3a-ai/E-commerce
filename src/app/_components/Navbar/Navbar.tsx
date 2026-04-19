"use client";
import { FaRegUserCircle } from "react-icons/fa";
import { BsBoxFill } from "react-icons/bs";
import { RiContactsBook3Line } from "react-icons/ri";

import Link from "next/link";
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { FaTruck } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaRegEnvelope } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { PiSignOutBold } from "react-icons/pi";
import { FaCog } from "react-icons/fa";

import React, { useState } from "react";
import freshCartIcon from "../../../../public/FreshCart Logo.png";
import { SheetDemo } from "./../Sheet/Sheet";
import { useSession , signOut } from "next-auth/react";

export default function Navbar() {
  const { data: mySession, status } = useSession();


  const [isDropDown , setisDropDown] = useState<boolean>(false)


  function mySignOut(){



    signOut({redirect : true , callbackUrl : "/login"})
  }

  return (
    <>
      {/* // Above Navbar visible in desktop screens */}
      <div className="hidden lg:block text-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center gap-6 text-gray-500">
              <span className="flex items-center gap-2">
                <FaTruck className="text-green-500" />
                <span>Free Shipping on Orders 500 EGP</span>
              </span>
              <span className="flex items-center gap-2">
                <FaGift className="text-green-500" />
                <span>New Arrivals Daily</span>
              </span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-gray-500">
                <a
                  href="tel:+18001234567"
                  className="flex items-center gap-1.5 hover:text-green-600 transition-colors"
                >
                  <IoIosCall />
                  <span>+1 (800) 123-4567</span>
                </a>
                <a
                  href="mailto:support@freshcart.com"
                  className="flex items-center gap-1.5 hover:text-green-600 transition-colors"
                >
                  <FaRegEnvelope />
                  <span>support@freshcart.com</span>
                </a>
              </div>

              <span className="w-px h-4 bg-gray-200"></span>

              <div className="flex items-center gap-4">
                {status === "unauthenticated" ? (
                  <>
                    <Link
                      className="flex items-center gap-1.5 text-gray-600 hover:text-green-600 transition-colors"
                      href="/login"
                    >
                      <CiUser />
                      <span>Sign In</span>
                    </Link>
                    <Link
                      className="flex items-center gap-1.5 text-gray-600 hover:text-green-600 transition-colors"
                      href="/register"
                    >
                      <IoIosPersonAdd />

                      <span>Sign Up</span>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      className="flex items-center gap-1.5 text-gray-600 hover:text-green-600 transition-colors"
                      href="/profile"
                    >
                      <CiUser />
                      <span>{mySession?.user?.name}</span>
                    </Link>

                    <button
                      className="flex items-center gap-1.5 text-gray-600 hover:text-green-600 transition-colors"
                      onClick={mySignOut}
                    >
                      <PiSignOutBold />

                      <span>Sign Out</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16 lg:h-18 gap-4 lg:gap-8">
              <Link className="shrink-0" href="/">
                <Image src={freshCartIcon} alt="logo" />
              </Link>
              <form className="hidden lg:flex flex-1 max-w-2xl">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search for products, brands and more..."
                    className="w-full px-5 py-3 pr-12 rounded-full border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors"
                  >
                    <FaMagnifyingGlass />
                  </button>
                </div>
              </form>

              <nav className="hidden xl:flex items-center gap-6">
                <Link
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                  href="/products"
                >
                  Shop
                </Link>
                <div className="relative group">
                  <button className="flex items-center gap-1.5 text-gray-700 hover:text-green-600 font-medium transition-colors py-2 cursor-pointer">
                    Categories
                    <FaChevronDown className="transition-transform group-hover:rotate-180 duration-400" />
                  </button>
                  <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white border border-gray-100 rounded-xl shadow-xl py-2 min-w-50">
                      <Link
                        className="block px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-primary-50 transition-colors"
                        href="/categories"
                      >
                        All Categories
                      </Link>
                      <Link
                        className="block px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-primary-50 transition-colors"
                        href="/"
                      >
                        Electronics
                      </Link>
                      <Link
                        className="block px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-primary-50 transition-colors"
                        href="/"
                      >
                        Women's Fashion
                      </Link>
                      <Link
                        className="block px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-primary-50 transition-colors"
                        href="/"
                      >
                        Men's Fashion
                      </Link>
                      <Link
                        className="block px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-primary-50 transition-colors"
                        href="/"
                      >
                        Beauty & Health
                      </Link>
                    </div>
                  </div>
                </div>
                <Link
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                  href="/brands"
                >
                  Brands
                </Link>
              </nav>

              <div className="flex items-center gap-1 lg:gap-2">
                <Link
                  className="hidden lg:flex items-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity"
                  href="/contact"
                >
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                    <FaHeadset className="text-green-800" />
                  </div>
                  <div className="text-xs">
                    <div className="text-gray-400">Support</div>
                    <div className="font-semibold text-gray-700">24/7 Help</div>
                  </div>
                </Link>
                <Link
                  className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group"
                  href="/wishlist"
                >
                  <CiHeart className="text-2xl group-hover:text-green-500" />
                </Link>

                <Link
                  className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group"
                  href="/cart"
                >
                  <FaShoppingCart className="text-xl group-hover:text-green-600 text-gray-400" />
                </Link>

                {status === "unauthenticated" ? 
                
                <>
                <Link
                  className="hidden lg:flex items-center gap-2 ml-2 px-5 py-2.5 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-colors shadow-sm shadow-green-600/20"
                  href="/login"
                >
                  <CiUser className="text-sm" />
                  Sign In
                </Link>
                </> : 
                <>
                
                <div className="hidden lg:block relative">
                  <button onClick={()=>setisDropDown(!isDropDown)} className="relative cursor-pointer p-2.5 rounded-full hover:bg-gray-100 transition-colors group">
                  <FaRegUserCircle />


                </button>

                      <div className={`absolute right-0 top-full mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl transition-all duration-200 origin-top-right  scale-95 ${isDropDown ? "opacity-100" : "invisible opacity-0"}`}>
                          <div className="p-4 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                                  
                                         <FaRegUserCircle />
                                  
                                  </div>


                                  <div className="min-w-0">

                                    <p className="text-sm font-semibold text-gray-800 truncate">{mySession?.user?.name}</p>
                                    <p className="text-xs text-gray-400 truncate">{mySession?.user?.email}</p>
                                  </div>

                                   
                              
                            </div>

                            <div className="py-2">
                                  <Link className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors" href="/profile">
                                  <CiUser />
                                  My Profile
                                  </Link>

                                  <Link className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors" href="/orders">
                                  <BsBoxFill />

                                  My Orders
                                  </Link>

                                  <Link className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors" href="/wishlist">
                                  <CiHeart/>
                                  My Wishlist
                                  </Link>

                                  <Link className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors" href="/profile/addresses">
                                  <RiContactsBook3Line />
                                  Addresses
                                  </Link>

                                  <Link className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors" href="/profile/settings">
                                  <FaCog />
                                  Settings
                                  </Link>
                            </div>

                            <div className="border-t border-gray-100 py-2">
                              <button onClick={mySignOut} className="flex items-center cursor-pointer gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors w-full text-left">

                                    <PiSignOutBold />
                                  Sign Out
                              </button>

                            </div>
                          </div>
                      </div>
               
                </div>
                
                </>
                
                }
                <SheetDemo />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
