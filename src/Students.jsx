import React from "react";
import { useNavigate } from "react-router-dom";

export default function Students() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Student Learning Portal</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Learning Module */}
        <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition cursor-pointer">
          <h3 className="text-2xl font-semibold text-blue-700 mb-2">Learning Modules</h3>
          <p className="text-gray-600 mb-4">Tips and guides on earthquake, flood, fire, and other disasters.</p>
          <button onClick={() => navigate("/learning")} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
  Explore
</button>

        </div>

        {/* Quiz Module */}
        <div
          onClick={() => navigate("/quiz")}
          className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition cursor-pointer"
        >
          <h3 className="text-2xl font-semibold text-green-700 mb-2">Disaster Quiz</h3>
          <p className="text-gray-600 mb-4">Test your knowledge with interactive quizzes.</p>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Start Quiz
          </button>
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
