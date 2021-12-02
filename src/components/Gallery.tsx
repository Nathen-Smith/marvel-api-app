import React, { useEffect, useState } from "react";
import { getCharsByComicUtil, ComicsData } from "../api/apiUtils";
import { Link } from "react-router-dom";
import { classNames } from "../App";
import { CircularProgress } from "@mui/material";

interface updateComicsData {
  updateComicsData: (arg: ComicsData[]) => void;
}

export const Gallery: React.FC<updateComicsData> = ({ updateComicsData }) => {
  const [data, setData] = useState<ComicsData[]>();
  const [options, setOptions] = useState([
    { name: "Thor", id: "1009664", active: false },
    { name: "Captain America", id: "1009220", active: false },
    { name: "Iron Man", id: "1009368", active: false },
    { name: "Avengers", id: "1009165", active: false },
    { name: "Spider-Man (Peter Parker)", id: "1009610", active: false },
    { name: "Scarlet Witch", id: "1009562", active: false },
    { name: "Hulk", id: "1009351", active: false },
    { name: "Doctor Strange", id: "1009282", active: false },
    { name: "Wolverine", id: "1009718", active: false },
    { name: "Black Panther", id: "1009187", active: false },
    { name: "Deadpool", id: "1009268", active: false },
    { name: "Natasha Romanoff", id: "1009547", active: false },
    { name: "Thanos", id: "1009652", active: false },
    { name: "Guardians of the Galaxy", id: "1011299", active: false },
  ]);
  const [activeSelections, setActiveSelections] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const updateFieldChanged = (index: number) => {
    let newArr = [...options]; // copying the old datas array
    newArr[index].active = !newArr[index].active;
    setOptions(newArr);
  };

  useEffect(() => {
    let activeSelections = new Array<string>();
    let len = options.length;
    while (len--) {
      if (options[len].active) {
        activeSelections.push(options[len].id);
      }
    }
    options && setActiveSelections(activeSelections);
  }, [options]);

  useEffect(() => {
    const getData = async () => {
      const res = await getCharsByComicUtil(activeSelections);
      if (res) {
        setData(res);
        updateComicsData(res);
        setLoading(false);
      }
    };
    if (activeSelections && activeSelections.length !== 0) {
      setLoading(true);
      getData();
    }
  }, [activeSelections, updateComicsData]);

  return (
    <div>
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="block text-gray-700 text-sm font-bold mb-2">
          Find Comics by Character
        </div>
        {options.map((option, idx) => {
          return (
            <label className="flex inline-flex items-center p-1" key={idx}>
              <button
                onClick={() => {
                  updateFieldChanged(idx);
                }}
                className={classNames(
                  // "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold "
                  // "hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  option.active
                    ? "bg-blue-500 hover:bg-blue-700 text-white"
                    : "bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500",
                  " font-semibold py-2 px-4 rounded"
                )}
                aria-current={option.active ? "page" : undefined}
                // className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                <span className="mx-2">{option.name}</span>
              </button>
            </label>
          );
        })}
        <div className="block text-gray-400 text-sm mt-2">
          Hint: Selecting multiple characters retrieves shared appearances
        </div>
      </div>
      {loading && (
        <div style={{ color: "#3B82F6", textAlign: "center" }}>
          <CircularProgress className="mx-auto" color="inherit" />
        </div>
      )}

      {data && (
        <div className={"container grid grid-cols-3 gap-2 mx-auto max-w-7xl"}>
          {data.map((comic, idx) => {
            return (
              <Link key={comic.id} to={`/marvel-api-app/detail/${comic.id}`}>
                <img
                  src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  alt=""
                  key={comic.id}
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};