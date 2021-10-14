import React, { useEffect, useState } from "react";
import { CharsDetailView } from "./CharsDetailView";
// import { getCharsUtil, CharactersData } from "../api/apiUtils";
import { getCharsUtil, CharactersData } from "../api/apiUtils";

// interface CharactersData {
//   id: number;
//   name: string;
//   description: string;
//   thumbnail: {
//     extension: string;
//     path: string;
//   };
// }

export const ListView = () => {
  const [name, setName] = useState("");
  const [selection, setSort] = useState("name");
  const [data, setData] = useState<CharactersData[]>();

  useEffect(() => {
    const getData = async () => {
      const res = await getCharsUtil(name, selection);
      res && setData(res); // will only set if not null
    };
    getData();
  }, [name, selection]);

  return (
    <div>
      {/* <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            htmlFor="inline-full-name"
          >
            Full Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value="Jane Doe"
          />
        </div>
      </div> */}
      <div>
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700"
        >
          Character Search
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            name="search"
            id="search"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 pr-12 sm:text-sm border-gray-300 rounded-md"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="sort" className="sr-only">
              Sort
            </label>
            <select
              id="sort"
              name="sort"
              onChange={(e) =>
                setSort(e.target.value === "Alphabetical" ? "name" : "modified")
              }
              className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-2 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
            >
              <option>Alphabetical</option>
              <option>Date Modified</option>
            </select>
          </div>
        </div>
      </div>
      {data && <CharsDetailView data={data} viewType="list" />}
    </div>
  );
};
