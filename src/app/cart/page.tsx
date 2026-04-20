"use client";

import React from "react";
import Title from "../_components/Title/Title";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "../_components/ItemCard/ItemCard";

export default function page() {
  return (
    <>
      <Title
        subHeading={`You have 1 item in your cart`}
        bgColor="#ffff"
        breadCrumbs="Shopping Cart"
        heading="Shopping Cart"
        icon={<FaShoppingCart />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">

            <ItemCard />

            
          </div>
        </div>
      </div>
    </>
  );
}
