"use client";

import React, { useEffect, useRef, useState } from "react";
import CustomerInfo from "../CustomerInfo";
import PaymentInfo from "../PaymentInfo";
import OrderSubmittedInfo from "../OrderSubmittedInfo";
import PassengerInfo from "../PassengerInfo";
import { getTourById } from "@/networks/apis/ToursAPIs";
import { ITour } from "@/data/ResponseInterfaces";
import { IBookingTemp } from "@/data/ModelInterfaces";
import { IBookingRequest, IPassenger } from "@/data/RequestInterfaces";
import { createBooking } from "@/networks/apis/BookingsAPIs";
import { useRouter } from "next/navigation";

const Index = ({ tourId }: { tourId: string }) => {
  const router = useRouter();
  const form = useRef<HTMLButtonElement>();
  const [bookingRequest, setBookingRequest] = useState<IBookingRequest>(
    {} as IBookingRequest
  );
  const [bookingTemp, setBookingTemp] = useState<IBookingTemp>(null);
  const [tour, setTour] = useState<ITour>(null);
  useEffect(() => {
    if (tour == null) {
      const getTour = async (id) => {
        const temp = await getTourById(id);
        setTour(temp);
      };
      getTour(tourId);
      bookingRequest.tourId = tourId;
      bookingRequest.type = 0;
      bookingRequest.isIncludedBooker = true;
      bookingRequest.passengers = [{ isLeader: true } as IPassenger];
      setBookingRequest(bookingRequest);
    }
    if (!bookingTemp) {
      let temp = {} as IBookingTemp;
      const checkIn = window.sessionStorage.getItem("checkIn");
      const checkOut = window.sessionStorage.getItem("checkOut");
      const adultNumber = window.sessionStorage.getItem("adultNumber");
      const childrenNumber = window.sessionStorage.getItem("childrenNumber");
      if (checkIn) {
        temp.startDate = new Date(checkIn);
        bookingRequest.bookingDate = new Date(checkIn);
      }
      if (checkOut) {
        temp.endDate = new Date(checkOut);
      }
      if (adultNumber) {
        temp.adultNumber = Number.parseInt(adultNumber);
      }
      if (childrenNumber) {
        temp.childrenNumber = Number.parseInt(childrenNumber);
      }
      setBookingRequest(bookingRequest);
      setBookingTemp(temp);
    }
  }, []);

  // useEffect(() => {console.log(bookingRequest)}, [bookingRequest])

  const submit = async () => {
    const res = await createBooking(bookingRequest);
    console.log(res);
    if (res) {
      router.replace(`/bookings/${res.Id}`);
    }
  };

  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    {
      title: "Personal Details",
      stepNo: "1",
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
      content: (
        <CustomerInfo
          tour={tour}
          bookingTemp={bookingTemp}
          bookingRequest={bookingRequest}
          setBookingRequest={setBookingRequest}
        />
      ),
    },
    {
      title: "Passenger's Details",
      stepNo: "2",
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
      content: (
        <PassengerInfo
          tour={tour}
          bookingTemp={bookingTemp}
          bookingRequest={bookingRequest}
          setBookingRequest={setBookingRequest}
        />
      ),
    },
    // {
    //   title: "Payment Details",
    //   stepNo: "3",
    //   stepBar: (
    //     <>
    //       <div className="col d-none d-sm-block">
    //         <div className="w-full h-1 bg-border"></div>
    //       </div>
    //     </>
    //   ),
    //   content: <PaymentInfo />,
    // },
    // {
    //   title: "Final Step",
    //   stepNo: "3",
    //   stepBar: "",
    //   content: <OrderSubmittedInfo />,
    // },
  ];

  const renderStep = () => {
    const { content } = steps[currentStep];
    return <>{content}</>;
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (currentStep === 0) {
            nextStep();
            return false;
          } else {
            await submit();
          }
          return true;
        }}
      >
        <div className="row x-gap-40 y-gap-30 items-center">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="col-auto">
                <div
                  className="d-flex items-center cursor-pointer transition"
                  onClick={() =>
                    currentStep == 0
                      ? form.current.click()
                      : setCurrentStep(index)
                  }
                >
                  <div
                    className={
                      currentStep === index
                        ? "active size-40 rounded-full flex-center bg-blue-1"
                        : "size-40 rounded-full flex-center bg-blue-1-05 text-blue-1 fw-500"
                    }
                  >
                    {currentStep === index ? (
                      <>
                        <i className="icon-check text-16 text-white"></i>
                      </>
                    ) : (
                      <>
                        <span>{step.stepNo}</span>
                      </>
                    )}
                  </div>

                  <div className="text-18 fw-500 ml-10"> {step.title}</div>
                </div>
              </div>
              {/* End .col */}

              {step.stepBar}
            </React.Fragment>
          ))}
        </div>
        {/* End stepper header part */}

        <div className="row">{renderStep()}</div>
        {/* End main content */}

        <div className="row x-gap-20 y-gap-20 pt-20">
          <div className="col-auto">
            <button
              className="button h-60 px-24 -blue-1 bg-light-2"
              disabled={currentStep === 0}
              onClick={previousStep}
            >
              Previous
            </button>
          </div>
          {/* End prvious btn */}

          <div className="col-auto">
            <button
              ref={form}
              className="button h-60 px-24 -dark-1 bg-blue-1 text-white"
              type="submit"
              // disabled={currentStep === steps.length - 1}
              // onClick={nextStep}
            >
              {currentStep === steps.length - 1 ? "Submit" : "Next"}
              <div className="icon-arrow-top-right ml-15" />
            </button>
          </div>
          {/* End next btn */}
        </div>
        {/* End stepper button */}
      </form>
    </>
  );
};

export default Index;
