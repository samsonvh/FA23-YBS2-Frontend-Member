import { IBookingRequest } from "@/data/RequestInterfaces";

export const createBooking = async (bookingRequest: IBookingRequest) => {
  console.log(JSON.stringify(bookingRequest));
  bookingRequest.address = "sadad";
  const url = process.env.API_SERVER + process.env.API_VERSION + "/bookings";
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookingRequest),
  });
  console.log(res);
  if (res) {
    return await res.json();
  }
  return null;
};

export const getBookingById = async (id: string) => {
  const url =
    process.env.API_SERVER + process.env.API_VERSION + "/bookings/" + id;
  const res = await fetch(url, {
    cache: "no-cache"
  });
  if (res) {
    return await res.json();
  }
  return null;  
};
