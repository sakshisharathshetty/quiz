"use client";
import {QuizContext} from "../state-management/quizcontext";
import {useContext} from 'react'
import {useRouter} from 'next/navigation'
export default function QuizEnrollPage() {
  const router = useRouter()
   const { setUserName, setUserPhone} = useContext(QuizContext)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "purple",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          color: "yellow",
          fontWeight: "bold",
          fontSize: "80px",
          fontFamily: "cursive",
        }}
      >
        Think More
      </div>
      <InputField
        placeholder={"What can we call you?"}
        userInputTyped={(name)=> {
          setUserName(name)
        }}
      />
      <br />
      <InputField placeholder={"How can we contact you?"} 
       userInputTyped={(email)=> {
          setUserPhone(email)
        }}
      />
      <br />
      <button
       onClick={(event)=> {
          router.push('/quiz')
       }}
        style={{
          padding: "10px",
          background: "yellow",
          width: "500px",
          height: "50px",
          fontSize: "30px",
        }}
      >
        Lets Start
      </button>
    </div>
  );
}

function InputField({ placeholder, userInputTyped }) {
  return (
    <input
      style={{
        padding: "10px",
        background: "white",
        width: "500px",
        height: "50px",
        fontSize: "30px",
      }}
      placeholder={placeholder}
      onChange={(event) => {
        userInputTyped(event.target.value);
      }}
    />
  );
}