"use client";
import { FaTruckMoving } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaTrashCan } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import React, { useContext, useEffect, useState } from "react";
import Title from "../_components/Title/Title";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "../_components/ItemCard/ItemCard";
import { clearCart, getLoggedUserCart } from "@/actions/cart.actions";
import Link from "next/link";
import { CartDataType } from "@/api/types/cart.type";
import Loading from "../_components/Loading/Loading";
import { toast } from "sonner";
import { CartContext } from "@/context/CartContext";

export default function page() {
  const [cartItems, setCartItems] = useState<CartDataType | null>(null);
  const [numOfCart, setnumOfCart] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const[isClearBtn , setisCLearBtn] = useState<boolean>(false)
  const [cartId , setcartId] = useState<string>("")
  
  const {setnumOfCartItems} = useContext(CartContext)

  async function getUserCart() {
    const res = await getLoggedUserCart();
    if (res?.status === "success") {
      setCartItems(res.data);
      setnumOfCart(res.numOfCartItems);
      setcartId(res.cartId)
      
    }

     setLoading(false);
  }

  async function removeCart(){

    setisCLearBtn(true)
    const res = await clearCart();

    if(res?.status === "success"){
      toast.success(res.message , {position:"top-center" , duration : 2000})
      setCartItems(res.data)
      setisCLearBtn(true)
      setnumOfCartItems(0)
    }else{
       toast.error(res?.message , {position:"top-center" , duration : 2000})
       setisCLearBtn(true)
    }
  }

  useEffect(() => {
    getUserCart();
  }, []);

  
  if(loading){

    return <Loading/>
  }

  return (
    <>
      {(cartItems?.products?.length ?? 0) > 0 && (
        <>
          <div className="bg-gray-50 min-h-screen py-8">
            <Title
              iconBg="bg-linear-to-r from-green-600 to-green-700"
              textColor="text-black"
              subHeading={`You have ${cartItems?.products.length} item in your cart`}
              bgColor="#ffff"
              breadCrumbs="Shopping Cart"
              heading="Shopping Cart"
              icon={<FaShoppingCart className="text-2xl" />}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {cartItems?.products?.map((product) => (
                    <ItemCard
                      key={product._id}
                      product={product.product}
                      price={product.price}
                      count={product.count}
                      setnewCart={setCartItems}
                    />
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                  <Link
                    className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center gap-2"
                    href="/"
                  >
                    <span>←</span>
                    Continue Shopping
                  </Link>

                  <button disabled={isClearBtn} onClick={()=>removeCart()}  className="group cursor-pointer flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    <FaTrashCan />

                    <span>Clear all items</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-24 shadow-sm">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <IoBag />
                      Order Summary
                    </h2>
                    <p className="text-green-100 text-sm mt-1">
                      {numOfCart} items in your cart
                    </p>
                  </div>

                  <div className="p-6 space-y-5">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <FaTruck />
                      </div>
                      <div>
                        <p className="font-semibold text-green-700">
                          Free Shipping!
                        </p>
                        <p className="text-sm text-green-600">
                          You qualify for free delivery
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span className="font-medium text-gray-900">
                          {" "}
                          {cartItems?.totalCartPrice}{" "}
                        </span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        <span className="font-medium text-green-600">FREE</span>
                      </div>
                      <div className="border-t border-dashed border-gray-200 pt-3 mt-3">
                        <div className="flex justify-between items-baseline">
                          <span className="text-gray-900 font-semibold">
                            Total
                          </span>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-gray-900">
                              {cartItems?.totalCartPrice}
                            </span>
                            <span className="text-sm text-gray-500 ml-1">
                              EGP
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="w-full cursor-pointer flex items-center justify-center gap-2 py-3 border border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-green-400 hover:text-green-600 hover:bg-green-50/50 transition-all">
                      <MdDiscount />
                      <span className="text-sm font-medium">
                        Apply Promo Code
                      </span>
                    </button>

                    <Link
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-600/20 active:scale-[0.98]"
                      href={`/checkout/${cartId}`}
                    >
                      <FaLock />
                      <span>Secure Checkout</span>
                    </Link>

                    <div className="flex items-center justify-center gap-4 py-2">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FaShieldAlt />
                        <span>Secure Payment</span>
                      </div>
                      <div className="w-px h-4 bg-gray-200"></div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <FaTruckMoving />
                        <span>Fast Delivery</span>
                      </div>
                    </div>

                    <Link
                      className="block text-center text-green-600 hover:text-green-700 text-sm font-medium py-2"
                      href="/"
                    >
                      ← Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {cartItems?.products?.length === 0 && (
        <>
          <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
            <div className="max-w-md text-center">
              <div className="relative mb-8">
                <div className="w-32 h-32 rounded-full bg-linear-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto">
                  <FaDropbox className="text-5xl text-gray-300" />
                </div>

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-100 rounded-full blur-md"></div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Your cart is empty
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Looks like you haven't added anything to your cart yet.
                <br />
                Start exploring our products!
              </p>
              <Link
                className="inline-flex items-center gap-2 bg-linear-to-r from-green-600 to-green-700 text-white py-3.5 px-8 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg shadow-green-600/20 active:scale-[0.98]"
                href="/"
              >
                Start Shopping
                <FaArrowRightLong className="text-sm" />
              </Link>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-400 mb-4">Popular Categories</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Link
                    className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
                    href="/categories"
                  >
                    Electronics
                  </Link>
                  <Link
                    className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
                    href="/categories"
                  >
                    Fashion
                  </Link>
                  <Link
                    className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
                    href="/categories"
                  >
                    Home
                  </Link>
                  <Link
                    className="px-4 py-2 bg-gray-50 hover:bg-green-50 hover:text-green-600 text-gray-600 rounded-full text-sm font-medium transition-colors"
                    href="/categories"
                  >
                    Beauty
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
