import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col">
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-700">Disaster Education App 🚨</h1>
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">
          Login
        </button>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Be Prepared. Stay Safe.</h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-10">
          An interactive learning platform for schools and colleges to educate students and staff about disaster preparedness.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full">
          <div
            onClick={() => navigate("/students")}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">For Students</h3>
            <p className="text-gray-600 mb-4">Learn through games, quizzes, and real-life scenarios.</p>
          </div>

          <div
            onClick={() => navigate("/teachers")}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-2">For Teachers</h3>
            <p className="text-gray-600 mb-4">Access teaching materials, guides, and safety drills.</p>
          </div>

          <div
            onClick={() => navigate("/colleges")}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition cursor-pointer"
          >
            <h3 className="text-2xl font-semibold text-purple-700 mb-2">For Colleges</h3>
            <p className="text-gray-600 mb-4">Organize awareness programs and monitor preparedness.</p>
          </div>
        </div>
      </main>

      <footer className="bg-white text-center py-4 text-gray-500 text-sm shadow-inner">
        © 2025 Disaster Education | Built for Hackathon
      </footer>
    </div>
  );
}
