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

export const getCharsUtil = async (input: string, selection: string) => {
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
