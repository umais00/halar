import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/home"; // Preload the home page

// Lazy-loaded components
const About = lazy(() => import("./routes/about"));
const Chairman = lazy(() => import("./routes/chairman"));
const Director = lazy(() => import("./routes/director"));
const Faculty = lazy(() => import("./routes/faculty"));
const Administration = lazy(() => import("./routes/administration"));
const Department = lazy(() => import("./routes/department"));
const News = lazy(() => import("./routes/news"));
const Contacts = lazy(() => import("./routes/contacts"));
const StudentPortal = lazy(() => import("./routes/studentPortal"));
const TeacherPortal = lazy(() => import("./routes/teacherPortal"));

// Loading Screen Component
const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
  );
};

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
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
