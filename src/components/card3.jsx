import React from "react";

function Card3({ imgSrc, category, title, description, link }) {
  return (
    <div
      className="w-[98%] max-w-full mb-8 sm:w-[48.5%] lg:w-[31.5%] flex flex-col "
      style={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0 0 20px 13px",
      }}
    >
      <img
        src={imgSrc}
        alt="Card img"
        className="object-fill object-center w-full h-48"
      />
      <div className="flex flex-grow">
        <div className="triangle"></div>
        <div className="flex flex-col justify-between px-4 py-6 bg-slate-950 w-full">
          <div>
            <a
              href={link}
              className="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600"
            >
              {category}
            </a>
            <a
              href={link}
              className="transition-all duration-100 block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600"
            >
              {title}
            </a>
            <p className="mb-4">
              {description.map((item, index) => (
                <span key={index}>
                  {item}
                  <br />
                </span>
              ))}
            </p>
          </div>
          <div>
            <a
              href={link}
              className="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600"
            >
              Enroll Now -{">"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card3;
