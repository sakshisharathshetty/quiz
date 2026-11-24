import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, query, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDU6IbHSpXhy2Qx6WMlv6n39ouIq9pTHQ8",
  authDomain: "micromentor-29887.firebaseapp.com",
  databaseURL: "https://micromentor-29887-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "micromentor-29887",
  storageBucket: "micromentor-29887.firebasestorage.app",
  messagingSenderId: "448307895851",
  appId: "1:448307895851:web:b4c2f6d175c2215a8f146e",
};

export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);

export async function getPlayersFromDB() {
  try {
    const playersRef = ref(database, "players");
    const snapshot = await get(query(playersRef));
    alert(JSON.stringify(snapshot.val()));
  } catch (error) {
    console.error("Error loading players:", error);
  }
}