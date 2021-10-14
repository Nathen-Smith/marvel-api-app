import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { ListView } from "./components/ListView";
import { Gallery } from "./components/Gallery";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function App() {
  const [navigation, setNavigation] = useState([
    { name: "Search", to: "/search", current: false },
    { name: "Gallery", to: "/gallery", current: false },
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

  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
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
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
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
        <Route path="/search">
          <ListView />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/">
          <ListView />
        </Route>
      </Switch>
    </div>
  );
}
