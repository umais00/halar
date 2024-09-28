import React from "react";

function director() {
  return (
    <div className="h-[88vh] n:gap-5 sm:gap-8 md:gap-0  flex md:flex-row n:flex-col ">
      <div className="md:w-[40%] n:h-[40%] md:h-auto  flex items-center n:justify-center md:justify-end px-10">
        <img
          src="administrator_upscaled.webp"
          alt="administrator"
          className="sm:w-[30vw] n:w-[45vw]"
          style={{
            boxShadow: "rgba(255, 255, 255, 0.2) 0px 7px 29px 0px",
            borderRadius: "5px",
          }}
        />
      </div>
      <div className="md:w-[60%] n:h-[60%] md:h-auto flex flex-col n:items-center md:items-start justify-center gap-7 ">
        <h3 className="text-emerald-400 text-xl n:hidden md:block">
          --- DIRECTOR
        </h3>
        <h1 className="md:text-5xl n:text-3xl font-bold text-[#FFF7F5]">
          Muhammad Hanif Memon
        </h1>
        <q className="md:leading-loose sm:leading-relaxed n:leading-normal w-[90%]">
          This Institution Is The First Step Towards The Betterment Of Youth Of
          Our Region. Providing The Best & The Most Advanced Education Is Our
          First & Foremost Priority. The Objective Is To Make The Students Able
          To Create Their Own Identity In The Field That They Want To Persue &
          To Be Able To Lead A Successful Life.
        </q>
      </div>
    </div>
  );
}

export default director;
