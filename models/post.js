// Agrega información pero no necesita la información anterior
export function post(url, objeto) {
    return new Promise((resolve, reject) => {
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charser=UTF-8'",
          },
          body: JSON.stringify(objeto),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            location.href = "./../index.html"
            resolve(data); // Resuelve la promesa con los datos si la operación fue exitosa
          })
          .catch((error) => {
            console.error(error);
            reject(error); // Rechaza la promesa con el error si hubo un problema
          });
  }
)}