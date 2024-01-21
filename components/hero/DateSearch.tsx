"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { IBookingTemp } from "@data/ModelInterfaces";

const DateSearch = ({
  bookingTemp,
  setBookingTemp,
}: {
  bookingTemp: IBookingTemp;
  setBookingTemp: Dispatch<SetStateAction<IBookingTemp>>;
}) => {
  // const [dates, setDates] = useState([
  //   new DateObject({ year: 2023, month: 1, day: 22 }),
  //   "December 09 2020",
  //   1597994736000, //unix time in milliseconds (August 21 2020)
  // ]);
  const [dates, setDates] = useState([
    new DateObject().setDate(new Date()).add(7, "day"),
    new DateObject().setDate(new Date()).add(7, "day"),
  ]);

  useEffect(() => {
    if(!bookingTemp.startDate)
    setBookingTemp({
      ...bookingTemp,
      startDate: new Date(dates[0].format("YYYY-MM-DD")),
      endDate: new Date(dates[1].format("YYYY-MM-DD")),
    });
  });

  const changeDates = (dates: DateObject[]) => {
    setDates(dates);
    if (dates.length > 1) {
      setBookingTemp({
        ...bookingTemp,
        startDate: new Date(dates[0].format("YYYY-MM-DD")),
        endDate: new Date(dates[1].format("YYYY-MM-DD")),
      });
    }
    if (dates.length == 1) {
      setBookingTemp({
        ...bookingTemp,
        startDate: new Date(dates[0].format("YYYY-MM-DD")),
        endDate: new Date(dates[0].format("YYYY-MM-DD")),
      });
    }
  };

  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={dates}
        onChange={(dates: DateObject[]) => changeDates(dates)}
        numberOfMonths={2}
        offsetY={10}
        range
        rangeHover
        format="MMMM DD"
      />
    </div>
  );
};

export default DateSearch;
