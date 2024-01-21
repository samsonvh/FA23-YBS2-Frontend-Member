"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICity } from "@/data/ModelInterfaces";
import { IToursPageRequest } from "@/data/RequestInterfaces";
import { getCities } from "@/networks/apis/CitiesAPIs";
import { Dispatch, SetStateAction, useState } from "react";

const SearchBar = ({
  pageRequest,
  setPageRequest,
}: {
  pageRequest: IToursPageRequest;
  setPageRequest: Dispatch<SetStateAction<IToursPageRequest>>;
}) => {
  const cities = getCities();
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const locationSearchContent = [
    {
      id: 1,
      name: "London",
      address: "Greater London, United Kingdom",
    },
    {
      id: 2,
      name: "New York",
      address: "New York State, United States",
    },
    {
      id: 3,
      name: "Paris",
      address: "France",
    },
    {
      id: 4,
      name: "Madrid",
      address: "Spain",
    },
    {
      id: 5,
      name: "Santorini",
      address: "Greece",
    },
  ];

  const handleOptionClick = (item : ICity) => {
    setSearchValue(item.name);
    setSelectedItem(item);
    setPageRequest({...pageRequest, location: item.name})
  };

  return (
    <>
      <div className="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
        <div
          data-bs-toggle="dropdown"
          // data-bs-auto-close="true"
          data-bs-offset="0,22"
        >
          <h4 className="text-15 fw-500 ls-2 lh-16">Location</h4>
          <div className="text-15 text-light-1 ls-2 lh-16">
            <input
              autoComplete="off"
              type="search"
              placeholder="Where are you going?"
              className="js-search js-dd-focus"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
        {/* End location Field */}

        <div className="shadow-2 dropdown-menu min-width-200 max-width-300 tw-overflow-y-scroll tw-max-h-96">
          <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
            <ul className="y-gap-5 js-results">
              {cities.map((item) => (
                <li
                  className={`-link d-block col-12 tw-min-w-[200px] tw-max-w-[300px] text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                    selectedItem && selectedItem.code === item.code
                      ? "active"
                      : ""
                  }`}
                  key={item.code}
                  role="button"
                  onClick={() => handleOptionClick(item)}
                >
                  <div className="d-flex">
                    <div className="icon-location-2 text-light-1 text-20 pt-4" />
                    <div className="ml-10">
                      <div className="text-15 lh-12 fw-500 js-search-option-target tw-w-max">
                        {item.name}
                      </div>
                      <div className="text-14 lh-12 text-light-1 mt-5 tw-w-max">
                        {item.name_with_type}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
