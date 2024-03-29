export interface IPageResponse<T> {
  data: T[];
  totalItem: number;
  pageIndex: number;
  pageCount: number;
  pageSize: number;
}

export interface IMembershipPackageListing {
  id: string;
  name: string;
  price: number;
  point: number;
  duration: number;
  durationUnit: string;
  discountPercent: number;
}

export interface IMember {
  id: string;
  fullName: string;
  avatarURL: string;
  dob: Date;
  address: string;
  phoneNumber: string;
  identityNumber: string;
  gender: string;
  nationality: string;
  memberSinceDate: Date;
  createdDate: Date;
  status: string;
}

export interface IRegistrationResponse {
  membershipRegistrationId: string;
  // fullName: string;
  // avatarURL: string;
  // dob: Date;
  // address: string;
  // phoneNumber: string;
  // identityNumber: string;
  // gender: string;
  // nationality: string;
  // memberSinceDate: Date;
  // createdDate: Date;
  // status: string;
  paymentURL: string;
}

export interface ITour {
  id: string;
  name: string;
  price: number;
  imageURLs: string[];
  priority: number;
  location: string;
  startTime: Date;
  endTime: Date;
  duration: number;
  durationUnit: string;
  maximumGuest: number;
  type: string;
  description: string;
  status: string;
}

export interface ITourListing {
  id: string;
  name: string;
  imageURL: string;
  price: number;
  discountPrice?: number;
  priority: number;
  location: string;
  startTime: Date;
  endTime: Date;
  status: string;
}

export interface IBooking {
  id: string;
  fullName: string,
  email: string,
  phoneNumber: string,
  specialRequest: string,
  tourId: string;
  bookingDate: string;
  totalAmount: number;
  point: number;
  tourName: string;
  location: string;
  startTime: Date;
  endTime: Date;
  duration: number;
  durationUnit: number;
  tourType: number;
  totalPassengers: number;
  note: string;
  isIncludedBooker: boolean;
  type: string;
  status: string;
  paymentMethod: string;
  paymentStatus: string;
  createdDate: Date;
  deviceToken: string;
}
