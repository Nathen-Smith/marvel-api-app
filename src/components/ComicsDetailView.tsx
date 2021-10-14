import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ComicsData } from "../api/apiUtils";

interface data {
  data: ComicsData[];
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

export const ComicsDetailView: React.FC<data> = ({ data, viewType }) => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [currViewingIdx, setCurrViewingIdx] = useState(0);

  const openDetailView = (idx: number, charId: number) => {
    console.log(charId);
    setCurrViewingIdx(idx);
    setOpen(true);
  };

  const charList = (idx: number) => {
    if (data[idx]?.characters?.returned) {
      let charList = new Array<string>();
      data[idx].characters.items.map(({ name }) => {
        if (name) {
          return charList.push(name);
        } else {
          return null;
        }
      });
      return charList.toString();
    } else {
      return null;
    }
  };

  return (
    <div>
      <div className={"container grid grid-cols-3 gap-2 mx-auto"}>
        {data.map((comic, idx) => {
          return (
            <div
              key={idx}
              // className={viewType === "list" ? "pb-10" : ""}
            >
              <img
                src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                alt=""
                key={comic.id}
                onClick={() => openDetailView(idx, comic.id)}
              />
            </div>
          );
        })}
      </div>

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
                        {data[currViewingIdx].title
                          ? data[currViewingIdx].title
                          : ""}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {data[currViewingIdx].description
                            ? data[currViewingIdx].description
                            : ""}
                        </p>
                      </div>

                      <Dialog.Title
                        as="h3"
                        className="text-md leading-6 font-medium text-gray-900"
                      >
                        Characters
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {charList(currViewingIdx)}
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
