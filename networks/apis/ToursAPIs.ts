import { TGetTourById } from "@/data/ResponseTypes";

export const getTourById : TGetTourById = async (id:string) => {
    const url = process.env.API_SERVER + process.env.API_VERSION + "/tours/" + id;
    const res = await fetch(url);
    if (res){
        return await res.json();
    }
    return null;
}