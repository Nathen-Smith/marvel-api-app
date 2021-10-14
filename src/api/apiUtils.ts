import axios from "axios";
import { baseURL, publicKeyParam } from "./constants";

export interface CharactersData {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  comics: {
    available: number;
    returned: number;
    items: [
      {
        name: string;
        resourceURI: string; //http://gateway.marvel.com/v1/public/comics/62151
      }
    ];
  };
  modified: string;
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

export interface ComicsData {
  id: number;
  title: string;
  description: string;
  pageCount: number;
  thumbnail: {
    extension: string;
    path: string;
  };
  characters: {
    returned: number;
    items: [{ name: string; role: string }];
  };
}

interface ComicsRes {
  data: {
    count: number;
    limit: number;
    offset: number;
    results: ComicsData[];
    total: number;
  };
}

export const getCharsUtil = async (
  input: string,
  selection: string,
  asc: boolean
) => {
  try {
    const res = await axios.get<CharactersRes>(
      `${baseURL}/v1/public/characters?${
        input && `nameStartsWith=${input}&`
      }orderBy=${!asc ? `-` : ``}${selection}&limit=10&${publicKeyParam}`
    );
    console.log(res.data);
    return res.data.data.results;
  } catch (err) {
    return null;
  }
};

export const getCharsByComicUtil = async (selections: string[]) => {
  try {
    let charParam = "characters";
    if (selections.length === 0) {
      return null;
    } else if (selections.length > 1) {
      charParam = "sharedAppearances";
    }
    console.log(selections.toString());

    const res = await axios.get<ComicsRes>(
      `${baseURL}/v1/public/comics?${charParam}=${selections.toString()}&limit=15&${publicKeyParam}`
    );
    console.log(res.data);
    return res.data.data.results;
  } catch (err) {
    return null;
  }
};
