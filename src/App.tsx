import React from "react";
import { Characters } from "./api/Characters";

// const baseURL = "https://gateway.marvel.com";
// const publicKeyParam = "?apikey=f19ff79f771f6dbda0e1367ba52ffd54";

// interface CharactersData {
//   id: number;
//   name: string;
//   description: string;
//   thumbnail: {
//     extension: string;
//     path: string;
//   };
// }

// interface CharactersRes {
//   data: {
//     count: number;
//     limit: number;
//     offset: number;
//     results: CharactersData[];
//     total: number;
//   };
// }

// export const TestAPI = async () => {
//   try {
//     const res = await axios.get<CharactersRes>(
//       baseURL + "/v1/public/characters" + publicKeyParam
//     );
//     console.log(res.data);
//     // console.log(JSON.parse(JSON.stringify(res.data)));
//     // return <>{res.data}</>;
//     const charactersObj = res.data.data.results[0];
//     console.log(charactersObj);
//   } catch (err) {
//     console.log(err);
//   }
// };

export function App() {
  return (
    <div>
      <Characters />
    </div>
  );
}
