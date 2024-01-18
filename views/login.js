import { controlador } from "../controller/controller.js";

const formu = document.querySelector("form");

formu.addEventListener("click", (e) => {
  e.preventDefault();

  controlador(formu, e, "users");

  e.stopPropagation();
});