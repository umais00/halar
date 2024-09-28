import Footer from "../components/footer";
import React from "react";
import Card2 from "../components/card2";

function adminstration() {
  return (
    <>
      <div className="h-[88vh] n:gap-0 sm:gap-8 md:gap-0  flex md:flex-row n:flex-col ">
        <div className="md:w-[40%] n:h-[60%] md:h-auto  flex items-center n:justify-center md:justify-end px-10">
          <img
            src="administrator_upscaled.webp"
            alt="administrator"
            className="sm:w-[50vw] n:w-[45vw]"
            style={{
              boxShadow: "rgba(255, 255, 255, 0.2) 0px 7px 29px 0px",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="md:w-[60%] n:h-[40%] md:h-auto flex flex-col n:items-center md:items-start justify-center gap-7 ">
          <h3 className="text-emerald-400 text-xl n:hidden md:block">
            --- DIRECTOR
          </h3>
          <h1 className="md:text-5xl n:text-3xl font-bold text-[#FFF7F5]">
            Muhammad Hanif Memon
          </h1>
          <p className="md:leading-loose sm:leading-relaxed n:leading-normal w-[90%] n:text-center md:text-start">
            Contact:{" "}
            <span className="text-blue-500 cursor-pointer ">
              admin@halariet.com
            </span>
          </p>
        </div>
      </div>
      <hr className="border-none bg-gray-700 my-10 w-screen h-2" />

      <div className="min-h-[88vh] pt-20 flex flex-col gap-y-32">
        <div className="w-full flex flex-col items-center gap-28">
          <h1 className="font-semibold text-[42px]">Office Bearer </h1>
          <div className="w-full flex-wrap gap-y-24 font-sans flex flex-row justify-center items-center px-8 gap-8">
            <Card2
              image="female.jpg"
              name="Ms. Aisha Hassan"
              address="aisha.hassan@halariet.com"
              bio="Passionate Web developer, proficient in both front-end and back-end"
              degree={["Diploma in I.T(continue)"]}
            />

            <Card2
              image="mudassir.webp"
              name="Mr. M. Mudassir"
              address="muhammad.mudassir@halariet.com"
              bio="Pursuing pilot training, bridging engineering and aviation with experience."
              degree={[
                "BS (Aerospace Science) -IST",
                "Aeronautical Engineer -IST",
              ]}
            />
            <Card2
              image="female.jpg"
              name="Ms. Qurat-ul-ain"
              address="qurat.saleem@halariet.com"
              bio="Self Taught Creative Professional with 3+years of experience"
              degree={["BE (EE) -SIBA"]}
            />
          </div>
        </div>
        <hr className="border-none bg-gray-700 my-10 w-screen h-2" />

        <div className="w-full flex flex-col items-center gap-28">
          <h1 className="font-semibold text-[42px]">Director Examination's</h1>
          <div className="w-full flex-wrap gap-y-24 font-sans flex flex-row justify-center items-center px-8 gap-8">
            <Card2
              image="saadat.webp"
              name="Mr. Saadat memon"
              address="saadat.memon@halariet.com"
              bio="IT Instructor at HALAR-IET since 2019, shaping tech minds with passion and expertise."
              degree={["BS (CS) -SALU"]}
            />

            <Card2
              image="mudassir.webp"
              name="Mr. M. Mudassir"
              address="muhammad.mudassir@halariet.com"
              bio="Self Taught Creative Professional with 3+years of experience"
              degree={["BS (Aerospace Science) -IST"]}
            />
          </div>
        </div>
        <hr className="border-none bg-gray-700 my-10 w-screen h-2" />

        <div className="w-full flex flex-col items-center gap-28 mb-20">
          <h1 className="font-semibold text-[42px]">Director Admission's</h1>
          <div className="w-full flex-wrap gap-y-24 font-sans flex flex-row justify-center items-center px-8 gap-8">
            <Card2
              image="female.jpg"
              name="Ms. Aisha Hassan"
              address="aisha.hassan@halariet.com"
              bio="Passionate Web developer, proficient in both front-end and back-end"
              degree={["Diploma in I.T(continue)"]}
            />

            <Card2
              image="female.jpg"
              name="Ms. Qurat-ul-ain"
              address="qurat.saleem@halariet.com"
              bio="Self Taught Creative Professional with 3+years of experience"
              degree={["BE (EE) -SIBA"]}
            />
          </div>
        </div>
        <hr className="border-none bg-gray-700 my-10 w-screen h-2" />

        <Footer />
      </div>
    </>
  );
}

export default adminstration;
