import React, { useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = lazy(() => import("./routes/home"));
const About = lazy(() => import("./routes/about"));
const Chairman = lazy(() => import("./routes/chairman"));
const Director = lazy(() => import("./routes/director"));
const Faculty = lazy(() => import("./routes/faculty"));
const Administration = lazy(() => import("./routes/administration"));
const Department = lazy(() => import("./routes/department.jsx"));
const News = lazy(() => import("./routes/news"));
const Contacts = lazy(() => import("./routes/contacts"));
const StudentPortal = lazy(() => import("./routes/studentPortal"));
const TeacherPortal = lazy(() => import("./routes/teacherPortal"));

function App() {
  // useEffect(() => {
  //   const handleContextMenu = (event) => {
  //     event.preventDefault(); // Prevents the default context menu from appearing
  //   };

  //   const handleKeyDown = (event) => {
  //     // Check if Ctrl + Shift + I is pressed
  //     if (event.ctrlKey && event.shiftKey && event.key === "I") {
  //       event.preventDefault();
  //     }
  //   };

  //   document.addEventListener("contextmenu", handleContextMenu);
  //   document.addEventListener("keydown", handleKeyDown);

  //   // Cleanup event listeners on component unmount
  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chairman" element={<Chairman />} />
          <Route path="/director" element={<Director />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/department" element={<Department />} />
          <Route path="/news" element={<News />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/portal1" element={<StudentPortal />} />
          <Route path="/portal2" element={<TeacherPortal />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
