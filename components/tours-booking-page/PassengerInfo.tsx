"use client";

import Link from "next/link";
import BookingDetails from "./sidebar/BookingDetails";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { ITour } from "@/data/ResponseInterfaces";
import { IBookingTemp } from "@/data/ModelInterfaces";
import PassengerForm from "./PassengerForm";
import { IBookingRequest, IPassenger } from "@/data/RequestInterfaces";

const PassengerInfo = ({
  tour,
  bookingTemp,
  bookingRequest,
  setBookingRequest,
}: {
  tour: ITour;
  bookingTemp: IBookingTemp;
  bookingRequest: IBookingRequest;
  setBookingRequest: Dispatch<SetStateAction<IBookingRequest>>;
}) => {
  console.log(bookingRequest);

  const [passengerInfoList, setPassengerInfoList] = useState(
    bookingRequest.passengers
  );
  const [currentPassengerPos, setCurrentPassengerPos] = useState(0);

  const [selectPos, setSelectPos] = useState("1");
  const [selectList, setSelectList] = useState([
    { key: "Passenger 1", value: 1 },
  ]);

  const addPassenger = () => {
    const pos = selectList.length + 1;
    setSelectList([...selectList, { key: "Passenger " + pos, value: pos }]);
    setPassengerInfoList([
      ...passengerInfoList,
      { isLeader: false } as IPassenger,
    ]);
    setBookingRequest({ ...bookingRequest, passengers: passengerInfoList });
    setCurrentPassengerPos(pos - 1);
  };

  useEffect(() => {
    for (var i = 0; i < passengerInfoList.length; i++) {
      if (i == 0) {
        continue;
      }
      setSelectList([
        ...selectList,
        { key: "Passenger " + (i + 1), value: i + 1 },
      ]);
    }
  }, []);

  useEffect(() => {
    setSelectPos(selectList.length.toString());
  }, [selectList]);

  useEffect(() => {
    console.log(passengerInfoList);
    setCurrentPassengerPos(Number.parseInt(selectPos) - 1);
  }, [selectPos]);

  useEffect(() => {
    setBookingRequest({ ...bookingRequest, passengers: passengerInfoList });
  }, [passengerInfoList]);

  return (
    <>
      <div className="col-xl-7 col-lg-8 mt-30">
        <div className="row y-gap-20 items-center justify-between">
          {/* <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" name="name" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-16 lh-10 text-light-1 ml-10">
                Not include yourself as a passenger
              </div>
            </div>
          </div> */}
          {/* End col-auto */}
        </div>
        {/* End terms and conditons */}

        <div className="row x-gap-20 y-gap-20">
          <div className="col-12 col-md-7">
            <h2 className="text-22 fw-500 mt-20">Passenger's Information</h2>
          </div>
          <div className="col-12 col-md-5 md:tw-pt-6">
            <div className="row">
              <div className="col">
                <Select value={selectPos} onValueChange={setSelectPos}>
                  <SelectTrigger className="tw-text-lg">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {selectList.map((passenger) => (
                      <SelectItem
                        key={passenger.key}
                        value={passenger.value.toString()}
                      >
                        {passenger.key}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="col-auto">
                <Button
                  onClick={(event) => {
                    event.preventDefault();
                    addPassenger();
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="row x-gap-20 y-gap-20 pt-20">
          {/* {passengerInfoList.map((passenger, index) => (
            <div key={index} className={`row x-gap-20 y-gap-20`}> */}
          <PassengerForm
            index={currentPassengerPos}
            // passenger={currentPassenger}
            passengerList={passengerInfoList}
            setPassengerList={setPassengerInfoList}
          />
          {/* </div> */}
          {/* ))} */}

          <div className="col-12">
            <div className="row y-gap-20 items-center justify-between">
              <div className="col-auto">
                <div className="text-14 text-light-1">
                  By proceeding with this booking, I agree to GoTrip Terms of
                  Use and Privacy Policy.
                </div>
              </div>
              {/* End col-12 */}
            </div>
          </div>
          {/* End col-12 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .col-xl-7 */}

      <div className="col-xl-5 col-lg-4 mt-30">
        <div className="booking-sidebar">
          <BookingDetails tour={tour} bookingTemp={bookingTemp} />
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default PassengerInfo;
