let subjects = {
    physical:[90,6,3,'phisical'],
    programming:[96,8,4,'programming'],
    mathematics:[76,9,5,'mathematics'],
    quimica:[89,8,4,'quimica'],
    logic:[95,8,6,'logic'],
    algebra:[100,10,4,'algebra']
}

const asistencia = () =>{
for(subject in subjects){
let assitence = subjects[subject][0];
let promedio = subjects[subject][1]
let trabajos = subjects[subject][2]
console.log(subjects[subject][3]);
   
//asistencias
if(assitence >= 90){
   console.log('%c Asistencias en orden','color:green')
}else{
   console.log('%c Falta de asitencias','color:red')
}
//promedio
if(promedio >= 7){
    console.log('%c Promedio sobre lo estipulado', 'color:green')
}else{
    console.log('%c Bajo promedio', 'color:red')
}
//trabajos
if(trabajos >= 3 ){
    console.log('%c Mayoria de trabajos entregados', 'color:green')
}else{
    console.log('% Trabajos incompletos', 'color:red')
}
}
}
asistencia()