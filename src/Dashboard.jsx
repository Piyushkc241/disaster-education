import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Administrator Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold mb-2">Quiz Participation</h3>
          <progress value={30} max={50} className="w-full h-4 rounded-full bg-gray-200"></progress>
          <p className="mt-2 text-gray-500">30 of 50 students completed the quiz</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-bold mb-2">Preparedness Score</h3>
          <progress value={80} max={100} className="w-full h-4 rounded-full bg-gray-200"></progress>
          <p className="mt-2 text-gray-500">Average preparedness: 80%</p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
