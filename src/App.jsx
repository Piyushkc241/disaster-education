import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Students from "./Students.jsx";
import Quiz from "./Quiz.jsx";
import Teachers from "./Teachers.jsx";
import Colleges from "./Colleges.jsx";
import Dashboard from "./Dashboard.jsx";
import LearningModule from "./LearningModule.jsx";



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/students" element={<Students />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/colleges" element={<Colleges />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/learning" element={<LearningModule />} />
    </Routes>
  );
}
