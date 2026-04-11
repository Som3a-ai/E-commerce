"use client"
import React, { useState } from 'react'

export default function AddBtn({productQuantity} : {productQuantity : number}) {

    const [quantity , setQuantity] = useState<number>(1)



  return (
    <>
    <button onClick={()=>setQuantity(quantity - 1)} disabled={quantity <= 1} className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-green-600 transition disabled:opacity-50">
        -
    </button>
    <input min="1" max={productQuantity} className="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium"  type="number" defaultValue={quantity} />
    <button onClick={()=>setQuantity(quantity + 1)} disabled={quantity === productQuantity} className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-green-600 transition disabled:opacity-50">+</button>
    
    </>
  )
}
