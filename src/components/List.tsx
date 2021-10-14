import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { searchComicsUtil, ComicsData } from "../api/apiUtils";

interface updateComicsData {
  updateComicsData: (arg: ComicsData[]) => void;
}

export const List: React.FC<updateComicsData> = ({ updateComicsData }) => {
  const [input, setInput] = useState("");
  const [selection, setSort] = useState("title");
  const [asc, setAsc] = useState(true);
  const [data, setData] = useState<ComicsData[]>();
  let location = useHistory();

  useEffect(() => {
    const getData = async () => {
      const res = await searchComicsUtil(input, selection, asc);
      if (res) {
        setData(res);
        updateComicsData(res);
      }
    };
    input && getData();
  }, [input, selection, asc, updateComicsData]);

  const openDetailView = (id: number) => {
    location.push(`detail/${id}`);
  };

  return (
    <div>
      <form className="max-w-7xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Comic Search
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-l leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(e) =>
                  setSort(
                    e.target.value === "Alphabetical" ? "title" : "onsaleDate"
                  )
                }
              >
                <option>Alphabetical</option>
                <option>On Sale Date</option>
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
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-r leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
      {data && input && (
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                On Sale Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((comic, idx) => {
              return (
                <tr
                  key={idx}
                  className="cursor-pointer hover:bg-gray-200"
                  onClick={() => openDetailView(comic.id)}
                >
                  <td>
                    <img
                      src={
                        comic.thumbnail.path + "." + comic.thumbnail.extension
                      }
                      alt=""
                      key={comic.id}
                      className="h-48"
                    />
                  </td>
                  <td>
                    <div className="text-sm font-medium text-gray-900">
                      {comic.title!!}
                    </div>
                  </td>
                  <td>
                    <div className="text-sm font-medium text-gray-900">
                      {comic.dates[0].date!!}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
