import React from "react";

const about = () => {
  return (
    <div className=" mx-auto  flex flex-col h-[88vh] gap-11 overflow-hidden">
      <div className="absolute rounded-full n:w-[200px] n:h-[200px] md:w-[400px] md:h-[400px] top-20 n:left-[6.5rem] sm:-left-24 bg-gradient-to-br from-[#32507E] via-[#32507E] to-transparent filter blur-lg"></div>
      <div className="absolute rounded-full n:w-[200px] n:h-[200px] md:w-[400px] md:h-[400px] top-20 n:left-[13rem] sm:left-16 bg-gradient-to-br from-[#592952] via-[#592952] to-transparent filter blur-lg"></div>
      <div className="absolute rounded-full n:w-[200px] n:h-[200px] md:w-[400px] md:h-[400px] top-20 n:left-[21rem]   sm:left-56 bg-gradient-to-br from-[#7F384E] via-[#7F384E] to-transparent filter blur-lg"></div>
      <div className="flex-grow flex n:flex-col sm:flex-row h-[40%] ">
        <div className=" flex flex-col justify-center  items-center n:min-w-[40%] sm:min-w-[60%] ">
          <div className="flex flex-col gap-11 sm:px-0 md:px-5 n:ml-2 sm:ml-16 z-10">
            <h2 className="font-bold text-6xl  ">About</h2>
            <p className="n:w-[97%] sm:w-[75%] md:w-[60%] n:hidden sm:block">
              Get to know the creative mind behind halar institute and discover
              our commitment to give equal opportunities to youngsters
              regardless of their gender, age, race.
            </p>
          </div>
        </div>
        <div className="  text-neutral-300 ">
          <p className=" sm:bg-[#263238] p-5 relative z-20 text-sm sm:w-[90%] md:w-[72%] lg:w-[49%] mt-5">
            Halar Institute of Emerging Technologies (HIET), a remarkable
            initiative of the Halar Memon Jamaat of Sukkur, was established in
            November 2019 with the vision of providing exceptional education to
            diverse communities through quality teaching, services, incubations,
            and engagement.
            <br />
            <br />
            The institute aims to develop a world-class institution that fosters
            excellence in academic, industry, and social exposure for its
            students, empowering them to become future leaders and innovators.
          </p>
        </div>
      </div>
      <div
        className="flex-grow z-10 bg-cover bg-center h-[60%] blur-sm"
        style={{
          backgroundImage: 'url("hlr-about.jpg")',
        }}
      ></div>
      {/* <h1 className="text-8xl font-bold mb-4 self-center text-emerald-500">
        About Institute
      </h1>
      <h2 className="text-2xl font-semibold my-2">
        <li> Halar Institute of Emerging Technologies</li>
      </h2>
      <p className="text-lg mb-6">
        A great initiative taken by Halar Memon Jamaat of Sukkur, which
        established the institute in November 2019.
      </p>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">
          <li>Vision</li>
        </h3>
        <p className="text-lg">
          Providing the best education to diverse communities with quality
          teaching, services, incubation, and engagement.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">
          <li>Mission</li>
        </h3>
        <p className="text-lg">
          Develop a world-class institution with excellence in academics,
          industry, and social exposure to students.
        </p>
      </div> */}
    </div>
  );
};

export default about;
