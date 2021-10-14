import React, { useEffect, useState } from "react";
import { CharsDetailView } from "./CharsDetailView";
import { getCharsUtil, CharactersData } from "../api/apiUtils";

export const ListView = () => {
  const [name, setName] = useState("");
  const [selection, setSort] = useState("name");
  const [asc, setAsc] = useState(true);
  const [data, setData] = useState<CharactersData[]>();

  useEffect(() => {
    const getData = async () => {
      const res = await getCharsUtil(name, selection, asc);
      res && setData(res); // will only set if not null
    };
    name && getData();
  }, [name, selection, asc]);

  return (
    <div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Character Search
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(e) =>
                  setSort(
                    e.target.value === "Alphabetical" ? "name" : "modified"
                  )
                }
              >
                <option>Alphabetical</option>
                <option>Date Modified</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(e) =>
                  setAsc(e.target.value === "Ascending" ? true : false)
                }
              >
                <option>Ascending</option>
                <option>Descending</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </form>
      {data && name && <CharsDetailView data={data} viewType="list" />}
    </div>
  );
};
