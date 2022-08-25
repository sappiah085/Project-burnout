import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDAM2xab3Lrq8wKW6Xw6qqMR285DoO6VOQ",
  authDomain: "project-burnout-aee19.firebaseapp.com",
  databaseURL: "https://project-burnout-aee19-default-rtdb.firebaseio.com",
  projectId: "project-burnout-aee19",
  storageBucket: "project-burnout-aee19.appspot.com",
  messagingSenderId: "92397089772",
  appId: "1:92397089772:web:ceec63cc41186f8ece46c9",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const database = getDatabase();

await onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location = "Dashboard.html";
  }
});
const doms = {
  form: document.querySelector("#userInformation"),
};

doms.form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert(error);
  }
});
