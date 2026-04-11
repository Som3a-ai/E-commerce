import { ProductType } from "@/api/types/product.type";
import Link from "next/link";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import ProductImages from "./../../_components/ProductImages/ProductImages";
import RatingStars from "@/app/_components/RatingStars/RatingStars";
import AddBtn from "@/app/_components/AddBtn/AddBtn";

export default async function page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  const id = params.id;

  async function getSingleProduct(): Promise<ProductType | null> {
    try {
      const res = await fetch(
        `https://ecommerce.routemisr.com/api/v1/products/${id}`,
      );
      const data = await res.json();

      return data.data;
    } catch (err) {
      return null;
    }
  }

  const myProduct = await getSingleProduct();

  const allImages =
    myProduct?.images.map((img) => ({
      original: img,
      thumbnail: img,
    })) || [];

  console.log(myProduct);

  return (
    <>
      <nav className="py-4">
        <div className="container mx-auto px-4">
          <ol className="flex items-center flex-wrap gap-1 text-sm">
            <li className="flex items-center">
              <Link
                className="text-gray-500 hover:text-green-600 transition flex items-center gap-1.5"
                href="/"
              >
                <IoMdHome />
                Home
              </Link>
              <FaChevronRight className=" mx-2" />
            </li>
            <li className="flex items-center">
              <Link
                className="text-gray-500 hover:text-green-600 transition flex items-center gap-1.5"
                href="/categories"
              >
                {myProduct?.category.name}
              </Link>
              <FaChevronRight className=" mx-2" />
            </li>
            <li className="flex items-center">
              <Link
                className="text-gray-500 hover:text-green-600 transition flex items-center gap-1.5"
                href="/categories"
              >
                {myProduct?.subcategory[0].name}
              </Link>

              <FaChevronRight className=" mx-2" />
            </li>
            <li className="text-gray-900 font-medium truncate max-w-xs">
              {myProduct?.title}
            </li>
          </ol>
        </div>
      </nav>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm p-4 sticky top-4">
              <ProductImages images={allImages} />
            </div>
          </div>

          <div className="lg:w-3/4">
          
          <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                     <Link className="bg-green-50 text-green-700 text-xs px-3 py-1.5 rounded-full hover:bg-green-100 transition" href="/categories">{myProduct?.subcategory[0].name}</Link> 
                       <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">{myProduct?.brand.name}</span>
              </div>

              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{myProduct?.title}</h1>
              <div className="flex items-center gap-3 mb-4">
                      <div className="text-yellow-400">
                        <RatingStars rating={myProduct?.ratingsAverage}/>
                      </div>
                      <span className="text-sm text-gray-600">
                          {myProduct?.ratingsAverage} {" "}
                          {`(${myProduct?.ratingsQuantity} reviews)`}
                      </span>
              </div>

              <div className="flex items-center flex-wrap gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                      {myProduct?.price} {" "}EGP
                </span>
                
                </div>

                <div className="flex items-center gap-2 mb-6">
                            <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-green-50 text-green-700">
                                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                      {myProduct?.quantity ? "In Stock" : "Out of Stock" }
                            </span>
                </div>

                <div className="border-t border-gray-100 pt-5 mb-6">
                          <p className="text-gray-600 leading-relaxed">{myProduct?.description}</p>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                                  <AddBtn productQuantity={myProduct?.quantity || 0}/>  
                        </div>

                        <span className="text-sm text-gray-500">
                          {myProduct?.quantity}{" "} available
                        </span>
                    </div>


                </div>


                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                          <div className="flex justify-between items-center">
                                  <span className="text-gray-600">Total Price:</span>
                                  <span className="text-2xl font-bold text-green-600">
                                          
                                  </span>
                          </div>
                </div>
          </div>
          
          </div>
        </div>
      </div>
    </>
  );
}
