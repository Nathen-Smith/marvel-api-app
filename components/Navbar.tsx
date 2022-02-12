import React, { useState } from "react";
import Link from "next/link";
import { classNames } from "../utils/classNames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
interface ChildrenProps {
  children: JSX.Element;
  searchActive: boolean;
}

const Navbar: React.FC<ChildrenProps> = ({ children, searchActive }) => {
  const [navigation, setNavigation] = useState([
    { name: "Gallery", to: "/", current: !searchActive },
    { name: "Search", to: "/search", current: searchActive },
  ]);
  // there probably is a better way to handle this...
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
                    href={item.to}
                    aria-current={item.current ? "page" : undefined}
                  >
                    <a
                      className={classNames(
                        item.current
                          ? "bg-gray-300 text-black"
                          : "text-gray-400 hover:bg-gray-300 hover:text-black",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
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
      {children}
    </div>
  );
};

export default Navbar;
