"use client";

import { useEffect, useState } from "react";
import { saveQuestion, getQuestions } from "./quizManager";

export default function QuizCreator() {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("A");
  const [questions, setQuestions] = useState([]);

  // Load saved questions when page opens
  async function loadQuestions() {
    const data = await getQuestions();
    setQuestions(data);
  }

  useEffect(() => {
    loadQuestions();
  }, []);

  // Save a new question
  async function handleSubmit(e) {
    e.preventDefault();

    const result = await saveQuestion({
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      correctAnswer,
    });

    if (result) {
      alert("Question saved!");
      setQuestion("");
      setOptionA("");
      setOptionB("");
      setOptionC("");
      setOptionD("");
      setCorrectAnswer("A");
      loadQuestions();
    }
  }

  return (
    <main className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Quiz Creator</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input className="border p-2 rounded" placeholder="Question"
          value={question} onChange={(e) => setQuestion(e.target.value)} required />

        <input className="border p-2 rounded" placeholder="Option A"
          value={optionA} onChange={(e) => setOptionA(e.target.value)} required />

        <input className="border p-2 rounded" placeholder="Option B"
          value={optionB} onChange={(e) => setOptionB(e.target.value)} required />

        <input className="border p-2 rounded" placeholder="Option C"
          value={optionC} onChange={(e) => setOptionC(e.target.value)} required />

        <input className="border p-2 rounded" placeholder="Option D"
          value={optionD} onChange={(e) => setOptionD(e.target.value)} required />

        <select className="border p-2 rounded"
          value={correctAnswer} onChange={(e) => setCorrectAnswer(e.target.value)}>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
          <option value="C">Option C</option>
          <option value="D">Option D</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Save Question
        </button>
      </form>

      <h2 className="text-2xl font-bold mt-10 mb-4">Saved Questions</h2>

      {questions.map((q) => (
        <div key={q.id} className="border p-4 rounded mb-3">
          <p className="font-semibold">{q.question}</p>
          <p>A. {q.optionA}</p>
          <p>B. {q.optionB}</p>
          <p>C. {q.optionC}</p>
          <p>D. {q.optionD}</p>
          <p className="text-green-600 font-semibold">
            Correct Answer: Option {q.correctAnswer}
          </p>
        </div>
      ))}
    </main>
  );
}