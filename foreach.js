const tareas = require('./tareas.json');

for (let i = 0; i < tareas.length; i++) {
    
    console.log(`(${i + 1}) ${tareas[i].titulo}`);
    
}

console.log("**********************************");

tareas.forEach((tarea,i) => {
    
    console.log(`(${i + 1}) ${tarea.titulo}`);

});