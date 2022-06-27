let cantidad = prompt('¿Cuantos alumnos son?');
let alumnostotal = [];

for (let i = 0; i < cantidad; i++){
    alumnostotal[i] = [prompt('nombre del alumno ' +( i + 1)),0]

}

const asistencia = (nombre,p) =>{
  let presencia = prompt(nombre)
  if (presencia == "p" || presencia == "P"){
    alumnostotal[p][1]++;
  }
}

for (let i = 0;i < 30 ; i++){
 for(alumno in alumnostotal){
asistencia (alumnostotal[alumno][0],alumno)
 }
}

for (alumno in alumnostotal){
    let resultado = `${alumnostotal[alumno][0]}:<br>
  ________Asistencias:${(alumnostotal[alumno][1])} </br>
  ________ausencias: ${30 - parseInt(alumnostotal[alumno][1])}
  `
  if (30 - alumnostotal[alumno][1] > 18){
    resultado+= 'reprobado por inacistencia'
  }else{
    resultado+="<br><br>"
  }document.write(resultado)
}
