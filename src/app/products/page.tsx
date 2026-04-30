import React from "react";
import { FaBoxOpen, FaDropbox } from "react-icons/fa";
import Title from "../_components/Title/Title";
import {
  getAllProducts,
  getSpecificProducts,
} from "@/api/services/routemisr.service";
import ProductCard from "../_components/ProductCard/ProductCard";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { ProductType } from "@/api/types/product.type";

export default async function page({
  searchParams,
}: {
  searchParams ?: Promise<{ subcategory: string }>;
}) {
  const subCategoryId = (await searchParams)?.subcategory;

  let products: ProductType[] | null = null;

  if (subCategoryId) {
     products = await getSpecificProducts(subCategoryId);
  } else {
     products = await getAllProducts();
  }

  return (
    <>
      <Title
        bgColor="bg-green-600"
        textColor="text-white"
        subHeading="Explore our complete product collection"
        heading="All Products"
        iconBg="bg-white/20 backdrop-blur-sm"
        icon={<FaBoxOpen className="text-3xl" />}
        breadCrumbs="Shopping Cart"
      />

      <div className="container mx-auto px-4 py-8">
        {(products?.length ?? 0) > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products?.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
          </div>
        )}

        {(products?.length ?? 0) === 0 && (
          <div className="min-h-[60vh] flex items-center justify-center px-4 py-12">
            <div className="max-w-md text-center">
              <div className="relative mb-8">
                <div className="w-32 h-32 rounded-full bg-linear-to-br from-gray-100 to-gray-50 flex items-center justify-center mx-auto">
                  <FaDropbox className="text-5xl text-gray-300" />
                </div>

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-100 rounded-full blur-md"></div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                No Products to Show
              </h2>
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
        )}
      </div>
    </>
  );
}
