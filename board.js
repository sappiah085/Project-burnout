import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyDAM2xab3Lrq8wKW6Xw6qqMR285DoO6VOQ",
  authDomain: "project-burnout-aee19.firebaseapp.com",
  databaseURL: "https://project-burnout-aee19-default-rtdb.firebaseio.com",
  projectId: "project-burnout-aee19",
  storageBucket: "project-burnout-aee19.appspot.com",
  messagingSenderId: "92397089772",
  appId: "1:92397089772:web:ceec63cc41186f8ece46c9",
};
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
const app = initializeApp(firebaseConfig);
const database = getDatabase();
const auth = getAuth();
await onAuthStateChanged(auth, (user) => {
  if (user) {
    const ADMIN = ref(database, "ADMIN/" + user.uid);
    onValue(ADMIN, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  } else {
    window.location = "login.html";
  }
});

document.querySelector(".sign-out").addEventListener("click", (e) => {
  e.preventDefault();
  signOut(auth);
});
