import Image from "next/image";
import FeaturedProducts from "./_components/FeaturedProducts/FeaturedProducts";
import HomeSlider from "./_components/HomeSlider/HomeSlider";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
import HomeCategories from "./_components/HomeCategories/HomeCategories";

import { lazy, Suspense } from "react";
import { ThreeDots } from "react-loader-spinner";

const LazyHomeCategories = lazy(
  () => import(`./_components/HomeCategories/HomeCategories`),
);

export default function Home() {
  return (
    <>
      <HomeSlider />
      <Suspense
        fallback={
          <div className="h-75 grid place-items-center">
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              radius="9"
              ariaLabel="three-dots-loading"
            />
          </div>
        }
      >
        <LazyHomeCategories />
      </Suspense>
      <FeaturedProducts />
    </>
  );
}
