import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { ListView } from "./components/ListView";
import { Gallery } from "./components/Gallery";
import { ComicsData } from "./api/apiUtils";
import { useCallback } from "react";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function App() {
  const [navigation, setNavigation] = useState([
    { name: "Search", to: "/cs498rk_mp2/search", current: false },
    { name: "Gallery", to: "/cs498rk_mp2/gallery", current: false },
  ]);

  const updateFieldChanged = (index: number) => {
    let newArr = [...navigation]; // copying the old datas array
    let len = newArr.length;
    while (len--) {
      newArr[len].current = false;
    }
    newArr[index].current = true;
    setNavigation(newArr);
  };

  const [data, setData] = useState<ComicsData[]>();

  // using callback here to memoize and store the results of data
  const updateComicsData = useCallback((data: ComicsData[]): void => {
    setData(data);
  }, []);

  return (
    <div>
      <Disclosure as="nav" className="bg-gray-100">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-400 focus:outline-none">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"> */}
                {/* hi */}
                <div className="hidden sm:block sm">
                  <div className="flex space-x-4">
                    {navigation.map((item, idx) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        onClick={() => updateFieldChanged(idx)}
                        // highlight
                        // onClick={()=>}
                        // href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-300 text-black"
                            : "text-gray-400 hover:bg-gray-300 hover:text-black",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item, idx) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    // highlight
                    onClick={() => updateFieldChanged(idx)}
                    // href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-300 text-black"
                        : "text-gray-400 hover:bg-gray-300 hover:text-black",
                      "px-3 py-2 rounded-md text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      <Switch>
        <Route path="/cs498rk_mp2/search">
          <ListView />
        </Route>
        <Route path="/cs498rk_mp2/gallery">
          <Gallery updateComicsData={updateComicsData} />
        </Route>
        {data &&
          data.map((comic, idx) => {
            const charList = () => {
              if (comic.characters?.returned) {
                let charList = new Array<string>();
                comic.characters.items.map(({ name }) => {
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
              <Route path={`/cs498rk_mp2/detail/${comic.id}`} key={comic.id}>
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {comic.title}
                  </h3>
                  <img
                    src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                    alt=""
                    key={comic.id}
                  />
                  {comic.description}
                  {charList()}
                  <Link
                    to={`/cs498rk_mp2/detail/${
                      data[idx > 0 ? idx - 1 : idx]?.id
                    }`}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Previous
                  </Link>
                  <Link
                    to={`/cs498rk_mp2/detail/${
                      data[idx < data.length - 1 ? idx + 1 : idx]?.id
                    }`}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Next
                  </Link>
                </div>
              </Route>
            );
          })}

        <Route path="/cs498rk_mp2/">
          <ListView />
        </Route>
      </Switch>
    </div>
  );
}
