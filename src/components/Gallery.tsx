import React, { useEffect, useState } from "react";
import { ComicsDetailView } from "./ComicsDetailView";
import { getCharsByComicUtil, ComicsData } from "../api/apiUtils";

export const Gallery = () => {
  const [data, setData] = useState<ComicsData[]>();
  const [options, setOptions] = useState([
    { name: "Thor", id: "1009664", active: false },
    { name: "Captain America", id: "1009220", active: false },
    { name: "Iron Man", id: "1009368", active: false },
    { name: "Spider-Man (Miles Morales)", id: "1016181", active: false },
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
    setActiveSelections(activeSelections);
  }, [options]);

  useEffect(() => {
    const getData = async () => {
      const res = await getCharsByComicUtil(activeSelections);
      res && setData(res); // will only set if not null
    };
    getData();
  }, [activeSelections]);

  return (
    <div>
      <div className="mt-2">
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

      {data && <ComicsDetailView data={data} viewType="gallery" />}
    </div>
  );
};
