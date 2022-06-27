
//funciones de registro
console.assert(5 > 3);
console.clear();
console.error('esto es un erro')
console.log('muy bueno el trabajo')//mensaje de depuracion
console.info('muy bueno el trabajo')//mensaje informativo 
console.table([1,2,3,4,4,5,6,7])//este debe ser un array o um objet
console.warn('todo bien pero ten cuidado')
console.dir([1,2,3,4,5,6,7])

//funciones de conteo

console.count()//cuantas veces lo utilizamos
//countReset nos recetea el conteo de la funcion que estemos utilizando

//funciones de agrupacion
console.group()// nombre para eliminar console.end
console.groupCollapsed()//nos sale cerrado
console.End()
//fuciones de temporizacion
console.time()//inicia un contador de tiempo cuanto tiempo des de que se inicio
console.timeEnd()
console.log('%hello world','color:red;')