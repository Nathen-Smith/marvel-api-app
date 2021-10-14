import React from "react";
// import { useRef, useState } from "react";
// import { Dialog, Transition } from "@headlessui/react";
import { CharactersData } from "../api/apiUtils";
import { Link } from "react-router-dom";

interface data {
  data: CharactersData[];
  viewType: string;
}

/* accept data from list or gallery view
 * when click on an item from either views
 * open this modal at that index
 * how to detect click and send that index here?
 * what about in this file:
 * each item can be clicked, which will open the modal and also pass in the idx
 * use that idx to display that info
 *
 *
 *
 */

export const CharsDetailView: React.FC<data> = ({ data, viewType }) => {
  // const [open, setOpen] = useState(false);
  // const cancelButtonRef = useRef(null);
  // const [currViewingIdx, setCurrViewingIdx] = useState(0);

  const openDetailView = (idx: number, charId: number) => {
    console.log(charId);
    // setCurrViewingIdx(idx);
    // setOpen(true);
  };

  return (
    <div>
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
              Modified
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((char, idx) => {
            return (
              <tr
                key={idx}
                className="hover:bg-gray-200"
                // onClick={() => openDetailView(idx, char.id)}
              >
                <td>
                  <Link
                    to={`/cs498rk_mp2/detail/char/${char.id}`}
                    onClick={() => openDetailView(idx, char.id)}
                  >
                    <img
                      src={char.thumbnail.path + "." + char.thumbnail.extension}
                      alt=""
                      key={char.id}
                      className="h-48"
                    />
                  </Link>
                </td>
                <td>
                  <div className="text-sm font-medium text-gray-900">
                    {char.name!!}
                  </div>
                </td>
                <td>
                  <div className="text-sm font-medium text-gray-900">
                    {char.modified!!}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <Switch>
        {data.map((char, idx) => {
          return (
            <Route key={idx} path={`/cs498rk_mp2/detail/char/${char.id}`}>
              <DetailView open={true} data={data} idx={currViewingIdx} />
            </Route>
          );
        })}
      </Switch> */}
    </div>
  );
};
