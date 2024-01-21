import { IBookingTemp } from "@/data/ModelInterfaces";
import { ITour } from "@/data/ResponseInterfaces";
import Image from "next/image";
import { DateObject } from "react-multi-date-picker";

const BookingDetails = ({
  tour,
  bookingTemp,
}: {
  tour: ITour;
  bookingTemp: IBookingTemp;
}) => {
  const calculateTime = () => {
    switch (tour.type) {
      case "In_Day":
        // bookingTemp.startDate.setTime(tour.startTime.getTime());
        // bookingTemp.endDate.setTime(tour.endTime.getTime());
        break;
      case "Many_Days":
        let date = new DateObject(bookingTemp.startDate);
        date.add(tour.duration, "day");
        bookingTemp.endDate = new Date(date.format("YYYY-MM-DD"));
        break;
    }
  };

  calculateTime();

  return (
    <div className="px-30 py-30 border-light rounded-4">
      <div className="text-20 fw-500 mb-30">Your booking details</div>
      <div className="row x-gap-15 y-gap-20">
        <div className="col-auto">
          <Image
            width={140}
            height={140}
            src={tour.imageURLs[0]}
            alt="image"
            className="size-140 rounded-4 object-cover"
          />
          {/* <Image
            width={140}
            height={140}
            src="/img/backgrounds/1.png"
            alt="image"
            className="size-140 rounded-4 object-cover"
          /> */}
        </div>
        {/* End .col */}
        <div className="col">
          <div className="d-flex x-gap-5 pb-10">
            <i className="icon-star text-yellow-1 text-10" />
            <i className="icon-star text-yellow-1 text-10" />
            <i className="icon-star text-yellow-1 text-10" />
            <i className="icon-star text-yellow-1 text-10" />
            <i className="icon-star text-yellow-1 text-10" />
          </div>
          {/* End ratings */}
          <div className="lh-17 fw-500">{tour.name}</div>
          <div className="text-14 lh-15 mt-5">{tour.location}</div>
          <div className="row x-gap-10 y-gap-10 items-center pt-10">
            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="size-30 flex-center bg-blue-1 rounded-4">
                  <div className="text-12 fw-600 text-white">4.8</div>
                </div>
                <div className="text-14 fw-500 ml-10">Exceptional</div>
              </div>
            </div>
            <div className="col-auto">
              <div className="text-14">3,014 reviews</div>
            </div>
          </div>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}

      <div className="border-top-light mt-30 mb-20" />
      <div className="row y-gap-20 justify-between">
        <div className="col-auto">
          <div className="text-15">Check-in</div>
          <div className="fw-500">{bookingTemp.startDate.toDateString()}</div>
          <div className="text-15 text-light-1">
            {tour.startTime.toString()}
          </div>
        </div>
        <div className="col-auto md:d-none">
          <div className="h-full w-1 bg-border" />
        </div>
        <div className="col-auto text-right md:text-left">
          <div className="text-15">Check-out</div>
          <div className="fw-500">{bookingTemp.endDate.toDateString()}</div>
          <div className="text-15 text-light-1">{tour.endTime.toString()}</div>
        </div>
      </div>
      {/* End row */}

      <div className="border-top-light mt-30 mb-20" />
      <div>
        <div className="text-15">Total length of stay:</div>
        <div className="fw-500">{tour.duration} {tour.durationUnit}</div>
        {/* <a href="#" className="text-15 text-blue-1 underline">
          Travelling on different dates?
        </a> */}
      </div>

      {/* <div className="border-top-light mt-30 mb-20" />
      <div className="row y-gap-20 justify-between items-center">
        <div className="col-auto">
          <div className="text-15">You selected:</div>
          <div className="fw-500">Superior Double Studio</div>
          <a href="#" className="text-15 text-blue-1 underline">
            Change your selection
          </a>
        </div>
        <div className="col-auto">
          <div className="text-15">1 room, 4 adult</div>
        </div>
      </div> */}
      {/* End row */}
    </div>
    // End px-30
  );
};

export default BookingDetails;
