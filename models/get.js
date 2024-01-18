// busca el contenido ingresado
//import { llenarFormulario, llenarSelect } from "../views/login.js";

export function get(url, formu) {
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8'",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // if (formu !== null) llenarFormulario(formu, data);
        return data;
      })
      .catch((error) => {
        console.error(error);
        return null;
      });
  }

export async function verificarGet(url,datos) {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
            "Content-type": "application/json; charset=UTF-8",
            },
        });
        let dt = await response.json();
        console.log(datos.user)
        console.log(dt)
        const usuarioExistente = dt.find(usu => usu.user === datos.user);
        if (usuarioExistente) {
            alert("El usuario ya existe");
            return true;
        } 
        alert("Registro exitoso");
        localStorage.setItem(`${datos.user}`, JSON.stringify(datos.user));
        return false;
            
        
        // if (datos.user == dt[0].user) {
        //     alert("El usuario ya existe")
        //     return true

        // } 
        // alert ("Registro exitoso")
        // return false
        } catch (error) {
            console.error("Error:", error);
            return null
        }
    }

export async function verificarUserYPass(url,datos) {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
            "Content-type": "application/json; charset=UTF-8",
            },
        });
        let dt = await response.json();
        //console.log(datos.user)
        //console.log(dt)
        const usuarioExistente = dt.find(usu => usu.user === datos.user && usu.password === datos.password);
        if (usuarioExistente) {
            alert("Bienvenido");
            localStorage.setItem(`${datos.user}`, JSON.stringify(datos.user));
            return true;
        } 
        alert("Datos erroneos, ingréselos de nuevo");
        return false;
            
        } catch (error) {
            console.error("Error:", error);
            return null
        }
    }
