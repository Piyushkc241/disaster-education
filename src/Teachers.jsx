import React from "react";
import { useNavigate } from "react-router-dom";

export default function Teachers() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Teachers Portal</h1>

      <div className="max-w-3xl mx-auto space-y-4">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Teaching Materials</h3>
          <p>Guides, lesson plans, and disaster drills for classroom use.</p>
        </div>
        <div className="bg-red-100 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Emergency Contacts</h3>
          <ul>
            <li>Local Fire Dept: 101</li>
            <li>Police: 100</li>
            <li>School Admin: admin@school.edu</li>
          </ul>
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
