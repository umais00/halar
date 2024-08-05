import React from "react";

function card({ src, title, desc }) {
  return (
    <div className="flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 sm:rounded-e-none ">
      <img
        className="rounded-t-lg sm:rounded-tr-none h-[40vh] object-cover object-bottom hover:scale-100"
        src={src}
        alt="Hollywood Sign on The Hill"
      />
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight">{title}</h5>
        <p className="mb-4 text-base">{desc}</p>
      </div>
    </div>
  );
}

export default card;
