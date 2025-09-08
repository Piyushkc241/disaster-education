import React from "react";
import { useNavigate } from "react-router-dom";

export default function LearningModule() {
  const navigate = useNavigate();

  const modules = [
    {
      title: "Earthquake Safety",
      description: "Learn how to stay safe during earthquakes with step-by-step guides and drills.",
      color: "bg-yellow-100",
    },
    {
      title: "Flood Preparedness",
      description: "Understand flood warnings, evacuation plans, and safety tips.",
      color: "bg-blue-100",
    },
    {
      title: "Fire Safety",
      description: "Know fire emergency procedures, evacuation routes, and first aid tips.",
      color: "bg-red-100",
    },
    {
      title: "Storm & Cyclone Safety",
      description: "Learn how to protect yourself and your surroundings during storms.",
      color: "bg-purple-100",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Student Learning Modules</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {modules.map((mod, idx) => (
          <div key={idx} className={`p-6 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer ${mod.color}`}>
            <h3 className="text-2xl font-semibold mb-2">{mod.title}</h3>
            <p className="text-gray-700 mb-4">{mod.description}</p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Explore
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => navigate("/students")}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Back to Students Page
        </button>
      </div>
    </div>
  );
}
