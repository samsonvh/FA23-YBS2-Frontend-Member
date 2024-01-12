import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import LoginWithSocial from "@/components/common/LoginWithSocial";
import SignUpForm from "@/components/common/SignUpForm";
import MembershipPackage from "@/components/membership-packages/MembershipPackage";
import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useEffect } from "react";
import { GetMembershipPackages } from "@/networks/apis/MembershipPackagesAPIs";
import MembershipPackagesSwiper from "@/components/membership-packages/MembershipPackagesSwiper";

export const metadata = {
  title: "Sign Up || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const MembershipPackages = () => {
  

  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <section className="layout-pt-md layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center y-gap-20">
            <MembershipPackagesSwiper />
          </div>
        </div>
      </section>
      {/* End login section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(MembershipPackages), {
  ssr: false,
});
