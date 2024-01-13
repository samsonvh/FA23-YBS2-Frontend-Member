import { TGetTourById } from "@/data/ResponseTypes";
import { Agent, setGlobalDispatcher } from "undici";

// setGlobalDispatcher(new Agent({ connect: { timeout: 300_000 } }));

export const getTourById: TGetTourById = async (id: string) => {
  const url = process.env.API_SERVER + process.env.API_VERSION + "/tours/" + id;
  const res = await fetch(url);
  console.log(res.status )
  console.log(res)
  if (res) {
    return await res.json();
  }
  return null;
};
