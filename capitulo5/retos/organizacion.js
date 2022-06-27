let casa = '30 minutos de labores del hogar '
let trabajo = '240 minutos '
let tp = '100 minutos hacer trabajos practicos'
let descanso = '10 minutoss de descaso'
let estudio = '100 minutos de estudio'

console.log('TAREAS')
for(let i = 0; i < 15; i++){
    if(i == 0){
        console.groupCollapsed('semana 1')
    } 
console.group('dia ' + i)
console.log(estudio)
console.log(casa)
console.log(tp)
console.log(descanso)
console.log(trabajo)
console.groupEnd()
if(i == 7){
    console.groupEnd()
  console.groupCollapsed('semana 2')
}
}
console.groupEnd()
console.groupEnd()