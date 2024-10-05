import React from "react";
import Card2 from "../components/card2";
import Footer from "../components/footer";

function faculty() {
  return (
    <div className="min-h-[88vh] pt-20 flex flex-col gap-y-32">
      <div className="w-full flex flex-col items-center gap-28">
        <h1 className="font-semibold text-[42px]">Faculty Of CS/IT</h1>
        <div className="w-full flex-wrap gap-y-24 font-sans flex flex-row justify-center items-center px-8 gap-8">
          <Card2
            image="umais_upscaled.jpg"
            name="Muhammad Umais"
            address="umais@halariet.com"
            bio="Passionate Web developer, proficient in both front-end and back-end"
            degree={["Diploma in I.T"]}
          />
          <Card2
            image="saadat.webp"
            name="Mr. Saadat memon"
            address="saadat.memon@halariet.com"
            bio="IT Instructor at HALAR-IET since 2019, shaping tech minds with passion "
            degree={["BS (CS) -SALU"]}
          />
          <Card2
            image="anas1.webp"
            name="Mr. Anas qadri"
            address="anas.qadri@halariet.com"
            bio="Self Taught Creative Professional with 3+years of experience"
            degree={["Diploma in I.T (SBTE)"]}
          />
          <Card2
            image="riaz.webp"
            name="Engr M. Riaz Ali"
            address="muhammad.riaz@halariet.com"
            bio="Self Taught Creative Professional with 3+years of experience"
            degree={["BE (EE) -SIBA"]}
          />
          <Card2
            image="abdullah.jpeg"
            name="Mr. Abdullah memon"
            address="abdullah.memon@halariet.com"
            bio="Self Taught Creative Professional with 3+years of experience"
            degree={["BE (EE) -SIBA"]}
          />
        </div>
      </div>
      <hr className="border-none bg-gray-700 my-10 w-screen h-2" />

      <div className="w-full flex flex-col items-center gap-28">
        <h1 className="font-semibold text-[42px]">Faculty Of ELP</h1>
        <div className="w-full flex-wrap gap-y-24 font-sans flex flex-row justify-center items-center px-8 gap-8">
          <Card2
            image="talha.webp"
            name="Mr. Talha Bhatti"
            address="talha.bhatti@halariet.com"
            bio="Front end Developer, avid reader. Love to take a long walk, swim"
            degree={["Master in English literature (UoK)"]}
          />
          <Card2
            image="female.webp"
            name="Ms. Unza Siddiqui"
            address="unza.siddiqui@halariet.com"
            bio="Self Taught Creative Professional with 3+years of experience"
            degree={["MA (English) SALU"]}
          />
        </div>
      </div>
      <hr className="border-none bg-gray-700 my-10 w-screen h-2" />

      <div className="w-full flex flex-col items-center gap-28 mb-10">
        <h1 className="font-semibold text-[42px]">Faculty Of VT</h1>
        <div className="w-full flex-wrap gap-y-24 font-sans flex flex-row justify-center items-center px-8 gap-8">
          <Card2
            image="female.webp"
            name="Ms. Hafeeza Arsalan"
            address="Lecturer (Beautician)"
            bio="Front end Developer, avid reader. Love to take a long walk, swim"
            degree={["Diploma in Beautician (SBTE)"]}
          />
          <Card2
            image="female.webp"
            name="Ms. Sehrish Waseem"
            address=""
            bio="Sewing Artist Lecturer - (Stitching & Dress Making)"
            degree={["Diploma in VT (NANTCC)"]}
          />
        </div>
      </div>
      <hr className="border-none bg-gray-700 my-10 w-screen h-2" />

      <Footer />
    </div>
  );
}

export default faculty;
