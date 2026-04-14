import Image from "next/image";
import FeaturedProducts from "./_components/FeaturedProducts/FeaturedProducts";
import HomeSlider from "./_components/HomeSlider/HomeSlider";
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
// @ts-ignore
import 'swiper/css/pagination';

export default function Home() {
  return (
    <>
    <HomeSlider  />
    <FeaturedProducts/>
    </>
  );
}
