const ganancias = [200,100,300,150,250,300];

let resultado = 0;
ganancias.forEach(ganancia => {
    resultado += ganancia
});


let resultado2 = ganancias.reduce((acum,num) => {
    //console.log(acum, num)
    return acum + num
})

console.log(resultado);
console.log(resultado2);