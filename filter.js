const tareas = require("./tareas.json");

const filtrarPorEstado = (estado) => {

  let tareasFiltradas = [];
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].estado === estado) {
      tareasFiltradas.push(tareas[i]);
    }
  }
  return tareasFiltradas;

};


const filtrarPorEstado2 = (estado) => {

  let tareasFiltradas = tareas.filter((tarea) => tarea.estado === estado);

  return tareasFiltradas;

};

console.log(filtrarPorEstado2("pendiente"));
console.log("**************************");
console.log(filtrarPorEstado2("terminado"));
console.log("**************************");
console.log(filtrarPorEstado2("abandonado"));
console.log("**************************");
