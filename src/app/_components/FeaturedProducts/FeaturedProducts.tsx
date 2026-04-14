import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
import { TfiReload } from "react-icons/tfi";
import { FaRegEye } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { getAllProducts } from "@/api/services/routemisr.service";

export default async function FeaturedProducts() {
  const allProducts = await getAllProducts();

  return (
    <>
      <section>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center gap-3 my-8">
            <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-800">
              Featured
              <span className="text-emerald-600">Products</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {allProducts?.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
{
  /* <span class="text-sm text-gray-500 line-through ml-2">…</span> */
}
