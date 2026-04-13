"use client"

import React, { useState } from "react";
import AddBtn from "../AddBtn/AddBtn";

export default function PriceIndicator({quantity = 0 , price , discountedPrice}  : {quantity : number , price : number , discountedPrice : number}) {

const [productQuantity , setProductQuantity] = useState<number>(1)

  return (
    <>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Quantity
        </label>
        <div className="flex items-center gap-4">
          <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
            <AddBtn productLimit={ quantity } changeQuantity={setProductQuantity} productQuantity={productQuantity}  />
          </div>

          <span className="text-sm text-gray-500">
            {quantity} available
          </span>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Total Price:</span>
          <span className="text-2xl font-bold text-green-600">
            {/* total price affected by the AddBtn component */}

           {discountedPrice ? <>{discountedPrice * productQuantity}.00 EGP</> : <>{price * productQuantity}.00 EGP</>}

          </span>
        </div>
      </div>
    </>
  );
}
