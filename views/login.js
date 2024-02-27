import { controlador } from "../controller/controller.js";
import { login, logout } from "./auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const formu = document.querySelector("form");
const buttonLogin = document.querySelector("#button-login");



formu.addEventListener("click", (e) => {
  e.preventDefault();

  controlador(formu, e, "users");

  e.stopPropagation();
});

buttonLogin.addEventListener("click", async (e) => {
  try {
    await login();
  } catch (error) {}
});