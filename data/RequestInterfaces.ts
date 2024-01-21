export interface IRegistrationInputRequest {
  username: string;
  email: string;
  fullName: string;
  avatar: File | undefined;
  dob: Date;
  address: string;
  phoneNumber: string;
  identityNumber: string;
  gender: number;
  nationality: string;
  password: string;
  membershipPackageId: string;
  deviceToken: string;
}

export interface IPassenger {
  fullName: string;
  dob: Date;
  gender: number;
  identityNumber: string;
  phoneNumber: string;
  specialRequest?: string;
  isLeader: boolean;
}

export interface IBookingRequest {
  tourId: string;
  bookingDate: Date;
  note: string;
  type: number;
  email: string;
  address: string;
  passengers: IPassenger[];
  isIncludedBooker: boolean;
  paymentMethod: number;
}

export interface IPageRequest {
  orderBy?: string;
  isDescending?: boolean;
  pageIndex?: number;
  pageSize?: number;
}

export interface IToursPageRequest extends IPageRequest {
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  location?: string;
  minGuest?: number;
  maxGuest?: number;
  startBookingDate?: Date;
  endBookingDate?: Date;
  type?: number;
}
