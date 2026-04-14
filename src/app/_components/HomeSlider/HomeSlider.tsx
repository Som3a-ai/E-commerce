"use client";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

import { useRef } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import homeImg from "../../../assests/home-slider-1.d79601a8.png";
import Link from "next/link";

export default function HomeSlider() {
  const swiperRef = useRef<any>(null);

  return (
    <section>
      <div className="relative">
        {/* CUSTOM ARROWS */}
        <div
          onClick={() => swiperRef.current?.slidePrev()}
          className=" absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full w-12 h-12 hidden md:flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaChevronLeft />
        </div>

        <div
          onClick={() => swiperRef.current?.slideNext()}
          className=" absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full w-12 h-12 hidden md:flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        >
          <FaChevronRight />
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={0}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div
              style={{
                backgroundImage: `url('${homeImg.src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="h-100 flex items-center justify-center"
            >
              <div className=" py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50">
                <div className="container h-full content-center">
                  <h2
                    className="text-white text-3xl font-bold mb-4 max-w-96"
                    style={{ opacity: "1", transform: "none" }}
                  >
                    Fresh Products Delivered to your Door
                  </h2>
                  <p style={{ opacity: "1", transform: "none" }}>
                    Get 20% off your first order
                  </p>
                  <div
                    className="mt-4"
                    style={{ opacity: "1", transform: "none" }}
                  >
                    <Link
                      className="btn bg-white border-2 border-white/50 text-green-500 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
                      href="/products"
                    >
                      Shop Now
                    </Link>
                    <Link
                      className="btn bg-transparent border-2 border-white/50 text-white ml-2 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
                      href="/deals"
                    >
                      View Deals
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              style={{
                backgroundImage: `url('${homeImg.src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="h-100 flex items-center justify-center"
            >
              <div className=" py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50">
                <div className="container h-full content-center">
                  <h2
                    className="text-white text-3xl font-bold mb-4 max-w-96"
                    style={{ opacity: "1", transform: "none" }}
                  >
                    Premium Quality Guaranteed
                  </h2>
                  <p style={{ opacity: "1", transform: "none" }}>
                    Fresh from farm to your table
                  </p>
                  <div
                    className="mt-4"
                    style={{ opacity: "1", transform: "none" }}
                  >
                    <Link
                      className="btn bg-white border-2 border-white/50 text-blue-500 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
                      href="/products"
                    >
                      Shop Now
                    </Link>
                    <Link
                      className="btn bg-transparent border-2 border-white/50 text-white ml-2 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
                      href="/about"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              style={{
                backgroundImage: `url('${homeImg.src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="h-100 flex items-center justify-center"
            >
              <div className=" py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50">
                <div className="container h-full content-center">
                  <h2
                    className="text-white text-3xl font-bold mb-4 max-w-96"
                    style={{ opacity: "1", transform: "none" }}
                  >
                    Fast & Free Delivery
                  </h2>
                  <p style={{ opacity: "1", transform: "none" }}>
                    Same day delivery available
                  </p>
                  <div
                    className="mt-4"
                    style={{ opacity: "1", transform: "none" }}
                  >
                    <Link
                      className="btn bg-white border-2 border-white/50 text-blue-500 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
                      href="/products"
                    >
                      Order Now
                    </Link>
                    <Link
                      className="btn bg-transparent border-2 border-white/50 text-white ml-2 inline-block px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform"
                      href="/delivery"
                    >
                      Delivery Info
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
