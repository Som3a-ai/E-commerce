import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { CategoryType } from "@/api/types/product.type";
import { getAllCategories } from "@/api/services/routemisr.service";

export default async function HomeCategories() {
 

  const allCategories = await getAllCategories();

  return (
    <>
      <section id="categories" className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8">
            <div className="flex items-center gap-3 my-8">
              <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-800">
                Shop by
                <span className="text-emerald-600"> Category</span>
              </h2>
            </div>
            <Link
              className="text-green-600 self-end sm:self-auto hover:text-green-700 font-medium flex items-center cursor-pointer"
              href="categories"
            >
              View All Categories <FaArrowRightLong className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {allCategories?.map((category) => {
              return (
                <Link
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition group cursor-pointer"
                  href={`/categories/${category._id}`}
                  key={category._id}
                >
                  <div className="h-20 w-20 overflow-hidden bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-green-200 transition">
                    <img
                      alt={category.slug}
                      className="w-full h-full object-cover"
                      src={category.image}
                    />
                  </div>
                  <h3 className="font-medium">{category.name}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
