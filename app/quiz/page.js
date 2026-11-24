"use client";
import { useState, useContext } from "react";
import { QuizContext } from "../state-management/quizcontext";
export default function QuizPage() {
  const { name, phone } = useContext(QuizContext);
  const questions = [
    {
      que: "What is React?",
      a: "A database",
      b: "A JavaScript library for building user interfaces",
      c: "A programming language",
      d: "A CSS framework",
      correct: "b",
    },
    {
      que: "Who developed React?",
      a: "Google",
      b: "Microsoft",
      c: "Facebook",
      d: "Amazon",
      correct: "c",
    },
    {
      que: "Which language is primarily used with React?",
      a: "Python",
      b: "JavaScript",
      c: "Java",
      d: "C#",
      correct: "b",
    },
    {
      que: "What is a React component?",
      a: "A reusable piece of UI",
      b: "A database table",
      c: "A CSS property",
      d: "A server",
      correct: "a",
    },
    {
      que: "Which syntax is commonly used to write HTML-like code in React?",
      a: "XML",
      b: "JSX",
      c: "SQL",
      d: "JSON",
      correct: "b",
    },
    {
      que: "Which hook is used to manage state in a functional component?",
      a: "useEffect",
      b: "useState",
      c: "useComponent",
      d: "useData",
      correct: "b",
    },
    {
      que: "What is the purpose of props in React?",
      a: "To pass data from one component to another",
      b: "To create databases",
      c: "To style HTML elements",
      d: "To install packages",
      correct: "a",
    },
    {
      que: "Which hook is commonly used to perform side effects in React?",
      a: "useState",
      b: "useEffect",
      c: "useProps",
      d: "useRender",
      correct: "b",
    },
    {
      que: "How do you create a React component using a function?",
      a: "function MyComponent() { return <h1>Hello</h1>; }",
      b: "component MyComponent() { }",
      c: "create MyComponent() { }",
      d: "react MyComponent() { }",
      correct: "a",
    },
    {
      que: "What is the purpose of the key prop when rendering a list in React?",
      a: "To style list items",
      b: "To uniquely identify elements in a list",
      c: "To store passwords",
      d: "To create a new component",
      correct: "b",
    },
  ];

  const [score, setScore] = useState(0);
  const [noCorrectAns, setNoCorrectAns] = useState(0);

  const [noInCorrectAns, setNoInCorrectAns] = useState(0);

  function calculateAnswer(selected, correct) {
    if (selected == correct) {
      setScore(score + 2);
      setNoCorrectAns(noCorrectAns + 1);
    } else {
      setScore(score - 0.5);
      setNoInCorrectAns(noInCorrectAns + 1);
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "purple",
        width: "100%",
      }}
    >
      <div style={{ fontSize: "40px", color: "white" }}>Name : {name}</div>

      <div style={{ fontSize: "40px", color: "white" }}>Phone : {phone}</div>

      <div style={{ fontSize: "40px", color: "white" }}>Score : {score}</div>
      <div style={{ fontSize: "40px", color: "white" }}>
        Correct : {noCorrectAns}
      </div>
      <div style={{ fontSize: "40px", color: "white" }}>
        Incorrect : {noInCorrectAns}
      </div>

      {questions.map((question, index) => {
        return (
          <div key={index}>
            <div
              style={{
                width: "900px",
                color: "black",
                background: "yellow",
                fontSize: "50px",
                padding: "20px",
                borderRadius: "40px",
              }}
            >
              {question["que"]}
              <br />
              <ChoiceCard
                title={question["a"]}
                choice={"a"}
                selectedChoice={(selected) => {
                  calculateAnswer(selected, question["correct"]);
                }}
              />
              <ChoiceCard
                title={question["b"]}
                choice={"b"}
                selectedChoice={(selected) => {
                  calculateAnswer(selected, question["correct"]);
                }}
              />
              <ChoiceCard
                title={question["c"]}
                choice={"c"}
                selectedChoice={(selected) => {
                  calculateAnswer(selected, question["correct"]);
                }}
              />
              <ChoiceCard
                title={question["d"]}
                choice={"d"}
                selectedChoice={(selected) => {
                  calculateAnswer(selected, question["correct"]);
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ChoiceCard({ title, choice, selectedChoice }) {
  return (
    <div
      style={{
        color: "black",
        background: "orange",
        fontSize: "30px",
        padding: "20px",
        borderRadius: "40px",
      }}
      onClick={(event) => {
        selectedChoice(choice);
      }}
    >
      {title}
    </div>
  );
}