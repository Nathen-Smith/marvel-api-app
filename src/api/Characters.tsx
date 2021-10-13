import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, publicKeyParam } from "./constants";

interface SortProps {
  orderBy: string;
}

interface QueryStr {
  nameStartsWith: string;
}

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

const GetCharacters = async (input: string, selection: string) => {
  try {
    const res = await axios.get<CharactersRes>(
      `${baseURL}/v1/public/characters?${
        input && `nameStartsWith=${input}&`
      }orderBy=${selection}&${publicKeyParam}`
    );
    return res.data.data.results;
  } catch (err) {
    return null;
  }
};

export const Characters: React.FC<QueryStr & SortProps> = ({
  nameStartsWith,
  orderBy,
}) => {
  const [data, setData] = useState<CharactersData[]>();
  useEffect(() => {
    const getData = async () => {
      const res = await GetCharacters(nameStartsWith, orderBy);
      res && setData(res);
    };
    getData();
  }, [nameStartsWith, orderBy]);

  if (!data) {
    return <div>Loading</div>;
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

/* get array of data based on some query result
 *
 *
 *
 *
 *
 */
