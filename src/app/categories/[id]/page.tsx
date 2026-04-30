import { getAllSubCategories } from "@/api/services/routemisr.service";
import Title from "@/app/_components/Title/Title";
import Link from "next/link";
import React from "react";
import { BsStack } from "react-icons/bs";
import { FaFolderOpen } from "react-icons/fa6";
import { HiOutlineArrowSmRight } from "react-icons/hi";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const subCategories = await getAllSubCategories(id);

  return (
    <>
      <Title
        bgColor="bg-green-600"
        breadCrumbs={`Categries /Related Products `}
        heading="Related Products"
        icon={<BsStack />}
        iconBg="bg-white/20 backdrop-blur-sm"
        subHeading="Choose a subCategory to browse products"
        textColor="text-white"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {subCategories?.map((subCategory) => {
          return (
            <Link
              className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1"
              href={`/products?subcategory=${subCategory._id}`}
            >
              <div className="w-14 h-14 rounded-xl bg-green-50 grid place-items-center mb-4 group-hover:bg-green-100 transition-colors">
                <FaFolderOpen />
              </div>

              <h3 className="font-bold text-gray-900 text-lg group-hover:text-green-600 transition-colors mb-2">
                {subCategory.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Browse Products</span>

                <HiOutlineArrowSmRight />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
