const nombres = ['cristian','gaston','damian','damian','cristian','juan', 'juan','gaston','diego','richard','richard','santiago','luca','lucas','diego','diego','luca','luca','luca','damian','eric','eric'];

const contarNombres = (array) => {

    return array.reduce( (contador, nombre) => {
        contador[nombre] = (contador[nombre] || 0) + 1;
        //console.log(contador, nombre);

        return contador
    })

}

let persona = {
    nombre : "Ignacio",
    apellido : "Marquez",
    edad : 20,
    comision : 12,
    cursando : false
}

/* for (const propiedad in persona) {
    console.log(propiedad, persona[propiedad]);
} */

console.log(contarNombres(nombres));