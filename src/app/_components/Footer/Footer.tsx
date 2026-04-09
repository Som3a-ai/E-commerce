import Image from "next/image";
import Link from "next/link";
import freshCartLogo from "../../../../public/FreshCart Logo.png";
import phoneIcon from "../../../../public/Component 1.svg";
import mailIcon from "../../../../public/Vector.svg";
import locationIcon from "../../../../public/Vector (1).svg";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";


import { FaTwitter } from "react-icons/fa";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <Link className="inline-block mb-6" href="/">
              <div className="bg-white rounded-lg px-4 py-2 inline-block">
                <Image src={freshCartLogo} alt="fresh Cart logo" />
              </div>
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              FreshCart is your one-stop destination for quality products. From
              fashion to electronics, we bring you the best brands at
              competitive prices with a seamless shopping experience.
            </p>
            <div className="space-y-3 mb-6">
              <Link
                href="tel:+18001234567"
                className="flex items-center gap-3 text-gray-400 hover:text-green-600 transition-colors text-sm"
              >
                <Image src={phoneIcon} alt="phone icon" />
                <span>+1 (800) 123-4567</span>
              </Link>
              <Link
                href="mailto:support@freshcart.com"
                className="flex items-center gap-3 text-gray-400 hover:text-green-600 transition-colors text-sm"
              >
                <Image src={mailIcon} alt="mail icon" />
                <span>support@freshcart.com</span>
              </Link>

              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <Image src={locationIcon} alt="location Icon" />

                <span>123 Commerce Street, New York, NY 10001</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full cursor-pointer bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-colors">
                <FaFacebookF />
              </span>
              <span className="w-10 h-10 rounded-full cursor-pointer bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-colors">
                <FaTwitter />
              </span>
              <span className="w-10 h-10 rounded-full cursor-pointer bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-colors">
                <FaInstagram />
              </span>
              <span className="w-10 h-10 rounded-full cursor-pointer bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-green-600 hover:text-white transition-colors">
                <FaYoutube />
              </span>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/products`}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href={`/categories`}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href={`/brands`}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Brands
                </Link>
              </li>
              <li>
                <span className="text-gray-400  cursor-pointer hover:text-green-400 transition-colors text-sm">
                  Electronics
                </span>
              </li>
              <li>
                <span className="text-gray-400 cursor-pointer hover:text-green-400 transition-colors text-sm">
                  Men's Fashion
                </span>
              </li>
              <li>
                <span className="text-gray-400 cursor-pointer hover:text-green-400 transition-colors text-sm">
                  Women's Fashion
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Account</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/account`}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href={`/order-hisory`}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Order History
                </Link>
              </li>
              <li>
                <Link
                  href={`/wishlist`}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  href={`/cart`}
                  className="text-gray-400  cursor-pointer hover:text-green-400 transition-colors text-sm"
                >
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link
                  href={`/login`}
                  className="text-gray-400 cursor-pointer hover:text-green-400 transition-colors text-sm"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  href={`/register`}
                  className="text-gray-400 cursor-pointer hover:text-green-400 transition-colors text-sm"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Account</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/contact`}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href={`/help`}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href={`/shipping`}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Shipping info
                </Link>
              </li>
              <li>
                <Link
                  href={`/returns`}
                  className="text-gray-400  cursor-pointer hover:text-green-400 transition-colors text-sm"
                >
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link
                  href={`/track-order`}
                  className="text-gray-400 cursor-pointer hover:text-green-400 transition-colors text-sm"
                >
                  Track Order
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Account</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href={`/privacy`}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href={`/terms`}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href={`/cookies`}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>


      </div>
      <div className="border-t border-gray-800">

        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-gray-500 text-sm text-center md:text-left">© 2026  FreshCart. All rights reserved. </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <CiCreditCard1 />
                         <span>Visa</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <CiCreditCard1 />
                         <span>MasterCard</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <CiCreditCard1 />
                         <span>PayPal</span>
                    </div>
                  </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
