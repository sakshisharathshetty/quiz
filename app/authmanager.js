import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebaseconfig";
const googleProvider = new GoogleAuthProvider();


export async function createCustomer(email, password, confirm) {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      //SUCCESS CASE
      console.log(JSON.stringify(userCredentials.user))
      sendEmailVerification(userCredentials.user)
    })
    .catch((reason) => {
      alert(JSON.stringify(reason));
    });
}

export async function signInWithGoogle() {
  try {
    const authResult = await signInWithPopup(auth, googleProvider);
    const user = authResult.user;
    console.log(
      `User Data : ${JSON.stringify(user)} \n
      ${JSON.stringify(authResult.userCredentials)}`,
    );
  } catch (e) {
    alert(JSON.stringify(e));

  }
}
export async function signOutGoogle(){
    await signOut(auth)
}

export async function signInCustomer(email, password) {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      //SUCCESS CASE
      console.log(JSON.stringify(userCredentials.user))
      sendEmailVerification(userCredentials.user)
    })
    .catch((reason) => {
      alert(JSON.stringify(reason));
    });
}