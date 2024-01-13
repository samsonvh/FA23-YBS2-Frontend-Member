import { TGetMembershipPackages } from "@/data/ResponseTypes";

export const GetMembershipPackages: TGetMembershipPackages = async () => {
  const url =
    process.env.API_SERVER + process.env.API_VERSION + "/membership-packages";
  const data = await fetch(url).then((res) => res.json());
  return data;
};
