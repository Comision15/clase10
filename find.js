const tareas = require("./tareas.json");

const filtrarPorEstadoConFilter = (estado) => {

  let tareasFiltradas = tareas.filter((tarea) => tarea.estado === estado);
  return tareasFiltradas;

};

const filtrarPorEstadoConFind = (estado) => {

    let resuladoDeLaBusqueda = tareas.find((tarea) => tarea.estado === estado);
    return resuladoDeLaBusqueda;
  
  };

console.log(filtrarPorEstadoConFilter("pendiente"));
console.log("**************************");
console.log(filtrarPorEstadoConFind("pendiente"));
console.log("**************************");
console.log(filtrarPorEstadoConFilter("terminado"));
console.log("**************************");
console.log(filtrarPorEstadoConFind("terminado"));
console.log("**************************");
console.log(filtrarPorEstadoConFilter("abandonado"));
console.log("**************************");
console.log(filtrarPorEstadoConFind("abandonado"));
console.log("**************************");