import React from "react";
import Title from "../../_components/Title/Title";
import { FaBoxOpen } from "react-icons/fa";
import { getSpecificBrand } from "@/api/services/routemisr.service";
import ProductCard from "@/app/_components/ProductCard/ProductCard";
import Link from "next/link";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const brandId = (await params).id;

  const products = await getSpecificBrand(brandId);

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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products?.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
          </div>
        )}

        {products?.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
              <FaBoxOpen className="text-3xl text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              No Products Found
            </h3>
            <p className="text-gray-500 mb-6">
              No products match your current filters.
            </p>
            <Link
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
              href="/"
            >
              View All Products
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
