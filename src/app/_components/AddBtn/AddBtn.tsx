"use client"
import React, { useState } from 'react'

export default function AddBtn({productQuantity ,  changeQuantity , productLimit} : {productQuantity : number , changeQuantity : Function , productLimit : number}) {

    



  return (
    <>
    <button onClick={()=>changeQuantity(productQuantity - 1)} disabled={productQuantity <= 1} className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-green-600 transition disabled:opacity-50">
        -
    </button>
    <input min="1" max={productLimit} className="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium"   type="number" readOnly value={productQuantity} />
    <button onClick={()=>changeQuantity(productQuantity + 1)} disabled={productQuantity === productLimit} className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-green-600 transition disabled:opacity-50">+</button>
    
    </>
  )
}
