import React, { useState, useCallback, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

import { List } from "./components/List";
import { Gallery } from "./components/Gallery";
import { ComicsData } from "./api/apiUtils";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export function App() {
  const [navigation, setNavigation] = useState([
    { name: "Search", to: "/marvel-api-app/search", current: false },
    { name: "Gallery", to: "/marvel-api-app/gallery", current: false },
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

  const navigate = useNavigate();

  const alertUser = useCallback(
    (e: any) => {
      e.preventDefault();
      navigate("/marvel-api-app/search");
      window.location.href = "/marvel-api-app/search";
    },
    [navigate]
  );
  useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
    };
  }, [alertUser]);

  return (
    <div>
      <nav className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="">
              <div className="flex space-x-4">
                {navigation.map((item, idx) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => updateFieldChanged(idx)}
                    className={classNames(
                      item.current || window.location.pathname === item.to
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
            <a href="https://github.com/Nathen-Smith/marvel-api-app">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </nav>

      <Routes>
        <Route
          path="*"
          element={<List updateComicsData={updateComicsData} />}
        />
        <Route
          path="/marvel-api-app/search"
          element={<List updateComicsData={updateComicsData} />}
        />
        <Route
          path="/marvel-api-app/gallery"
          element={<Gallery updateComicsData={updateComicsData} />}
        />
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
              <Route
                path={`/marvel-api-app/detail/${comic.id}`}
                key={comic.id}
                element={
                  <div>
                    <h3 className="text-lg text-center leading-6 font-medium text-gray-900">
                      {comic.title}
                    </h3>

                    <div className="flex content-center mt-4 mx-auto max-w-7xl">
                      <Link
                        to={`/marvel-api-app/detail/${
                          data[idx > 0 ? idx - 1 : idx]?.id
                        }`}
                        className="min-w-0 flex items-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ml-auto"
                      >
                        <ChevronLeftIcon className="block h-4 w-4" />
                      </Link>
                      <img
                        src={
                          comic.thumbnail.path + "." + comic.thumbnail.extension
                        }
                        alt=""
                        key={comic.id}
                        className="min-w-0 h-96 hover:h-52"
                      />
                      <Link
                        to={`/marvel-api-app/detail/${
                          data[idx < data.length - 1 ? idx + 1 : idx]?.id
                        }`}
                        className="min-w-0 flex items-center bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r mr-auto"
                      >
                        <ChevronRightIcon className="block h-4 w-4" />
                      </Link>
                    </div>

                    <div className="text-left text-md max-w-7xl mx-auto">
                      {comic.description}
                    </div>
                    <div className="text-lg font-medium text-gray-900 my-2 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                      Character List: {charList()}
                    </div>
                  </div>
                }
              />
            );
          })}
      </Routes>
    </div>
  );
}
