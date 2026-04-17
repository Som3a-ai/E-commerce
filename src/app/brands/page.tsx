import React from "react";
import Title from "../_components/Title/Title";
import { FaTags } from "react-icons/fa6";
import Card from "../_components/Card/Card";
import { getAllBrands } from "@/api/services/routemisr.service";

export default  async function brands() {



  const allBrands = await getAllBrands()




  return (
  <>
    <Title
      bgColor="bg-gradient-to-br from-violet-600 via-violet-500 to-purple"
      breadCrumbs="Brands"
      heading="Top Brands"
      subHeading="Shop from your favorite brands"
      icon={<FaTags className="text-4xl" />}
    />


    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">

        {allBrands?.map((brand)=>(
          <Card hoverStyle="text-violet-600" key={brand.slug} image={brand.image} imageInfo={brand.slug} name={brand.name} view={"Products"} id={brand._id}/>
        ))}
                      
      </div>
    </div>
  
  
  </>
  );
}
