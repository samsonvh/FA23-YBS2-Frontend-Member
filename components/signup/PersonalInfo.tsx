import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CountriesData from "@data/countries.json";
import { ICountry } from "@/data/ModelInterfaces";
import { IRegistrationInputRequest } from "@/data/RequestInterfaces";

const SignUpForm = ({
  registration,
  setRegistration,
}: {
  registration: IRegistrationInputRequest;
  setRegistration: Dispatch<SetStateAction<IRegistrationInputRequest>>;
}) => {
  const [countries, setCountries] = useState<ICountry[]>(CountriesData);
  const [gender, setGender] = useState<string>();
  const [nationality, setNationality] = useState<string>();

  const onChangeHandler = (key, value) => {
    if (value == "") {
      delete registration[key];
      setRegistration(registration);
    } else {
      setRegistration({ ...registration, [key]: value });
    }
  };

  useEffect(() => {
    if (gender && registration.gender != Number.parseInt(gender))
      onChangeHandler("gender", Number.parseInt(gender));
    if (nationality && registration.nationality != nationality)
      onChangeHandler("nationality", nationality);
  }, [gender, nationality]);

  return (
    <div className="row y-gap-20">
      <div className="col-12">
        <div className="row y-gap-20">
          <div className="col-12 col-md-6">
            <div className="form-input ">
              <input
                type="text"
                defaultValue={
                  registration.fullName ? registration.fullName : ""
                }
                required
                onChange={(event) =>
                  onChangeHandler("fullName", event.target.value)
                }
              />
              <label className="lh-1 text-14 text-light-1">Full Name</label>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-input ">
              <input
                type="date"
                defaultValue={
                  registration.dob ? registration.dob.toString() : "2000-01-01"
                }
                required
                onChange={(event) => onChangeHandler("dob", event.target.value)}
              />
              <label className="lh-1 text-14 text-light-1">Date of Birth</label>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>

      <div className="col-12">
        <div className="row y-gap-20">
          <div className="col-12 col-md-6">
            <div className="form-input ">
              <input
                type="text"
                defaultValue={
                  registration.identityNumber ? registration.identityNumber : ""
                }
                required
                onChange={(event) =>
                  onChangeHandler("identityNumber", event.target.value)
                }
              />
              <label className="lh-1 text-14 text-light-1">
                Identity Number
              </label>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-input ">
              <input
                type="text"
                defaultValue={
                  registration.phoneNumber ? registration.phoneNumber : ""
                }
                required
                onChange={(event) =>
                  onChangeHandler("phoneNumber", event.target.value)
                }
              />
              <label className="lh-1 text-14 text-light-1">Phone Number</label>
            </div>
          </div>
          {/* End .col */}
        </div>
      </div>

      <div className="col-12">
        <div className="form-input ">
          <input
            type="text"
            defaultValue={registration.address ? registration.address : ""}
            required
            onChange={(event) => onChangeHandler("address", event.target.value)}
          />
          <label className="lh-1 text-14 text-light-1">Address</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="row justify-center y-gap-20">
          <div className="col-12 col-md-6">
            <div className="form-input">
              <Select
                required
                value={gender}
                onValueChange={setGender}
                defaultValue={
                  registration.gender
                    ? registration.gender.toString()
                    : undefined
                }
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

          <div className="col-12 col-md-6">
            <div className="form-input">
              <Select
                required
                value={nationality}
                onValueChange={setNationality}
                defaultValue={
                  registration.nationality
                    ? registration.nationality
                    : undefined
                }
              >
                <SelectTrigger className="select">
                  <SelectValue placeholder="Nationality" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((item) => (
                    <SelectItem key={item.num_code} value={item.alpha_3_code}>
                      {item.nationality}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      {/* End .col */}

      {/* <div className="col-12">
        <button
          type="submit"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign Up <div className="icon-arrow-top-right ml-15" />
        </button>
      </div> */}
      {/* End .col */}
    </div>
  );
};

export default SignUpForm;
