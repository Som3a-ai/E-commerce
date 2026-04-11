import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { FaRegEye } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { ProductType } from "../../../api/types/product.type";

export default function ProductCard({ product }: { product: ProductType }) {
  return (
    <div className=" product-card  bg-white border border-gray-200 rounded-lg overflow-hidden box-shadow:rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px">
      <div className="relative">
        <img
          className="w-full h-60 object-contain bg-white"
          alt={product.slug}
          src={product.imageCover}
        />
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          <button className="bg-white h-8 w-8  cursor-pointer  rounded-full flex items-center justify-center transition shadow-sm text-gray-600 hover:text-red-500">
            <CiHeart />
          </button>
          <button className="bg-white h-8 w-8 cursor-pointer rounded-full flex items-center justify-center transition shadow-sm text-gray-600 hover:text-green-500">
            <TfiReload />
          </button>
          <Link
            className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 shadow-sm"
            href="/products"
          >
            <FaRegEye />
          </Link>
        </div>

        {product.priceAfterDiscount && (
          <div className="absolute top-3 left-3">
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              -{" "}
              {Math.round(
                ((product.price - product.priceAfterDiscount) / product.price) *
                  100,
              )}
              %
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="text-xs text-gray-500 mb-1">
          {product.category.name}
        </div>
        <h3 className="font-medium mb-1 cursor-pointer ">
          <Link className="line-clamp-2" href="/products/">
            {product.title}
          </Link>
        </h3>
        <div className="flex items-center mb-2">
          <div className=" text-amber-400 mr-2">
            <div className="text-yellow-400 flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <span className="text-xs text-gray-500">
            {product.ratingsAverage} {`(${product.ratingsQuantity})`}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span
              className={`text-lg font-bold ${product.priceAfterDiscount ? "text-green-600" : "text-gray-800"}`}
            >
              {product.priceAfterDiscount ? product.priceAfterDiscount : product.price} EGP
            </span>
            {product.priceAfterDiscount && (
              <span className="text-sm text-gray-500 line-through ml-2">
                {product.price} EGP
              </span>
            )}
          </div>
          <button className="h-10 w-10 rounded-full cursor-pointer flex items-center justify-center transition bg-green-600 text-white hover:bg-green-700 disabled:opacity-70">
            <FiPlus />
          </button>
        </div>
      </div>
    </div>
  );
}
