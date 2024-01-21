import { IBooking } from "@/data/ResponseInterfaces";
import { getBookingById } from "@/networks/apis/BookingsAPIs";
// import React, { useEffect, useState } from "react";

// const OrderSubmittedInfo = async ({ params }) => {
//   const booking: IBooking = await getBookingById(params.id);

//   if (booking)
//     return (
//       <>
//         <div className="col-xl-8 col-lg-8">
//           <div className="order-completed-wrapper">
//             <div className="d-flex flex-column items-center mt-40 lg:md-40 sm:mt-24">
//               <div className="size-80 flex-center rounded-full bg-dark-3">
//                 <i className="icon-check text-30 text-white" />
//               </div>
//               <div className="text-30 lh-1 fw-600 mt-20">
//                 System, your order was submitted successfully!
//               </div>
//               <div className="text-15 text-light-1 mt-10">
//                 Booking details has been sent to: {booking.email}
//               </div>
//             </div>
//             {/* End header */}

//             <div className="border-type-1 rounded-8 px-50 py-35 mt-40">
//               <div className="row">
//                 <div className="col-lg-2 col-md-6">
//                   <div className="text-15 lh-12">Order Number</div>
//                   <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
//                     {booking.id}
//                   </div>
//                 </div>
//                 {/* End .col */}
//                 <div className="col-lg-2 col-md-6">
//                   <div className="text-15 lh-12">Tour</div>
//                   <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
//                     {booking.tourName}
//                   </div>
//                 </div>
//                 {/* End .col */}
//                 <div className="col-lg-2 col-md-6">
//                   <div className="text-15 lh-12">Duration</div>
//                   <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
//                     {booking.startTime.toString()} -{" "}
//                     {booking.endTime.toString()}
//                   </div>
//                 </div>
//                 {/* End .col */}
//                 <div className="col-lg-2 col-md-6">
//                   <div className="text-15 lh-12">Booking Date</div>
//                   <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
//                     {booking.bookingDate.toString()}
//                   </div>
//                 </div>
//                 {/* End .col */}
//                 <div className="col-lg-2 col-md-6">
//                   <div className="text-15 lh-12">Total</div>
//                   <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
//                     {booking.totalAmount.toLocaleString()} VND
//                   </div>
//                 </div>
//                 {/* End .col */}
//                 <div className="col-lg-2 col-md-6">
//                   <div className="text-15 lh-12">Payment Method</div>
//                   <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
//                     {booking.paymentMethod}
//                   </div>
//                 </div>
//                 {/* End .col */}
//               </div>
//             </div>
//             {/* order price info */}

//             <div className="border-light rounded-8 px-50 py-40 mt-40">
//               <h4 className="text-20 fw-500 mb-30">Your Information</h4>
//               <div className="row y-gap-10">
//                 <div className="col-12">
//                   <div className="d-flex justify-between ">
//                     <div className="text-15 lh-16">Full name</div>
//                     <div className="text-15 lh-16 fw-500 text-blue-1">
//                       {booking.fullName}
//                     </div>
//                   </div>
//                 </div>
//                 {/* End .col */}
//                 {/* <div className="col-12">
//                   <div className="d-flex justify-between border-top-light pt-10">
//                     <div className="text-15 lh-16">Last name</div>
//                     <div className="text-15 lh-16 fw-500 text-blue-1">
//                       Admin
//                     </div>
//                   </div>
//                 </div> */}
//                 {/* End .col */}
//                 <div className="col-12">
//                   <div className="d-flex justify-between border-top-light pt-10">
//                     <div className="text-15 lh-16">Email</div>
//                     <div className="text-15 lh-16 fw-500 text-blue-1">
//                       {booking.email}
//                     </div>
//                   </div>
//                 </div>
//                 {/* End .col */}
//                 <div className="col-12">
//                   <div className="d-flex justify-between border-top-light pt-10">
//                     <div className="text-15 lh-16">Phone</div>
//                     <div className="text-15 lh-16 fw-500 text-blue-1">
//                       {booking.phoneNumber}
//                     </div>
//                   </div>
//                 </div>
//                 {/* End .col */}
//                 <div className="col-12">
//                   <div className="d-flex justify-between border-top-light pt-10">
//                     <div className="text-15 lh-16">Address line 1</div>
//                     <div className="text-15 lh-16 fw-500 text-blue-1" />
//                   </div>
//                 </div>
//                 {/* End .col */}
//                 <div className="col-12">
//                   <div className="d-flex justify-between border-top-light pt-10">
//                     <div className="text-15 lh-16">Total Passenger</div>
//                     <div className="text-15 lh-16 fw-500 text-blue-1">
//                       {booking.totalPassengers}
//                     </div>
//                   </div>
//                 </div>
//                 {/* End .col */}
//                 <div className="col-12">
//                   <div className="d-flex justify-between border-top-light pt-10">
//                     <div className="text-15 lh-16">Tour Location</div>
//                     <div className="text-15 lh-16 fw-500 text-blue-1">
//                       {booking.location}
//                     </div>
//                   </div>
//                 </div>
//                 {/* End .col */}
//                 {/* <div className="col-12">
//                   <div className="d-flex justify-between border-top-light pt-10">
//                     <div className="text-15 lh-16">State/Province/Region</div>
//                     <div className="text-15 lh-16 fw-500 text-blue-1" />
//                   </div>
//                 </div> */}
//                 {/* End .col */}
//                 {/* <div className="col-12">
//                   <div className="d-flex justify-between border-top-light pt-10">
//                     <div className="text-15 lh-16">ZIP code/Postal code</div>
//                     <div className="text-15 lh-16 fw-500 text-blue-1" />
//                   </div>
//                 </div> */}
//                 {/* End .col */}
//                 {/* <div className="col-12">
//                   <div className="d-flex justify-between border-top-light pt-10">
//                     <div className="text-15 lh-16">Country</div>
//                     <div className="text-15 lh-16 fw-500 text-blue-1">
//                       United States
//                     </div>
//                   </div>
//                 </div> */}
//                 {/* End .col */}
//                 <div className="col-12">
//                   <div className="d-flex justify-between border-top-light pt-10">
//                     <div className="text-15 lh-16">Special Requirements</div>
//                     <div className="text-15 lh-16 fw-500 text-blue-1">
//                       {booking.specialRequest}
//                     </div>
//                   </div>
//                 </div>
//                 {/* End .col */}
//               </div>
//               {/* End .row */}
//             </div>
//             {/* End order information */}
//           </div>
//         </div>
//       </>
//     );
// };

import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import DefaultHeader from "@/components/header/default-header";
import DefaultFooter from "@/components/footer/default";
import LoginWithSocial from "@/components/common/LoginWithSocial";
import SignUpForm from "@/components/common/SignUpForm";
import StepperSignup from "@components/signup/stepper-signup";
import { useState } from "react";

export const metadata = {
  title: "Sign Up || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const OrderSubmittedInfo = async ({ params }) => {
  const booking: IBooking = await getBookingById(params.id);

console.log(booking)

  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <DefaultHeader />
      {/* End Header 1 */}

      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-8 col-lg-8 tw-bg-white tw-py-6 tw-rounded-lg">
              <div className="order-completed-wrapper">
                <div className="d-flex flex-column items-center mt-40 lg:md-40 sm:mt-24">
                  <div className="size-80 flex-center rounded-full bg-dark-3">
                    <i className="icon-check text-30 text-white" />
                  </div>
                  <div className="text-30 lh-1 fw-600 mt-20">
                    System, your order was submitted successfully!
                  </div>
                  <div className="text-15 text-light-1 mt-10">
                    Booking details has been sent to: {booking.email}
                  </div>
                </div>
                {/* End header */}

                <div className="border-type-1 rounded-8 px-50 py-35 mt-40">
                  <div className="row">
                    <div className="col-lg-3 col-md-6">
                      <div className="text-15 lh-12">Order Number</div>
                      <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                        {booking.id}
                      </div>
                    </div>
                    {/* End .col */}
                    {/* <div className="col-lg-3 col-md-6">
                      <div className="text-15 lh-12">Tour</div>
                      <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                        {booking.tourName}
                      </div>
                    </div> */}
                    {/* End .col */}
                    {/* <div className="col-lg-3 col-md-6">
                      <div className="text-15 lh-12">Duration</div>
                      <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                        {booking.startTime.toString()} -{" "}
                        {booking.endTime.toString()}
                      </div>
                    </div> */}
                    {/* End .col */}
                    <div className="col-lg-3 col-md-6">
                      <div className="text-15 lh-12">Booking Date</div>
                      <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                        {booking.bookingDate.toString()}
                      </div>
                    </div>
                    {/* End .col */}
                    <div className="col-lg-3 col-md-6">
                      <div className="text-15 lh-12">Total</div>
                      <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                        {booking.totalAmount.toLocaleString()} VND
                      </div>
                    </div>
                    {/* End .col */}
                    <div className="col-lg-3 col-md-6">
                      <div className="text-15 lh-12">Payment Method</div>
                      <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                        {booking.paymentMethod}
                      </div>
                    </div>
                    {/* End .col */}
                  </div>
                </div>
                {/* order price info */}

                <div className="border-light rounded-8 px-50 py-40 mt-40">
                  <h4 className="text-20 fw-500 mb-30">Your Information</h4>
                  <div className="row y-gap-10">
                    <div className="col-12">
                      <div className="d-flex justify-between ">
                        <div className="text-15 lh-16">Full name</div>
                        <div className="text-15 lh-16 fw-500 text-blue-1">
                          {booking.fullName}
                        </div>
                      </div>
                    </div>
                    {/* End .col */}
                    {/* <div className="col-12">
                  <div className="d-flex justify-between border-top-light pt-10">
                    <div className="text-15 lh-16">Last name</div>
                    <div className="text-15 lh-16 fw-500 text-blue-1">
                      Admin
                    </div>
                  </div>
                </div> */}
                    {/* End .col */}
                    <div className="col-12">
                      <div className="d-flex justify-between border-top-light pt-10">
                        <div className="text-15 lh-16">Email</div>
                        <div className="text-15 lh-16 fw-500 text-blue-1">
                          {booking.email}
                        </div>
                      </div>
                    </div>
                    {/* End .col */}
                    <div className="col-12">
                      <div className="d-flex justify-between border-top-light pt-10">
                        <div className="text-15 lh-16">Phone</div>
                        <div className="text-15 lh-16 fw-500 text-blue-1">
                          {booking.phoneNumber}
                        </div>
                      </div>
                    </div>
                    {/* End .col */}
                    <div className="col-12">
                      <div className="d-flex justify-between border-top-light pt-10">
                        <div className="text-15 lh-16">Address line 1</div>
                        <div className="text-15 lh-16 fw-500 text-blue-1" />
                      </div>
                    </div>
                    {/* End .col */}
                    <div className="col-12">
                      <div className="d-flex justify-between border-top-light pt-10">
                        <div className="text-15 lh-16">Total Passenger</div>
                        <div className="text-15 lh-16 fw-500 text-blue-1">
                          {booking.totalPassengers}
                        </div>
                      </div>
                    </div>
                    {/* End .col */}
                    <div className="col-12">
                      <div className="d-flex justify-between border-top-light pt-10">
                        <div className="text-15 lh-16">Tour Name</div>
                        <div className="text-15 lh-16 fw-500 text-blue-1">
                          {booking.tourName}
                        </div>
                      </div>
                    </div>
                    {/* End .col */}
                    <div className="col-12">
                      <div className="d-flex justify-between border-top-light pt-10">
                        <div className="text-15 lh-16">Tour Duration</div>
                        <div className="text-15 lh-16 fw-500 text-blue-1">
                          {booking.startTime.toString()} -{" "}
                          {booking.endTime.toString()}
                        </div>
                      </div>
                    </div>
                    {/* End .col */}
                    <div className="col-12">
                      <div className="d-flex justify-between border-top-light pt-10">
                        <div className="text-15 lh-16">Tour Location</div>
                        <div className="text-15 lh-16 fw-500 text-blue-1">
                          {booking.location}
                        </div>
                      </div>
                    </div>
                    {/* End .col */}
                    {/* <div className="col-12">
                  <div className="d-flex justify-between border-top-light pt-10">
                    <div className="text-15 lh-16">State/Province/Region</div>
                    <div className="text-15 lh-16 fw-500 text-blue-1" />
                  </div>
                </div> */}
                    {/* End .col */}
                    {/* <div className="col-12">
                  <div className="d-flex justify-between border-top-light pt-10">
                    <div className="text-15 lh-16">ZIP code/Postal code</div>
                    <div className="text-15 lh-16 fw-500 text-blue-1" />
                  </div>
                </div> */}
                    {/* End .col */}
                    {/* <div className="col-12">
                  <div className="d-flex justify-between border-top-light pt-10">
                    <div className="text-15 lh-16">Country</div>
                    <div className="text-15 lh-16 fw-500 text-blue-1">
                      United States
                    </div>
                  </div>
                </div> */}
                    {/* End .col */}
                    <div className="col-12">
                      <div className="d-flex justify-between border-top-light pt-10">
                        <div className="text-15 lh-16">
                          Special Requirements
                        </div>
                        <div className="text-15 lh-16 fw-500 text-blue-1">
                          {booking.specialRequest}
                        </div>
                      </div>
                    </div>
                    {/* End .col */}
                  </div>
                  {/* End .row */}
                </div>
                {/* End order information */}
              </div>
            </div>
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

export default dynamic(() => Promise.resolve(OrderSubmittedInfo), {
  ssr: false,
});

// export default OrderSubmittedInfo;
