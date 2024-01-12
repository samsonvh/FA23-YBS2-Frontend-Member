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
