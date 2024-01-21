import dynamic from "next/dynamic";
import Header5 from "@/components/header/header-5";
import Hero5 from "@/components/hero/hero-5";
import Link from "next/link";
import Footer4 from "@/components/footer/footer-4";
import Tours2 from "@/components/tour-single-new/Tours2";
import TourCategories from "@/components/home/home-5/TourCategories";
import Locations from "@/components/home/home-5/Locations";
import CallToActions from "@/components/home/home-5/CallToActions";
import Blog from "@/components/blog/Blog3";
import Tours3 from "@/components/tour-single-new/Tours3";
import DiscountsBanner from "@/components/home/home-5/DiscountsBanner";
import Counter3 from "@/components/counter/Counter3";
import WhyChooseUs from "@/components/home/home-5/WhyChooseUs";
import Testimonial from "@/components/home/home-5/Testimonial";
import Brand2 from "@/components/brand/Brand2";
import PopularDestinations from "@/components/home/home-main/PopularDestinations";
import Cruise3 from "@components/home/home-main/Cruise3";
import AboutIntro from "@components/home/home-main/AboutIntro";
import WhyChoose from "@/components/home/home-main/WhyChoose";
import Hero1 from "@components/hero/hero-main";
import Header1 from "@/components/header/header-main";

export const metadata = {
  title: "Home-5 || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const home_main = () => {
  return (
    <>
      {/* End Page Title */}

      {/* <Header5 /> */}
      {/* End Header 5 */}
      <Header1 />
      {/* End Header 1 */}

      {/* <Hero5 /> */}
      {/* End Hero 5 */}
      <Hero1 />
      {/* End Hero 1 */}

      <section
        className="layout-pt-md layout-pb-md relative"
        id="secondSection"
      >
        <div className="container">
          <div className="row y-gap-20 justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Destinations</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row x-gap-10 y-gap-10 pt-40 sm:pt-20 item_gap-x10">
            <PopularDestinations />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Hero 9 */}

      <section className="layout-pt-md layout-pb-sm">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Featured Cruise Deals</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="/cruise/cruise-list-v2"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20">
            <Cruise3 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Features Cruise Deals Sections */}

      <section className="layout-pt-sm layout-pb-lg">
        <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Choose Tour Types</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="d-flex x-gap-15 items-center ">
                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-left-hover js-tour-type-prev">
                    <i className="icon icon-arrow-left" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination -dots text-border js-tour-type-pag" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="d-flex items-center text-24 arrow-right-hover js-tour-type-next">
                    <i className="icon icon-arrow-right" />
                  </button>
                </div>
                {/* End next */}
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="relative overflow-hidden pt-40 sm:pt-20">
            <TourCategories />
          </div>
        </div>
      </section>
      {/* End Tours Categories */}

      <AboutIntro />
      {/* About Intro Cruise  Sections */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-4 col-lg-5">
              <h2 className="text-30 fw-600">Why Choose Us</h2>
              <p className="mt-5">
                These popular destinations have a lot to offer
              </p>
              <p className="text-dark-1 mt-40 sm:mt-20">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
              <div className="d-inline-block mt-40 sm:mt-20">
                <a
                  href="#"
                  className="button -md -blue-1 bg-yellow-1 text-dark-1"
                >
                  Learn More <div className="icon-arrow-top-right ml-15" />
                </a>
              </div>
            </div>
            {/* End .col */}

            <div className="col-xl-6 offset-xl-1 col-lg-7">
              <div className="row y-gap-60">
                <WhyChoose />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Why Choose  Sections */}

      <section className="layout-pt-sm layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <Counter3 />
          </div>
        </div>
      </section>
      {/* End counter up Section */}

      <section className="section-bg layout-pt-md">
        <div className="section-bg__item col-12">
          <img src="/img/backgrounds/testimonials/bg.png" alt="image" />
        </div>
        {/* End bg image */}

        <div data-aos="fade-up" data-aos-delay="100" className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Customer Reviews</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames ac ante ipsum
                </p>
              </div>
            </div>
            {/* End .col-auto */}
          </div>
          {/* End .row */}

          <div className="row justify-center pt-60 md:pt-30">
            <div className="col-xl-5 col-lg-8 col-md-11">
              <div className="overflow-hidden">
                <Testimonial />
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Customer review Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="text-15 lh-1">Trusted by the world’s best</div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between items-center pt-60 lg:pt-40 sm:pt-20">
            <Brand2 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End brand partner Section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Get inspiration for your next trip
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames
                </p>
              </div>
            </div>
          </div>
          {/* End .row  */}
          <div className="row y-gap-30 pt-40">
            <Blog />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End blog Section */}

      <CallToActions />
      {/* End CallToActions */}

      <Footer4 />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_main), { ssr: false });
