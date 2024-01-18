//Para que funcione debe usarse el live server en el puerto 4000
//json-server -p 4000 db/db.json
//npm install json-server
//https://github.com/typicode/json-server/tree/v0?tab=readme-ov-file
// npm install -g json-server

import { post } from "../models/post.js";
import { get, verificarGet, verificarUserYPass } from "../models/get.js";
import { put } from "../models/put.js";
import { delet } from "../models/delete.js";

// import { llenarFormulario, llenarSelect } from "../views/utils.js";

export function controlador(formu, event, entidad, elemformu) {
  const URL = "http://localhost:4000/";
  let url = "";
  
  const datos = formu !== null ? Object.fromEntries(new FormData(formu)) : null;
  const value = event.target.value;

  switch (value) {
    case "Agregar":
      url = URL + entidad;
      post(url, datos);
      formu.reset();
      break;
    case "CARGARSELECT":
    case "Buscar":
      url = `${URL}${entidad}/${datos !== null ? datos.id : ""}`;
      
      get(url, formu);
      // get(url, formu).then((data) => console.log("data: " + data))
      break;
    case "Modificar":
      url = URL + entidad + `/${datos.id}`;
      put(url, datos);
      //formu.reset
      break;
    case "Borrar":
      url = URL + entidad + `/${datos.id}`;
      delet(url, datos);
      formu.reset();
      break;
    case "Registrar":
        url = URL + entidad;
        verificarGet(url,datos).then( (dt) => {
          console.log(dt)
          if (dt != true) {
            const postSucces = post(url,datos);

            if (postSucces) {
              window.location.href = "/index.html";
            } else {
              alert("Hubo un error al realizar el registro")
            }
          } else {
            alert("Ingrese los datos nuevamente");
          }
        })
        break
    case "Ingresar":
      url = URL + entidad;
        verificarUserYPass(url,datos).then( (dt) => {
          console.log(dt)
          if (dt == true) {
            
            window.location.href = "/index.html";
          } else {
            alert("Ingrese los datos nuevamente");
          }
        })
        break
  }
}