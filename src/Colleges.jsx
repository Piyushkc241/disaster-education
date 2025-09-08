import React from "react";
import { useNavigate } from "react-router-dom";

export default function Colleges() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-purple-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Colleges Portal</h1>

      <div className="max-w-3xl mx-auto space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Awareness Programs</h3>
          <p>Organize safety workshops, virtual drills, and student engagement activities.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Preparedness Tracking</h3>
          <p>Track student and staff preparedness levels and drill participation.</p>
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
