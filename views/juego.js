import { controlador } from "../controller/controller.js";

const tabla = document.getElementById("juego");

let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 50;
const timerInicial = 50;
let tiempoRegresivoId = null;
let tiempoTotal;

let winAudio = new Audio("./sounds/win.wav");
let clickAudio = new Audio("./sounds/click.wav");
let loseAudio = new Audio("./sounds/lose.wav");
let rightAudio = new Audio("./sounds/right.wav");
let wrongAudio = new Audio("./sounds/wrong.wav");

let mostrarMovimientos = document.getElementById("movimientos");

let mostrarAciertos = document.getElementById("aciertos");

let mostrarTiempo = document.getElementById("t-restante");

let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numeros = numeros.sort(() => {
  return Math.random() - 0.5;
});

function contarTiempo() {
  //
  tiempoRegresivoId = setInterval(() => {
    timer--;
    mostrarTiempo.innerHTML = `tiempo: ${timer} segundos`;
    if (timer == 0) {
      clearInterval(tiempoRegresivoId);

      bloquearTarjetas();
      guardarDatosJuego();
      loseAudio.play();
    }
  }, 1000);
}

function bloquearTarjetas() {
  for (let i = 0; i <= 15; i++) {
    let tarjetaBloqueada = document.getElementById(i);
    tarjetaBloqueada.innerHTML = `<img src="./img/img/b${numeros[i]}.png" alt="img${numeros[i]}">`;
    tarjetaBloqueada.disabled = true;
  }
}

tabla.addEventListener("click", (e) => {
  //console.log(e)
  destapar(e.target.dataset.destapar);
});

//función principal
function destapar(id) {
  if (temporizador == false) {
    contarTiempo();
    temporizador = true;
  }
  tarjetasDestapadas++;
  if (tarjetasDestapadas == 1) {
    tarjeta1 = document.getElementById(id);
    primerResultado = numeros[id];
    tarjeta1.innerHTML = `<img src="./img/img/b${primerResultado}.png">`;
    clickAudio.play();
    tarjeta1.disabled = true;
  } else if (tarjetasDestapadas == 2) {
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros[id];
    tarjeta2.innerHTML = `<img src="./img/img/b${segundoResultado}.png">`;
    clickAudio.play();
    tarjeta2.disabled = true;
    movimientos++;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
    if (primerResultado == segundoResultado) {
      tarjetasDestapadas = 0;
      rightAudio.play();
      aciertos++;
      mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

      if (aciertos == 8) {
        clearInterval(tiempoRegresivoId);
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
        tiempoTotal = timerInicial - timer;
        mostrarTiempo.innerHTML = `Fantástico te tomó: ${tiempoTotal} segundos`;
        guardarDatosJuego();
        winAudio.play();
      }
    } else {
      setTimeout(() => {
        tarjeta1.innerHTML = "";
        tarjeta2.innerHTML = "";
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
        tarjetasDestapadas = 0;
        wrongAudio.play();
      }, 700);
    }
  }
}


function guardarDatosJuego() {
    const seccion = document.querySelector("section");
    const agregar = seccion.before(document.createElement("button"));
    agregar.value = "Guardar Puntaje";



  //controlador(null, null, "users", {
  //  aciertos: aciertos,
  //  movimientos: movimientos,
  //  tiempo: tiempoTotal,
  //});
}

