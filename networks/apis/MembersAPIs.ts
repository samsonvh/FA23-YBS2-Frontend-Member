import { IRegistrationInputRequest } from "@/data/RequestInterfaces";
import { IMember, IRegistrationResponse } from "@/data/ResponseInterfaces";
import { TRegisterMember } from "@/data/ResponseTypes";

export const registerMember: TRegisterMember = async (
  registration: IRegistrationInputRequest
) => {
  var formData = new FormData();
  for (var key in registration) {
    formData.append(key, registration[key]);
  }

  const url = process.env.API_SERVER + process.env.API_VERSION + "/members";
  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });
  switch (res.status) {
    case 201:
      return await res.json();
    default:
      return null;
  }
};
