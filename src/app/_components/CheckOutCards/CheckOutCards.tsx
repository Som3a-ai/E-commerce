import { CartProduct, ProductInfo } from "@/api/types/cart.type";
import React from "react";

export default function CheckOutCards({product} : {product : CartProduct}) {
  return (
    <>
      <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
        <div className="w-14 h-14 rounded-lg bg-white p-1 border border-gray-100 shrink-0">
          <img
            alt={product.product.slug}
            className="w-full h-full object-contain"
            src={product.product.imageCover}
          />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {product.product.title}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">{product.count} × 149 EGP</p>
        </div>
        <p className="text-sm font-bold text-gray-900 shrink-0">{product.count * product.price}</p>
      </div>
    </>
  );
}
