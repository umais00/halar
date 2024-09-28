import React from "react";

function card({
  src,
  title,
  titlestyle,
  style,
  descstyle = "",
  desc = "",
  istyle = "",
}) {
  return (
    <div
      className={`flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 sm:rounded-e-none ${style} `}
    >
      <img
        className={`rounded-t-lg sm:rounded-tr-none h-[40vh] object-cover object-bottom hover:scale-100 ${istyle}`}
        src={src}
        alt="error"
      />
      <div className="p-6">
        <h5 className={titlestyle}>{title}</h5>
        <p className={descstyle}>{desc}</p>
      </div>
    </div>
  );
}

export default card;
