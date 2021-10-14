import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CharactersData } from "../api/apiUtils";

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
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [currViewingIdx, setCurrViewingIdx] = useState(0);

  const openDetailView = (idx: number, charId: number) => {
    console.log(charId);
    setCurrViewingIdx(idx);
    setOpen(true);
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
                onClick={() => openDetailView(idx, char.id)}
              >
                <td>
                  <img
                    src={char.thumbnail.path + "." + char.thumbnail.extension}
                    alt=""
                    key={char.id}
                    className="h-48"
                  />
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

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        {data[currViewingIdx] && data[currViewingIdx].name
                          ? data[currViewingIdx].name
                          : ""}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {data[currViewingIdx] &&
                          data[currViewingIdx].description
                            ? data[currViewingIdx].description
                            : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() =>
                      currViewingIdx < data.length - 1 &&
                      setCurrViewingIdx(currViewingIdx + 1)
                    }
                    ref={cancelButtonRef}
                  >
                    Next
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() =>
                      currViewingIdx > 0 &&
                      setCurrViewingIdx(currViewingIdx - 1)
                    }
                  >
                    Previous
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};
