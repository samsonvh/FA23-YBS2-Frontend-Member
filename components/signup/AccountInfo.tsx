import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { IRegistrationInputRequest } from "@/data/RequestInterfaces";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GetMembershipPackages } from "@/networks/apis/MembershipPackagesAPIs";
import { IMembershipPackageListing } from "@/data/ResponseInterfaces";

const AccountInfo = ({
  registration,
  setRegistration,
}: {
  registration: IRegistrationInputRequest;
  setRegistration: Dispatch<SetStateAction<IRegistrationInputRequest>>;
}) => {
  const [membershipPackages, setMembershipPackages] = useState<
    IMembershipPackageListing[]
  >([]);
  const [imgURL, setImgURL] = useState<string>();
  const [membershipPackageId, setMembershipPackageId] = useState<string>();

  const getMembershipPackages = async () => {
    await GetMembershipPackages().then((res) =>
      setMembershipPackages(res.data)
    );
  };

  const onChangeHandler = (key, value) => {
    if (value == "") {
      delete registration[key];
      setRegistration(registration);
      if (key == "avatar") setImgURL(null);
    } else {
      setRegistration({ ...registration, [key]: value });
      if (key == "avatar") setImgURL(URL.createObjectURL(value));
    }
  };

  useEffect(() => {
    if (!membershipPackages.length) {
      getMembershipPackages();
    }
    if (!imgURL) {
      delete registration.avatar;
      setRegistration(registration);
    }
    if (
      membershipPackageId &&
      registration.membershipPackageId != membershipPackageId
    ) {
      onChangeHandler("membershipPackageId", membershipPackageId);
    }
  }, [membershipPackageId]);

  return (
    <div className="row y-gap-20 tw-justify-center">
      <div className="col-12">
        <div className="row y-gap-20">
          <div className="col-12 col-md-6 y-gap-20">
            <div className="col-12">
              <div className="form-input">
                <Select
                  required
                  value={membershipPackageId}
                  onValueChange={setMembershipPackageId}
                  defaultValue={
                    registration.membershipPackageId
                      ? registration.membershipPackageId
                      : undefined
                  }
                >
                  <SelectTrigger className="select">
                    <SelectValue placeholder="Membership Package" />
                  </SelectTrigger>
                  <SelectContent className="px-20">
                    {membershipPackages.map((item) => (
                      <SelectItem key={item.id} value={item.id}>
                        <div className="row">
                          <div className="col-12 tw-text-left tw-font-bold lg:tw-text-lg">
                            {item.name}
                          </div>
                          <div className="col-12 tw-text-left">
                            <div className="row">
                              <div className="col-1 tw-self-center">
                                {item.discountPercent}%
                              </div>
                              <div className="col tw-text-end lg:tw-text-lg md:tw-pr-6 xl:tw-pr-10">
                                {item.price.toLocaleString("en-US")}{" "}
                                <span className="tw-font-semibold">VND</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* End .col */}
            <div className="col-12">
              <div className="form-input ">
                <input
                  type="text"
                  required
                  defaultValue={
                    registration.username ? registration.username : ""
                  }
                  onChange={(event) =>
                    onChangeHandler("username", event.target.value)
                  }
                />
                <label className="lh-1 text-14 text-light-1">Username</label>
              </div>
            </div>
            {/* End .col */}
            <div className="col-12">
              <div className="form-input ">
                <input
                  type="text"
                  required
                  defaultValue={registration.email ? registration.email : ""}
                  onChange={(event) =>
                    onChangeHandler("email", event.target.value)
                  }
                />
                <label className="lh-1 text-14 text-light-1">Email</label>
              </div>
            </div>
            {/* End .col */}
            <div className="col-12">
              <div className="form-input ">
                <input
                  type="password"
                  required
                  defaultValue={
                    registration.password ? registration.password : ""
                  }
                  onChange={(event) =>
                    onChangeHandler("password", event.target.value)
                  }
                />
                <label className="lh-1 text-14 text-light-1">Password</label>
              </div>
            </div>
            {/* End .col */}
            <div className="col-12">
              <div className="form-input ">
                <input type="password" required />
                <label className="lh-1 text-14 text-light-1">
                  Confirm Password
                </label>
              </div>
            </div>
            {/* End .col */}
          </div>

          <div className="col-12 col-md-6 y-gap-20">
            <div className="col-12">
              <div className="form-input">
                <input
                  type="file"
                  required
                  onChange={(event) =>
                    onChangeHandler(
                      "avatar",
                      event.target.files[0] ? event.target.files[0] : ""
                    )
                  }
                  className={`tw-cursor-pointer before:tw-content-['UPLOAD_AVATAR:'] before:tw-font-semibold before:tw-pr-2 before:tw-outline-none file:tw-hidden ${
                    imgURL ? "tw-bg-emerald-500 text-white" : ""
                  }`}
                  accept="image/png, image/jpg, image/jpeg"
                />
              </div>
            </div>
            {/* End .col */}
            <div className="col-12 md:tw-h-[360px]">
              <img
                src={imgURL ? imgURL : "https://placehold.co/400"}
                alt="Your Avatar"
                className="md:tw-h-full md:tw-w-fit tw-m-auto tw-rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row y-gap-20 pt-20">
        <div className="col-12">
          <div className="text-center px-30">
            By creating an account, you agree to our Terms of Service and
            Privacy Statement.
          </div>
        </div>
      </div>
      {/* End .row */}

      <div className="col-12">
        <button
          type="submit"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign Up <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </div>
  );
};

export default AccountInfo;
