import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import Footer from "../components/footer";

const Home = () => (
  <main className="flex flex-wrap lg:px-20 n:px-3">
    <section className="w-full flex n:flex-col-reverse md:flex-row">
      <div className="px-10 n:p-0 n:w-full md:w-1/4 lg:w-1/2 n:h-[50vh] md:h-[88vh] flex justify-center flex-col gap-10 md:items-start n:items-center">
        <h1 className="lg:text-5xl n:text-3xl font-bold text-[#FFF7F5] -mt-10">
          Halar Institute of Emerging Technologies
        </h1>
        <i className="text-xl md:self-start n:self-center text-neutral-300">
          Invent Yourself
        </i>
        <div className="flex gap-5">
          <Button title="Get Started" />
          <Button title="View Courses" to="department" />
        </div>
      </div>
      <div
        className="md:w-3/4 lg:w-1/2 n:w-full n:h-[50vh] bg-no-repeat bg-center n:bg-contain md:bg-cover md:h-[88vh]"
        style={{ backgroundImage: 'url("el.webp")' }}
      ></div>
    </section>
    <hr className="border-none bg-gray-700 my-10 w-screen h-2" />
    <section className="my-16 flex flex-col gap-24">
      <h1 className=" text-5xl font-medium leading-tight text-primary text-center">
        What we offer!
      </h1>
      <div className="flex n:flex-col sm:flex-row items-center w-full justify-center ">
        <Card
          src="better future.webp"
          title="better future"
          desc='"Skilled Mentors drive our students toward a brighter future."'
          titlestyle="mb-2 text-xl font-medium leading-tight"
          descstyle="mb-4 text-base"
        />
        <Card
          src="career.webp"
          title="Career Opportunity"
          desc='"Unlock career doors with our industry-connected programs."'
          titlestyle="mb-2 text-xl font-medium leading-tight"
          descstyle="mb-4 text-base"
        />
        <Card
          src="qt.webp"
          title="Quality Teachers"
          desc='"Expert trainers inspire and guide our students to excellence."'
          titlestyle="mb-2 text-xl font-medium leading-tight"
          descstyle="mb-4 text-base"
        />
      </div>
    </section>
    <hr className="border-none bg-gray-700 my-10 w-screen h-2" />
    <section className="flex n:flex-col md:flex-row mt-40">
      <img
        src="happy.webp"
        className="md:w-1/2 n:w-full"
        loading="lazy"
        alt="Happy Students"
      />
      <div className="md:w-1/2 n:w-full flex flex-col justify-center gap-10 px-10">
        <h3 className="text-emerald-400 text-xl">---- About us</h3>
        <h1 className="md:text-5xl n:text-3xl font-bold text-[#FFF7F5]">
          Learning with Love and Laughter
        </h1>
        <p>
          "At our institute, 'Learning with Love and Laughter' is more than just
          a motto; it's our core belief. We create an engaging and enjoyable
          learning experience where students thrive academically and personally,
          fueled by the passion and laughter that fills our classrooms."
        </p>
        <Button title="learn more" to="about" />
      </div>
    </section>
    <hr className="border-none bg-gray-700 my-10 w-screen overflow-hidden h-2" />
    <section className="md:mt-64 n:my-32 lg:my-24 flex flex-col items-center w-full overflow-x-hidden">
      <h1 className="text-3xl font-bold py-5">Popular Departments</h1>
      <div className=" flex n:flex-col sm:flex-row items-center n:w-full md:w-[88.5vw] justify-center gap-10">
        <Card
          src="py.webp"
          title="IT Department"
          titlestyle="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          desc="CS/IT department"
          descstyle="text-xl font-bold mt-2 "
          istyle="w-[442px]"
        />
        <Card
          src="eng.webp"
          title="Literature"
          titlestyle="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          desc="English department"
          descstyle="text-xl font-bold mt-2"
        />
        <Card
          src="henna.webp"
          title="Training department"
          titlestyle="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          desc="vocational training"
          descstyle="text-xl font-bold mt-2"
        />
      </div>
    </section>
    <hr className="border-none bg-gray-700 my-10 w-screen h-2" />
    <Footer />
  </main>
);

export default Home;
