import { ICity } from "@/data/ModelInterfaces";
import { TGetCities } from "@/data/ResponseTypes";
import cities from "@data/cities.json";

export const getCities: TGetCities = () => {
  return cities.sort((city1, city2) => {
    const name1 = city1.name.toUpperCase();
    const name2 = city2.name.toUpperCase();

    if (name1 < name2) {
      return -1;
    }
    if (name1 > name2) {
      return 1;
    }

    return 0;
  });
};
