import { ref, set, push, onValue } from "firebase/database";
import { database } from "../firebaseconfig";

// Create Profile Screen -> Chat Screen -> Message

// Create a User Profile
export async function createUserProfile(username, email) {
  const userData = {
    username: username,
    email: email,
  };

  const profileRef = push(ref(database, "chat-profiles"));

  try {
    const profile = await set(profileRef, userData);
    localStorage.setItem("username", userData.username);
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

// Add a message
export async function chatMessage(message) {
  const chatRef = push(ref(database, "chat-messages"));
  try {
    const username = localStorage.getItem("username");
    const result = await set(chatRef, {
      message: message,
      user: username,
      timestamp: Date.now(),
    });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}

// Load messages
export function loadMessages(callback) {
  const chatRef = ref(database, "chat-messages");
  return onValue(chatRef, (snapshot) => {
    const data = snapshot.val() || {};
    const list = Object.entries(data)
      .map(([id, msg]) => ({ id, ...msg }))
      .sort((a, b) => a.timestamp - b.timestamp);
    callback(list);
  });
}