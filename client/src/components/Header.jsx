import React from "react";
import { Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";

function Header() {
  const path = useLocation().pathname;

  return (
    <div>
      <Navbar className="border-b-2">
        <Link
          to="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Sravan's
          </span>
          blog
        </Link>
        <form action="">
          <TextInput
            type="text"
            placeholder="search..."
            rightIcon={IoIosSearch}
            className="hidden lg:inline"
            aria-label="Search"
          />
        </form>

        <button className="w-12 h-10 lg:hidden" color="gray" aria-label="Search">
          <IoIosSearch />
        </button>

        <div className="flex items-center space-x-4">
          <button
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
            aria-label="Toggle Dark Mode"
          >
            <MdOutlineDarkMode />
          </button>
          <Link to="/sign-in">
            <button className="px-4 py-2 bg-gradient-to-r from-purple-700 to-blue-500 text-white rounded-full">
              Sign In
            </button>
          </Link>

          <Navbar.Toggle className="lg:hidden" />
        </div>

        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as="div">
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as="div">
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/projects"} as="div">
            <Link to="/projects">Projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
