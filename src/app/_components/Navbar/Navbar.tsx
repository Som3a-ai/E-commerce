import Link from 'next/link'
import Image from "next/image";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { CiUser } from "react-icons/ci";








import React from 'react'
import freshCartIcon from "../../../../public/FreshCart Logo.png"
import { SheetDemo } from './../Sheet/Sheet';


export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
          <div className="bg-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 lg:h-18 gap-4 lg:gap-8">
                          <Link className="shrink-0" href="/">
                              <Image src={freshCartIcon} alt='logo'/>
                          </Link>
                       <form className="hidden lg:flex flex-1 max-w-2xl">
                        <div className="relative w-full">
                                  <input type="text" placeholder="Search for products, brands and more..." className="w-full px-5 py-3 pr-12 rounded-full border border-gray-200 bg-gray-50/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all text-sm"/>
                                  <button type="submit" className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-primary-700 transition-colors">
                                  
                                                      <FaMagnifyingGlass />

                                  </button>
                        </div>
                       </form>

                       <nav className="hidden xl:flex items-center gap-6">

                                      <Link className="text-gray-700 hover:text-green-600 font-medium transition-colors" href="/">Home</Link>
                                      <Link className="text-gray-700 hover:text-green-600 font-medium transition-colors" href="/products">Shop</Link>
                                      <div className="relative group">
                                        <button className="flex items-center gap-1.5 text-gray-700 hover:text-green-600 font-medium transition-colors py-2 cursor-pointer">
                                                    Categories
                                                    <FaChevronDown className='transition-transform group-hover:rotate-180 duration-400' />

                                        </button>
                                        <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                                                   <div className="bg-white border border-gray-100 rounded-xl shadow-xl py-2 min-w-50">
                                                    
                                                    <Link className="block px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-primary-50 transition-colors" href="/categories">All Categories</Link>
                                                    <Link className="block px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-primary-50 transition-colors" href="/">Electronics</Link>
                                                    <Link className="block px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-primary-50 transition-colors" href="/">Women's Fashion</Link>
                                                    <Link className="block px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-primary-50 transition-colors" href="/">Men's Fashion</Link>
                                                    <Link className="block px-4 py-2.5 text-gray-600 hover:text-green-600 hover:bg-primary-50 transition-colors" href="/">Beauty & Health</Link>
                                                    </div>   
                                        </div>
                                      </div>
                                      <Link className="text-gray-700 hover:text-green-600 font-medium transition-colors" href="/brands">Brands</Link>
                       </nav>

                       <div className="flex items-center gap-1 lg:gap-2">
                                <Link className="hidden lg:flex items-center gap-2 pr-3 mr-2 border-r border-gray-200 hover:opacity-80 transition-opacity" href="/contact">

                                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                                                <FaHeadset className='text-green-800' />
           
                                    </div>
                                    <div className="text-xs">
                                                  <div className="text-gray-400">Support</div>
                                                  <div className="font-semibold text-gray-700">24/7 Help</div>
                                    </div>
                                </Link>
                                <Link className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group" href="/wishlist">
                                
                                
                                  <CiHeart className='text-2xl group-hover:text-green-500' />
                                </Link>

                                <Link className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group" href="/cart">
                                <FaShoppingCart className='text-xl group-hover:text-green-600 text-gray-400' />

                                
                                </Link>

                                <Link className="hidden lg:flex items-center gap-2 ml-2 px-5 py-2.5 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-colors shadow-sm shadow-green-600/20" href="/login">
                                
                                <CiUser className='text-sm' />
                                    Sign In
                                </Link>
                               <SheetDemo/>
                       </div>

                     

                </div>
            </div>
          </div>
    </header>
  )
}
