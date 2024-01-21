import { ICity } from "./ModelInterfaces";
import { IPageRequest, IRegistrationInputRequest, IToursPageRequest } from "./RequestInterfaces";
import {
  IMember,
  IMembershipPackageListing,
  IPageResponse,
  IRegistrationResponse,
  ITour,
  ITourListing,
} from "./ResponseInterfaces";

export type TGetMembershipPackages = () => Promise<
  IPageResponse<IMembershipPackageListing>
>;

export type TRegisterMember = (
  registration: IRegistrationInputRequest
) => Promise<IRegistrationResponse>;

export type TGetTourById = (id: string) => Promise<ITour>;

export type TGetTours = (pageRequest:IToursPageRequest) => Promise<IPageResponse<ITourListing>>

export type TGetCities = () => ICity[];