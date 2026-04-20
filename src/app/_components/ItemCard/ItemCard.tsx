import Link from "next/link";
import React from "react";
import { MdOutlineDone } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { ProductInfo } from "@/api/types/cart.type";



export default function ItemCard({product , price , count} : {product : ProductInfo , price : number , count : number}) {
  return (
    <div className="relative bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 ">
      <div className="p-4 sm:p-5">
        <div className="flex gap-4 sm:gap-6">


            <Link className="relative shrink-0 group" href={`/products/`}>
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-gradient-to-br from-gray-50 via-white to-gray-100 p-3 border border-gray-100 overflow-hidden">
                <img alt={product.slug} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" src={product.imageCover}/>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <MdOutlineDone />
                        In stock
            </div>
            </Link>

            <div className="flex-1 min-w-0 flex flex-col">
                <div className="mb-3">
                     <Link className="group/title" href="/products/6428eb43dc1175abc65ca0b3">
                     <h3 className="font-semibold text-gray-900 group-hover/title:text-green-600 transition-colors leading-relaxed text-base sm:text-lg">{product.title}</h3>
                     </Link>

                     <div className="flex items-center gap-2 mt-2">
                                    <span className="inline-block px-2.5 py-1 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 text-xs font-medium rounded-full">{product.subcategory.name}</span>

                                    <span className="text-xs text-gray-400">•</span>
                                    <span className="text-xs text-gray-500">
                                      SKU: 5CA0B3
                                    </span>
                     </div>
                </div>

                <div className="mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-green-600 font-bold text-lg">
                          {price}  EGP
                        </span>
                        <span className="text-xs text-gray-400">per unit</span>
                        </div>
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center">
                    <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-200">
                      <button disabled className="h-8 w-8 rounded-lg cursor-pointer bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none transition-all">
                        -
                      </button>

                      <span className="w-12 text-center font-bold text-gray-900">{count}</span>
                      <button className="h-8 w-8 rounded-lg cursor-pointer bg-green-600 shadow-sm shadow-green-600/30 flex items-center justify-center text-white hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all">
                      +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                        <div className="text-right">

                          <p className="text-xs text-gray-400 mb-0.5">Total</p>
                          <p className="text-xl font-bold text-gray-900">
                                          {price * count} <span className="text-sm font-medium text-gray-400">EGP</span>
                          </p>
                        </div>
                        <button className="h-10 w-10 cursor-pointer rounded-xl border border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500 flex items-center justify-center disabled:opacity-40 transition-all duration-200">
                                    <FaTrash />
                        </button>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
