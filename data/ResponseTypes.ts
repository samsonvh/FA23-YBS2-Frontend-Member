import { IRegistrationInputRequest } from "./RequestInterfaces";
import {
  IMember,
  IMembershipPackageListing,
  IPageResponse,
  IRegistrationResponse,
  ITour,
} from "./ResponseInterfaces";

export type TGetMembershipPackages = () => Promise<
  IPageResponse<IMembershipPackageListing>
>;

export type TRegisterMember = (
  registration: IRegistrationInputRequest
) => Promise<IRegistrationResponse>;

export type TGetTourById = (id: string) => Promise<ITour>;
