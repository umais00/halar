import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

const Home = () => (
  <main className="flex flex-wrap lg:px-20 n:px-3">
    <section className="w-screen flex n:flex-col-reverse md:flex-row">
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
        style={{
          backgroundImage: 'url("el.png")',
        }}
      ></div>
    </section>
    <div className="absolute mt-[100vh] h-2 w-[100%] bg-gray-700 left-0"></div>
    <div className="flex n:flex-col sm:flex-row items-center w-full justify-center mt-64 gap-10">
      <Card
        src="better future.webp"
        title="better future"
        desc='"Skilled Mentors drive our students toward a brighter future."'
      />
      <Card
        src="career.webp"
        title="Career Opportunity"
        desc='"Unlock career doors with our industry-connected programs."'
      />
      <Card
        src="qt.webp"
        title="Quality Teachers"
        desc='"Expert trainers inspire and guide our students to excellence."'
      />
    </div>
    <div className="absolute n:mt-[330vh] sm:mt-[220vh]  md:mt-[200vh] h-2 w-[100%] bg-gray-700 left-0"></div>
    <section className="flex n:flex-col md:flex-row mt-64">
      <img
        src="happy.png"
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
    <div className="absolute n:mt-[490vh] sm:mt-[390vh]  md:mt-[300vh] h-2 w-[100%] bg-gray-700 left-0"></div>
  </main>
);

export default React.memo(Home);
