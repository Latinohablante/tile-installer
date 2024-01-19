import { controlador } from "../controller/controller.js";

const formu = document.getElementById("register-form").addEventListener("click", async (e) => {
    e.preventDefault();
    controlador(formu, e, "users");
    e.stopPropagation();

})