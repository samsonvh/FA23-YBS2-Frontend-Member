import { IToursPageRequest } from "@/data/RequestInterfaces";
import { TGetTourById, TGetTours } from "@/data/ResponseTypes";
import { Agent, setGlobalDispatcher } from "undici";

// setGlobalDispatcher(new Agent({ connect: { timeout: 300_000 } }));

export const getTourById: TGetTourById = async (id: string) => {
  const url = process.env.API_SERVER + process.env.API_VERSION + "/tours/" + id;
  const res = await fetch(url).catch((err) => console.log(err));
  //   console.log(res.status )
  //   console.log(res)
  if (res) {
    return await res.json();
  }
  return null;
};

export const getTours : TGetTours = async (pageRequest: IToursPageRequest) => {
  let url = process.env.API_SERVER + process.env.API_VERSION + "/tours";
  const res = await fetch(url).catch((err) => console.log(err));
  if (res) {
    return await res.json();
  }
  return null;
};
