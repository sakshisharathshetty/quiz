import { ref, push, set, get } from "firebase/database";
import { database } from "../firebaseconfig";

// Create a quiz question
export async function saveQuestion(questionData) {
  // ref() -> database reference, push() -> unique ID
  const questionRef = push(ref(database, "quiz-questions"));
  try {
    // set() -> save the question
    await set(questionRef, questionData);
    return true;
  } catch (e) {
    console.error("Error saving question:", e);
    return false;
  }
}

// Fetch all quiz questions
export async function getQuestions() {
  try {
    // get() -> read once from the database
    const snapshot = await get(ref(database, "quiz-questions"));
    if (!snapshot.exists()) return [];
    return Object.entries(snapshot.val()).map(([id, q]) => ({ id, ...q }));
  } catch (e) {
    console.error("Error fetching questions:", e);
    return [];
  }
}