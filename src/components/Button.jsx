import React from "react";
import { Link } from "react-router-dom";

function Button({ to = "", title }) {
  return (
    <li className="relative inline-flex group list-none w-max">
      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
      <Link
        to={`/${to}`}
        className="relative inline-flex items-center justify-center px-4 py-2 text-md font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
      >
        {title}
      </Link>
    </li>
  );
}

export default Button;
