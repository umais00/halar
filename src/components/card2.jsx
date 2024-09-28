import React from "react";

function Card2({ image, name, address, role, bio, degree }) {
  return (
    <div className="card w-72 h-64 bg-[#1C2539] shadow-xl hover:shadow">
      <div
        className="w-32 h-[128px] mx-auto rounded-full bg-cover bg-center -mt-20 border-8 border-[#1C2539]"
        style={{ backgroundImage: `url(${image})` }}
        alt="Profile"
      ></div>

      <div className="text-center mt-2 text-3xl font-medium">{name}</div>
      <div className="text-center mt-2 font-light text-sm">{address}</div>
      <div className="text-center font-normal text-lg">{role}</div>
      <div className="px-6 text-center mt-2 font-light text-sm">
        <p className="h-9 ">{bio}</p>
      </div>
      <hr className="mt-8" />
      <div className="flex justify-center items-center h-[21%]">
        {/* Show first degree */}

        {/* Conditionally render the separator if there are two degrees */}
        {degree.length === 1 && (
          <div className="w-full text-center ">
            <span className="font-bold">{degree[0]}</span>
          </div>
        )}
        {degree.length === 2 && (
          <div className="w-1/2 text-center">
            <span className="font-bold">{degree[0]}</span>
          </div>
        )}
        {degree.length === 2 && (
          <div className="w-0 border border-gray-300"></div>
        )}

        {/* Show second degree if available */}
        {degree.length === 2 && (
          <div className="w-1/2 text-center">
            <span className="font-bold">{degree[1]}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card2;
