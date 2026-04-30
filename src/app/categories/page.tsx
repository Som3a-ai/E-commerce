import React from "react";
import Title from "../_components/Title/Title";
import { BsStack } from "react-icons/bs";
import { getAllCategories } from "@/api/services/routemisr.service";
import Card from "../_components/Card/Card";

export default async function page() {
  const categories = await getAllCategories();

  return (
    <>
      <Title
        bgColor="bg-green-600"
        breadCrumbs="Categories"
        heading="All Categories"
        iconBg="bg-white/20 backdrop-blur-sm"
        textColor="text-white"
        subHeading="Browse our wide range of product categories"
        icon={<BsStack className="text-3xl" />}
      />

      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories?.map((category) => {
            return (
              <Card
                hoverStyle="text-green-600"
                id={`/categories/${category._id}`}
                image={category.image}
                name={category.name}
                imageInfo={category.slug}
                view="SubCategories"
                key={category._id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
