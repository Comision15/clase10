const tareas = require("./tareas.json");

const modificarEstado = (estado, nuevoEstado) => {
    
    let tareasModificadas = [];

    tareas.forEach(tarea => {
        if(tarea.estado === estado){
            tarea.estado = nuevoEstado;
            tareasModificadas.push(tarea)
        }else{
            tareasModificadas.push(tarea)
        }
    });

    return tareasModificadas

}

const modificarEstado2 = (estado, nuevoEstado) => {
    
const tareasModificadas = tareas.map(tarea => {
        if(tarea.estado === estado){
            tarea.estado = nuevoEstado;
            return tarea
        }
            return tarea
    });

    return tareasModificadas
}

console.log(modificarEstado('en proceso','terminado'));
console.log("*****************************************")
console.log(modificarEstado2('en proceso','terminado'))