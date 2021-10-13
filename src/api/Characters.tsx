import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, publicKeyParam } from "./constants";

interface CharactersData {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
}

interface CharactersRes {
  data: {
    count: number;
    limit: number;
    offset: number;
    results: CharactersData[];
    total: number;
  };
}

const GetCharacters = async () => {
  try {
    const res = await axios.get<CharactersRes>(
      baseURL + "/v1/public/characters" + publicKeyParam
    );
    return res.data.data.results;
  } catch (err) {
    return null;
  }
};

export const Characters = () => {
  const [data, setData] = useState<CharactersData[]>();
  useEffect(() => {
    const getData = async () => {
      const res = await GetCharacters();
      res && setData(res);
    };
    getData();
  }, []);

  if (!data) {
    return <div>sorry</div>;
  }
  return (
    <div>
      {data.map((char) => {
        return (
          <li key={char.id}>
            <img
              src={char.thumbnail.path + "." + char.thumbnail.extension}
              alt=""
            />
          </li>
        );
      })}
    </div>
  );
};
