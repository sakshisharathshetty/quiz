"use client"
import {useState,createContext,useContext} from "react";

export const QuizContext = createContext(); 
export default function QuizStateManagement({children}){
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")

    function setUserName(name){
        setName(name)
    }
    function setUserPhone(phone){
        setPhone(phone)
    }
    
    return <QuizContext.Provider value={{ 
        name,phone,setUserName, setUserPhone
    }}>
        {children}
    </QuizContext.Provider>
}