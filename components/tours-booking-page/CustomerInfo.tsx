import Link from "next/link";
import BookingDetails from "./sidebar/BookingDetails";
import { ITour } from "@/data/ResponseInterfaces";
import { IBookingTemp } from "@/data/ModelInterfaces";
import { IBookingRequest } from "@/data/RequestInterfaces";
import { Dispatch, SetStateAction } from "react";

const CustomerInfo = ({
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
  const onChangeHandler = (key, value) => {
    if (key == "email") {
      bookingRequest.email = value;
    } else {
      let passenger = bookingRequest.passengers[0];
      if (value == "") {
        delete passenger[key];
        bookingRequest.passengers[0] = passenger;
        setBookingRequest(bookingRequest);
      } else {
        passenger[key] = value;
        bookingRequest.passengers[0] = passenger;
        setBookingRequest(bookingRequest);
      }
    }
  };

  if (tour)
    return (
      <>
        <div className="col-xl-7 col-lg-8 mt-30">
          <div className="py-15 px-20 rounded-4 text-15 bg-blue-1-05">
            Sign in to book with your saved details or{" "}
            <Link href="/signup" className="text-blue-1 fw-500">
              register
            </Link>{" "}
            to manage your bookings on the go!
          </div>
          {/* End register notify */}

          {/* <div className="row y-gap-20 items-center justify-between mt-30">
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
          </div> */}
          {/* End col-auto */}
          {/* </div> */}
          {/* End terms and conditons */}

          <h2 className="text-22 fw-500 mt-20">Let us know who you are</h2>

          <div className="row x-gap-20 y-gap-20 pt-20">
            <div className="col-12">
              <div className="form-input ">
                <input
                  type="text"
                  defaultValue={bookingRequest.passengers[0].fullName}
                  onChange={(event) =>
                    onChangeHandler("fullName", event.target.value)
                  }
                  required
                />
                <label className="lh-1 text-16 text-light-1">Full Name</label>
              </div>
            </div>
            {/* End col-12 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input
                  type="text"
                  defaultValue={bookingRequest.email}
                  onChange={(event) =>
                    onChangeHandler("email", event.target.value)
                  }
                  required
                />
                <label className="lh-1 text-16 text-light-1">Email</label>
              </div>
            </div>
            {/* End col-12 */}

            <div className="col-md-6">
              <div className="form-input ">
                <input
                  type="text"
                  defaultValue={bookingRequest.passengers[0].phoneNumber}
                  onChange={(event) =>
                    onChangeHandler("phoneNumber", event.target.value)
                  }
                  required
                />
                <label className="lh-1 text-16 text-light-1">
                  Phone Number
                </label>
              </div>
            </div>
            {/* End col-12 */}

            {/* <div className="col-12">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  Address line 1
                </label>
              </div>
            </div> */}
            {/* End col-12 */}

            {/* <div className="col-md-6">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  State/Province/Region
                </label>
              </div>
            </div> */}
            {/* End col-12 */}

            {/* <div className="col-md-6">
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">
                  ZIP code/Postal code
                </label>
              </div>
            </div> */}
            {/* End col-12 */}

            {/* <div className="col-12">
              <div className="form-input ">
                <textarea required rows={6} defaultValue={""} />
                <label className="lh-1 text-16 text-light-1">
                  Special Requests
                </label>
              </div>
            </div> */}
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
            <BookingDetails tour={tour} bookingTemp={bookingTemp} />
          </div>
        </div>
        {/*  */}
      </>
    );
};

export default CustomerInfo;
