"use client";

import React, { useEffect, useRef, useState } from "react";
import PersonalInfo from "../PersonalInfo";
import AccountInfo from "../AccountInfo";
import { IRegistrationInputRequest } from "@/data/RequestInterfaces";
import { registerMember } from "@/networks/apis/MembersAPIs";
import SuccessDialog from "@/components/dialog/SuccessDialog";
import ErrorDialog from "@/components/dialog/ErrorDialog";
import useFCM from "@/utils/hooks/useFCM";
import { redirect } from "next/navigation";

const Index = () => {
  const { messages, fcmToken } = useFCM();
  const [registration, setRegistration] = useState<IRegistrationInputRequest>(
    {} as IRegistrationInputRequest
  );
  const [successOpen, setSuccessOpen] = useState<boolean>(false);
  const [errorOpen, setErrorOpen] = useState<boolean>(false);
  const personalFormRef = useRef<HTMLButtonElement>();
  const [membershipRegistrationId, setMembershipRegistrationId] = useState("");

  useEffect(() => {
    setRegistration({ ...registration, deviceToken: fcmToken });
    console.log(registration)
  }, [fcmToken]);

  useEffect(() => {
    if (messages && membershipRegistrationId !== "") {
      messages.reverse().map((message) => {
        if (
          message.notification?.title === membershipRegistrationId &&
          message.notification?.body === "true"
        ) {
          setSuccessOpen(!successOpen);
        }
      });
    }
  }, [messages]);

  useEffect(() => {
    if (successOpen == false && membershipRegistrationId !== "") {
      redirect("/login");
    }
  }, [successOpen]);

  const submit = async () => {
    setRegistration({ ...registration, deviceToken: fcmToken });
    const res = await registerMember(registration);
    if (res) {
      window.open(
        res.paymentURL,
        "YBS - VNPay Portal",
        "toolbar=no,menubar=no,scrollbars=no,location=no,status=no"
      );
      setMembershipRegistrationId(res.membershipRegistrationId);
    } else {
      setErrorOpen(!errorOpen);
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
        <PersonalInfo
          registration={registration}
          setRegistration={setRegistration}
        />
      ),
    },
    {
      title: "Account Details",
      stepNo: "2",
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
      content: (
        <AccountInfo
          registration={registration}
          setRegistration={setRegistration}
        />
      ),
    },
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
                  onClick={() => {
                    console.log(currentStep);
                    if (currentStep !== index)
                      if (currentStep === 0) {
                        personalFormRef.current.click();
                      } else {
                        setCurrentStep(index);
                      }
                  }}
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

        <div className="row py-20 pt-40 tw-justify-center">{renderStep()}</div>
        {/* End main content */}

        <div className="row x-gap-20 y-gap-20 pt-20">
          <div className="col-auto">
            <button
              className="button h-50 px-24 -blue-1 bg-light-2"
              disabled={currentStep === 0}
              onClick={previousStep}
            >
              Previous
            </button>
          </div>
          {/* End prvious btn */}

          <div className="col-auto">
            <button
              ref={personalFormRef}
              className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
              disabled={currentStep === steps.length - 1}
              type="submit"
              // onClick={(e) => setErrorOpen(!errorOpen)}
            >
              Next <div className="icon-arrow-top-right ml-15" />
            </button>
          </div>
          {/* End next btn */}
        </div>
        {/* End stepper button */}
        <SuccessDialog
          open={successOpen}
          setOpen={setSuccessOpen}
          message="Registed Successfully"
        />
        <ErrorDialog
          open={errorOpen}
          setOpen={setErrorOpen}
          message="Register Failed"
        />
      </form>
    </>
  );
};

export default Index;
