import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Dropdown from "./dropdown";

// Custom debounce function
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleScroll = debounce(() => {
    setIsSticky(window.scrollY > 0);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (clicked) {
      document.body.classList.add("overflow-hidden", "fixed");
    } else {
      document.body.classList.remove("overflow-hidden", "fixed");
    }

    return () => document.body.classList.remove("overflow-hidden", "fixed");
  }, [clicked]);

  const handleMenuClick = useCallback(() => {
    setClicked((prev) => !prev);
  }, []);

  return (
    <nav
      className={`z-50 flex justify-between items-center h-[12vh] sticky top-0 left-0 n:px-5 sm:px-16 ${
        isSticky ? "bg-slate-950" : "bg-transparent"
      } ${
        clicked ? "w-screen h-screen" : "h-[12vh]"
      } transition-all duration-100`}
    >
      <div
        className={`${
          isSticky
            ? "bg-transparent filter invert mix-blend-difference"
            : "bg-slate-900"
        } relative z-10`}
      >
        <img
          src="logo.webp"
          loading="lazy"
          alt="HALAR"
          className={`w-max ${clicked && "hidden"} ${
            !isSticky && "mix-blend-difference filter invert"
          }`}
        />
      </div>
      <div className="lg:hidden" onClick={handleMenuClick}>
        <button className="navbar-burger flex items-center text-green-600 p-3">
          {clicked ? (
            <img src="x.svg" alt="X" className="w-5 fill-current z-10" />
          ) : (
            <svg
              className="block w-5 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          )}
        </button>
      </div>
      <ul
        className={`${
          clicked
            ? "fixed items-center justify-center w-screen h-screen backdrop-blur-sm flex-col flex n:bg-transparent md:bg-white text-black z-90 gap-11 text-xl"
            : "n:hidden lg:flex w-[71vw] justify-evenly items-center isolate mix-blend-normal z-10"
        }`}
      >
        <li>
          <Link
            to="/"
            className="hover:text-green-400 transition-all"
            onClick={clicked && handleMenuClick}
          >
            Home
          </Link>
        </li>
        <li className="relative z-50">
          <Dropdown
            titlee={"About"}
            options={[
              "What are we?",
              "Chairman's message",
              "Director's message",
              "Faculty of H-iet",
              "Administration",
            ]}
            links={[
              "about",
              "chairman",
              "director",
              "faculty",
              "administration",
            ]}
          />
        </li>
        <li>
          <Dropdown
            titlee={"Departments"}
            options={[
              "Department of CS / Information Technology",
              "Department of English Language Program",
              "Department of Vocational Training",
            ]}
            links={["IT", "English", "vocational"]}
          />
        </li>
        <li>
          <Link
            to="/news"
            className="hover:text-green-400 transition-all"
            onClick={clicked && handleMenuClick}
          >
            Latest News
          </Link>
        </li>
        <li>
          <Link
            to="/contacts"
            className="hover:text-green-400 transition-all"
            onClick={clicked && handleMenuClick}
          >
            Contact
          </Link>
        </li>
        <Button title="Student portal" to="portal1" />
        <Button title="Teacher portal" to="portal2" />
      </ul>
    </nav>
  );
};

export default React.memo(Navbar);
