"use client";

import { IPassenger } from "@/data/RequestInterfaces";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const PassengerForm = ({
  index,
  // passenger,
  passengerList,
  setPassengerList,
}: {
  index: number;
  // passenger: IPassenger;
  passengerList: IPassenger[];
  setPassengerList: Dispatch<SetStateAction<IPassenger[]>>;
}) => {
  const [passenger, setPassenger] = useState(passengerList[index]);
  const [isReadonly, setIsReadonly] = useState(false);
  useEffect(() => {
    setPassenger(passengerList[index]);
    if (index === 0) {
      setIsReadonly(true);
    } else {
      setIsReadonly(false);
    }
  }, [index]);

  const setGender = (value: string) => {
    passenger.gender = Number.parseInt(value);
    passengerList[index] = passenger;
    setPassengerList(passengerList);
  };

  const onChangeHandler = (key, value) => {
    if (value == "") {
      delete passenger[key];
      passengerList[index] = passenger;
      setPassengerList(passengerList);
    } else {
      passenger[key] = value;
      passengerList[index] = passenger;
      setPassengerList(passengerList);
    }
  };

  return (
    <>
      <div className="col-12">
        <div className="form-input ">
          <input
            type="text"
            defaultValue={passenger?.fullName ? passenger.fullName : ""}
            onChange={(event) =>
              onChangeHandler("fullName", event.target.value)
            }
            readOnly={isReadonly}
            required
          />
          <label
            className={`lh-1 text-16 text-light-1 ${
              isReadonly ? "-tw-translate-y-[10px]" : ""
            }`}
          >
            Full Name
          </label>
        </div>
      </div>
      {/* End col-12 */}

      <div className="col-md-6">
        <div className="form-input ">
          <Select
            required
            // value={(passenger.gender) ? passenger.gender.toString() : "0"}
            onValueChange={setGender}
            defaultValue={passenger?.gender ? passenger.gender.toString() : "0"}
          >
            <SelectTrigger className="select">
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Male</SelectItem>
              <SelectItem value="1">Female</SelectItem>
              <SelectItem value="2">Others</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* End col-12 */}

      <div className="col-md-6">
        <div className="form-input ">
          <input
            type="date"
            defaultValue={
              passenger?.dob ? passenger.dob.toString() : "2000-01-01"
            }
            required
            onChange={(event) => onChangeHandler("dob", event.target.value)}
          />
          <label className="lh-1 text-14 text-light-1">Date of Birth</label>
        </div>
      </div>
      {/* End col-12 */}

      <div className="col-md-6">
        <div className="form-input ">
          <input
            type="text"
            defaultValue={passenger?.identityNumber ? passenger.identityNumber : ""}
            onChange={(event) =>
              onChangeHandler("identityNumber", event.target.value)
            }
            required
          />
          <label className="lh-1 text-16 text-light-1">Identity Number</label>
        </div>
      </div>
      {/* End col-12 */}

      <div className="col-md-6">
        <div className="form-input ">
          <input
            type="text"
            defaultValue={passenger?.phoneNumber ? passenger.phoneNumber : ""}
            onChange={(event) =>
              onChangeHandler("phoneNumber", event.target.value)
            }
            readOnly={isReadonly}
            required
          />
          <label
            className={`lh-1 text-16 text-light-1 ${
              isReadonly ? "-tw-translate-y-[10px]" : ""
            }`}
          >
            Phone Number
          </label>
        </div>
      </div>
      {/* End col-12 */}

      <div className="col-12">
        <div className="form-input ">
          <textarea
            className="tw-pt-8"
            rows={6}
            defaultValue={
              passenger?.specialRequest ? passenger.specialRequest : ""
            }
            onChange={(event) =>
              onChangeHandler("specialRequest", event.target.value)
            }
          />
          <label className="lh-1 text-16 text-light-1">Special Requests</label>
        </div>
      </div>
      {/* End col-12 */}
    </>
  );
};

export default PassengerForm;
