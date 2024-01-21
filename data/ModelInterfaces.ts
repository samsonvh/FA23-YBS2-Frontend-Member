export interface ICountry {
  num_code: string;
  alpha_2_code: string;
  alpha_3_code: string;
  en_short_name: string;
  nationality: string;
}

export interface ICity {
  name: string;
  slug: string;
  type: string;
  name_with_type: string;
  code: string;
}

export interface IBookingTemp {
  startDate: Date;
  endDate: Date;
  adultNumber: number;
  childrenNumber: number;
}
