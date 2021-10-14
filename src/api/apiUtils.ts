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
    items: [name?: string, role?: string];
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

export const getCharsUtil = async (input: string, selection: string) => {
  try {
    const res = await axios.get<CharactersRes>(
      `${baseURL}/v1/public/characters?${
        input && `nameStartsWith=${input}&`
      }orderBy=${selection}&${publicKeyParam}`
    );
    console.log(res.data);
    return res.data.data.results;
  } catch (err) {
    return null;
  }
};

export const getCharsByComicUtil = async (selections: string[]) => {
  try {
    if (selections.length === 0) {
      return null;
    }
    console.log(selections.toString());

    console.log(`${baseURL}/v1/public/comics?characters=
    ${selections.toString()}&
    
    ${publicKeyParam}`);

    const res = await axios.get<ComicsRes>(
      `${baseURL}/v1/public/comics?characters=${selections.toString()}&${publicKeyParam}`
    );
    console.log(res.data);
    return res.data.data.results;
  } catch (err) {
    return null;
  }
  // try {
  //   const res = await axios.get<CharactersRes>(
  //     `${baseURL}/v1/public/characters?${
  //       input && `nameStartsWith=${input}&`
  //     }orderBy=${selection}&${publicKeyParam}`
  //   );
  //   console.log(res.data);
  //   return res.data.data.results;
  // } catch (err) {
  //   return null;
  // }
};
