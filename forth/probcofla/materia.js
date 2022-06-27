const obtenerInformacion = (materia) =>{
materias = {
  fisica: ['juanfran','German','hyun','gabriel','O,she','iban'],
  programacion: ['dalto','cofla','gabriel','German','kristen'],
  logica: ['rodrigez','cofla','hyun','German','chloe'],
  ingles: ['Ricardo','carey','hyun','chloe','iban'],
  quimica: ['gutierrez','cofla','olaya','ryo','O,she']
}
if (materias[materia] != undefined){
 return [materias[materia],materia,materias] 
} else{
   return materias
}
}


const mostrarInformacion = (materia) =>{ 
let informacion = obtenerInformacion(materia)

if(informacion != false){
  let profesor = informacion[0][0]
  let alumnos = informacion[0]
  alumnos.shift()
  document.write(`el profesor designado es:<b>${profesor}</b><br>los alumnos son:<b>${alumnos}</b> <br><br>`)
}}

const mostraralumno = (alumno) =>{
  let informacion = obtenerInformacion()
  let clasesPresentes = []
  let cantidadtotal = 0;
    for(info in informacion){
     if(informacion[info].includes(alumno)){
       cantidadtotal++;
       clasesPresentes.push('' + info)
     }

    }
    return `<b>${alumno}</b> esta en <b>${cantidadtotal}</b> clases , estas clases son:<b>${clasesPresentes}</b>`
}

mostrarInformacion('fisica')
mostrarInformacion('programacion')
mostrarInformacion('logica')
mostrarInformacion('ingles')
mostrarInformacion('quimica')

document.write(mostraralumno('cofla'))