import React, { useEffect, useState } from "react";
import { getCharsByComicUtil, ComicsData } from "../api/apiUtils";
import { Link } from "react-router-dom";

interface updateComicsData {
  updateComicsData: (arg: ComicsData[]) => void;
}

export const Gallery: React.FC<updateComicsData> = ({ updateComicsData }) => {
  const [data, setData] = useState<ComicsData[]>();
  const [options, setOptions] = useState([
    { name: "Thor", id: "1009664", active: false },
    { name: "Captain America", id: "1009220", active: false },
    { name: "Iron Man", id: "1009368", active: false },
    { name: "Spider-Man (Peter Parker)", id: "1009610", active: false },
    { name: "Hulk", id: "1009351", active: false },
  ]);
  const [activeSelections, setActiveSelections] = useState<string[]>([]);

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
      }
    };
    activeSelections && getData();
  }, [activeSelections, updateComicsData]);

  return (
    <div>
      <div className="mt-2">
        <div className="block text-gray-700 text-sm font-bold mb-2">
          Find Comics by Character
        </div>
        {options.map((option, idx) => {
          return (
            <div key={idx}>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox"
                  onChange={() => {
                    updateFieldChanged(idx);
                  }}
                />
                <span className="ml-2">{option.name}</span>
              </label>
            </div>
          );
        })}
      </div>

      {data && (
        <div className={"container grid grid-cols-3 gap-2 mx-auto"}>
          {data.map((comic, idx) => {
            return (
              <Link key={comic.id} to={`/cs498rk_mp2/detail/${comic.id}`}>
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
