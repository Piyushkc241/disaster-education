import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const questions = [
    {
      question: "What should you do during an earthquake?",
      options: ["Run outside immediately", "Hide under a table", "Jump from building", "Call friends"],
      answer: "Hide under a table",
    },
    {
      question: "Who should you contact in case of flood?",
      options: ["Local authorities", "Neighbors", "Random stranger", "None"],
      answer: "Local authorities",
    },
  ];

  const handleAnswer = (q, option) => {
    if (option === q.answer) setScore(score + 1);
  };

  const handleComplete = () => setCompleted(true);

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Disaster Preparedness Quiz</h1>

      {!completed ? (
        <div className="max-w-2xl mx-auto space-y-4">
          {questions.map((q, idx) => (
            <div key={idx} className="bg-white shadow-md p-4 rounded-lg">
              <p className="font-semibold mb-2">{q.question}</p>
              <div className="flex flex-col gap-2">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    className="px-3 py-2 rounded bg-blue-100 hover:bg-blue-200 text-left"
                    onClick={() => handleAnswer(q, opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            onClick={handleComplete}
          >
            Submit Quiz
          </button>
        </div>
      ) : (
        <div className="text-center mt-6">
          <p className="text-2xl font-bold text-green-700">
            Your Score: {score} / {questions.length} ⭐
          </p>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={() => navigate("/students")}
          >
            Back to Students Page
          </button>
        </div>
      )}
    </div>
  );
}
