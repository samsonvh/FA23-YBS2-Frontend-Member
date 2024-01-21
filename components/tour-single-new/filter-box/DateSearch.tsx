"use client";

import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const DateSearch = () => {
  // const [dates, setDates] = useState([
  //   new DateObject({ year: 2023, month: 1, day: 22 }),
  //   "December 09 2020",
  //   1597994736000, //unix time in milliseconds (August 21 2020)
  // ]);
  const date1 = window.sessionStorage.getItem("checkIn")
    ? new DateObject(new Date(window.sessionStorage.getItem("checkIn")))
    : new DateObject().setDay(5);
  const date2 = window.sessionStorage.getItem("checkOut")
    ? new DateObject(new Date(window.sessionStorage.getItem("checkOut")))
    : new DateObject().setDay(14).add(1, "month");

  const [dates, setDates] = useState([date1, date2]);

  const changeDate = (dates: DateObject[]) => {
    if (dates.length > 1) {
      window.sessionStorage.setItem(
        "checkIn",
        new Date(dates[0].format("YYYY-MM-DD")).toDateString()
      );
      window.sessionStorage.setItem(
        "checkOut",
        new Date(dates[1].format("YYYY-MM-DD")).toDateString()
      );
    }
    if (dates.length == 1) {
      window.sessionStorage.setItem(
        "checkIn",
        new Date(dates[0].format("YYYY-MM-DD")).toDateString()
      );
      window.sessionStorage.setItem(
        "checkOut",
        new Date(dates[0].format("YYYY-MM-DD")).toDateString()
      );
    }
  };

  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={dates}
        onChange={(e) => changeDate(e as DateObject[])}
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
