import { j as e, R as n, B as t } from "./index-KRosJ0TK.js";
function s({ src: l, title: a, desc: r }) {
  return e.jsxs("div", {
    className:
      "flex flex-col rounded-lg  text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 sm:rounded-e-none ",
    children: [
      e.jsx("img", {
        className:
          "rounded-t-lg sm:rounded-tr-none h-[40vh] object-cover object-bottom hover:scale-100",
        src: l,
        alt: "Hollywood Sign on The Hill",
      }),
      e.jsxs("div", {
        className: "p-6",
        children: [
          e.jsx("h5", {
            className: "mb-2 text-xl font-medium leading-tight",
            children: a,
          }),
          e.jsx("p", { className: "mb-4 text-base", children: r }),
        ],
      }),
    ],
  });
}
const c = () =>
    e.jsxs("main", {
      className: "flex flex-wrap lg:px-20 n:px-3",
      children: [
        e.jsxs("section", {
          className: "w-screen flex n:flex-col-reverse md:flex-row",
          children: [
            e.jsxs("div", {
              className:
                "px-10 n:p-0 n:w-full md:w-1/4 lg:w-1/2 n:h-[50vh] md:h-[88vh] flex justify-center flex-col gap-10 md:items-start n:items-center",
              children: [
                e.jsx("h1", {
                  className:
                    "lg:text-5xl n:text-3xl font-bold text-[#FFF7F5] -mt-10",
                  children: "Halar Institute of Emerging Technologies",
                }),
                e.jsx("i", {
                  className:
                    "text-xl md:self-start n:self-center text-neutral-300",
                  children: "Invent Yourself",
                }),
                e.jsxs("div", {
                  className: "flex gap-5",
                  children: [
                    e.jsx(t, { title: "Get Started" }),
                    e.jsx(t, { title: "View Courses", to: "department" }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className:
                "md:w-3/4 lg:w-1/2 n:w-full n:h-[50vh] bg-no-repeat bg-center n:bg-contain md:bg-cover md:h-[88vh]",
              style: { backgroundImage: 'url("el.png")' },
            }),
          ],
        }),
        e.jsx("div", {
          className: "absolute mt-[100vh] h-2 w-[100%] bg-gray-700 left-0",
        }),
        e.jsxs("div", {
          className:
            "flex n:flex-col sm:flex-row items-center w-full justify-center mt-64 gap-10",
          children: [
            e.jsx(s, {
              src: "../better future.webp",
              title: "better future",
              desc: '"Skilled Mentors drive our students toward a brighter future."',
            }),
            e.jsx(s, {
              src: "../career.webp",
              title: "Career Opportunity",
              desc: '"Unlock career doors with our industry-connected programs."',
            }),
            e.jsx(s, {
              src: "../qt.webp",
              title: "Quality Teachers",
              desc: '"Expert trainers inspire and guide our students to excellence."',
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "absolute n:mt-[330vh] sm:mt-[220vh]  md:mt-[200vh] h-2 w-[100%] bg-gray-700 left-0",
        }),
        e.jsxs("section", {
          className: "flex n:flex-col md:flex-row mt-64",
          children: [
            e.jsx("img", {
              src: "../happy.png",
              className: "md:w-1/2 n:w-full",
              loading: "lazy",
              alt: "Happy Students",
            }),
            e.jsxs("div", {
              className:
                "md:w-1/2 n:w-full flex flex-col justify-center gap-10 px-10",
              children: [
                e.jsx("h3", {
                  className: "text-emerald-400 text-xl",
                  children: "---- About us",
                }),
                e.jsx("h1", {
                  className: "md:text-5xl n:text-3xl font-bold text-[#FFF7F5]",
                  children: "Learning with Love and Laughter",
                }),
                e.jsx("p", {
                  children: `"At our institute, 'Learning with Love and Laughter' is more than just a motto; it's our core belief. We create an engaging and enjoyable learning experience where students thrive academically and personally, fueled by the passion and laughter that fills our classrooms."`,
                }),
                e.jsx(t, { title: "learn more", to: "about" }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className:
            "absolute n:mt-[490vh] sm:mt-[390vh]  md:mt-[300vh] h-2 w-[100%] bg-gray-700 left-0",
        }),
      ],
    }),
  i = n.memo(c);
export { i as default };
