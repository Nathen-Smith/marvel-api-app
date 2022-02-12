import type { NextPage } from "next";
import Image from "next/image";

import React, { Fragment, useEffect, useState, useCallback } from "react";
import { searchComicsUtil, ComicsData } from "../utils/apiUtils";

import Navbar from "../components/Navbar";
import type { ComicImgProps } from "../components/GalleryImgModal";
import { Dialog, Transition } from "@headlessui/react";

const Search: NextPage = () => {
  const [input, setInput] = useState("");
  const [selection, setSort] = useState("title");
  const [asc, setAsc] = useState(true);
  const [data, setData] = useState<ComicsData[]>();
  const updateComicsData = useCallback((data: ComicsData[]): void => {
    setData(data);
  }, []);

  useEffect(() => {
    const getData = async () => {
      const res = await searchComicsUtil(input, selection, asc);
      if (res) {
        setData(res);
        updateComicsData(res);
      }
    };
    input && getData();
  }, [input, selection, asc, updateComicsData]);

  const updateModalVisibility = useCallback(
    (index: number, open: boolean) => {
      if (data) {
        let newArr = [...data]; // copying the old datas array
        newArr.forEach((_, idx) => {
          newArr[idx].modalActive = false;
        });
        newArr[index].modalActive = open;
        setData(newArr);
      }
    },
    [data]
  );

  // const openDetailView = (id: number) => {
  //   navigate(`/marvel-api-app/detail/${id}`);
  // };
  return (
    <Navbar searchActive={true}>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <form className="max-w-7xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Comic Search
            </label>
            <input
              autoComplete="off"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-l leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  onChange={(e) =>
                    setSort(
                      e.target.value === "Alphabetical" ? "title" : "onsaleDate"
                    )
                  }
                >
                  <option>Alphabetical</option>
                  <option>On Sale Date</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-r leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  onChange={(e) =>
                    setAsc(e.target.value === "Ascending" ? true : false)
                  }
                >
                  <option>Ascending</option>
                  <option>Descending</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </form>
        {data && input && (
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
                  On Sale Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((comic, idx) => {
                const src =
                  comic.thumbnail.path.slice(0, 4) +
                  "s" +
                  comic.thumbnail.path.slice(4) +
                  "." +
                  comic.thumbnail.extension;

                const modalCharList = () => {
                  if (comic.characters?.returned) {
                    let charList = new Array<string>();
                    comic.characters.items.map(({ name }) => {
                      if (name) {
                        return charList.push(" " + name);
                      } else {
                        return null;
                      }
                    });
                    return charList.toString();
                  } else {
                    return null;
                  }
                };

                const textObjs = comic?.textObjects &&
                  comic.textObjects.length > 1 && (
                    <div className="">
                      {" "}
                      {comic.textObjects.map((text) => {
                        <div key={text}>{text}</div>;
                      })}{" "}
                    </div>
                  );

                const ComicImg: React.FC<ComicImgProps> = ({
                  height,
                  width,
                  hover,
                }) => (
                  <Image
                    loader={() => src}
                    src={src}
                    alt=""
                    height={height}
                    width={width}
                    unoptimized={true}
                    onClick={() => {
                      updateModalVisibility(idx, true);
                    }}
                    className={`${
                      hover && "sm:hover:shadow-2xl ease-in-out cursor-pointer"
                    }   mx-auto`}
                  />
                );

                return (
                  <tr
                    key={idx}
                    className="cursor-pointer xl:hover:bg-gray-200"
                    onClick={() => updateModalVisibility(idx, true)}
                  >
                    <td>
                      <div>
                        <Transition.Root
                          show={comic?.modalActive || false}
                          as={Fragment}
                        >
                          <Dialog
                            as="div"
                            className="fixed z-50 inset-0 overflow-y-auto"
                            // initialFocus={cancelButtonRef}
                            onClose={() => updateModalVisibility(idx, false)}
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
                                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity cursor-pointer" />
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
                                <div
                                  onClick={() =>
                                    updateModalVisibility(idx, false)
                                  }
                                  className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                >
                                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="mx-auto justify-center flex flex-col text-center mt-3 sm:mt-0 sm:text-left">
                                      {/* </div> */}

                                      <div className="text-lg text-center font-medium text-gray-900">
                                        {comic.title}
                                      </div>
                                      <ComicImg
                                        height={610}
                                        width={400}
                                        hover={false}
                                      />
                                      {modalCharList() && (
                                        <div className="text-lg font-medium text-gray-900">
                                          Featuring: {modalCharList()}
                                        </div>
                                      )}
                                      {textObjs}
                                      <div className="text-left text-md max-w-7xl mx-auto">
                                        {comic.description}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Transition.Child>
                            </div>
                          </Dialog>
                        </Transition.Root>

                        <ComicImg height={300} width={200} hover={false} />
                      </div>
                    </td>
                    <td>
                      <div className="text-sm font-medium text-gray-900">
                        {comic.title!!}
                      </div>
                    </td>
                    <td>
                      <div className="text-sm font-medium text-gray-900">
                        {comic.dates[0].date!!}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </Navbar>
  );
};

export default Search;
