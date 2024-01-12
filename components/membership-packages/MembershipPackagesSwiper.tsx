"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import cruiseData from "../../data/cruise";
import isTextMatched from "@/utils/isTextMatched";
import { GetMembershipPackages } from "@/networks/apis/MembershipPackagesAPIs";
import { useEffect, useState } from "react";
import MembershipPackage from "./MembershipPackage";
import {
  IMembershipPackageListing,
  IPageResponse,
} from "@/data/ResponseInterfaces";

const MembershipPackagesSwiper = () => {
  const [data, setData] = useState([]);

  const getMembershipPackages = async () => {
    await GetMembershipPackages().then((res) => setData(res.data));
  };

  useEffect(() => {
    getMembershipPackages();
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-popular-car-next",
          prevEl: ".js-popular-car-prev",
        }}
        pagination={{
          el: ".js-car-pag_active",
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="">
              {/* <div className="px-30 py-30 md:px-50 md:py-20 bg-white shadow-4 rounded-4"> */}
              <div className="px-lg-5 py-lg-4 px-20 py-20 bg-white shadow-4 rounded-4">
                <MembershipPackage membershipPackage={item}/>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-left-hover js-popular-car-prev">
            <i className="icon icon-arrow-left" />
          </button>
        </div>
        {/* End arrow prev */}

        <div className="col-auto">
          <div className="pagination -dots text-border js-car-pag_active" />
        </div>
        {/* End arrow pagination */}

        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-right-hover js-popular-car-next">
            <i className="icon icon-arrow-right" />
          </button>
        </div>
        {/* End arrow next */}
      </div>
    </>
  );
};

export default MembershipPackagesSwiper;
