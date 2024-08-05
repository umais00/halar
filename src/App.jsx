import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/home";

function App() {
  return (
    <Router>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/department" element={<h1>Departments Page</h1>} />
        <Route path="/news" element={<h1>Latest News Page</h1>} />
        <Route path="/contacts" element={<h1>Contact Page</h1>} />
        <Route path="/portal1" element={<h1>Student Portal Page</h1>} />
        <Route path="/portal2" element={<h1>Teacher Portal Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
