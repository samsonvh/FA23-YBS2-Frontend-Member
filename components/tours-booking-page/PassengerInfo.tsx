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
import { useState } from "react";

const PassengerInfo = () => {
  const [passengerList, setPassengerList] = useState([
    { key: "Passenger 1", value: 1 },
  ]);
  const [defaultPassengerPos, setDefaultPassengerPos] = useState(0);

  const [passengerInfoList, setPassengerInfoList] = useState([]);

  const addPassenger = () => {
    const pos = passengerList.length + 1;
    setPassengerList([
      ...passengerList,
      { key: "Passenger " + pos, value: pos },
    ]);
    setDefaultPassengerPos(pos - 1);
  };

  return (
    <>
      <div className="col-xl-7 col-lg-8 mt-30">
        <div className="row y-gap-20 items-center justify-between">
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" name="name" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-16 lh-10 text-light-1 ml-10">
                Not include yourself as a passenger
              </div>
            </div>
          </div>
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
                <Select
                  value={passengerList.at(defaultPassengerPos).value.toString()}
                >
                  <SelectTrigger className="tw-text-lg">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {passengerList.map((passenger) => (
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
                <Button onClick={addPassenger}>Add</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="row x-gap-20 y-gap-20 pt-20">
          <div className="col-12">
            <div className="form-input ">
              <input type="text" required />
              <label className="lh-1 text-16 text-light-1">Full Name</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input type="text" required />
              <label className="lh-1 text-16 text-light-1">
                Identity Number
              </label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input type="text" required />
              <label className="lh-1 text-16 text-light-1">Phone Number</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="form-input ">
              <textarea required rows={6} defaultValue={""} />
              <label className="lh-1 text-16 text-light-1">
                Special Requests
              </label>
            </div>
          </div>
          {/* End col-12 */}

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
          <BookingDetails />
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default PassengerInfo;
