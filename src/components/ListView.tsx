import React, { useEffect, useState } from "react";
import { DetailView } from "./DetailView";
import { getCharsUtil, CharactersData } from "../api/getCharsUtil";

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
      {data && <DetailView data={data} viewType="list" />}
    </div>
  );
};
