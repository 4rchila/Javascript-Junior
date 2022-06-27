let frutas = ['banana','pera','mango','piña','manzanas'];

document.write(frutas[4]);

//todas las posiciones de un array ya se encuentran declaradas
//pero no definidas

//array asociativo este es un array que tiene un valor asociado cuando llamamos a un elemento no nos mostrara
//el elemento nos mostrara el dato que este tiene asociado

let autos = {
    name: "Model X",
    marca: 'Tesla',
    age: 2016,
    provedor: 'Tesla'
}; 

let nombre = autos['name'];
let marca = autos['marca'];
let age = autos['age'];
let provedor = autos['provedor'];

let frase = `tengo un ${nombre}\n
es marca ${marca} \
este gran auto salio en el año ${age}\n
y su provedor es ${provedor}
`
document.write(frase);

// las comillas `` francesas son especiales porque nos dejan ingrsar datos poco comunes

//bucles







const multiplicacion = () => {
    let numero = 2;
for(let i = 1;i<11;i++){
  let resultado = numero * i
  document.write(resultado + '<br>')
}
}
multiplicacion();

//do while

let numero = 0;

// do {
//   numero ++

//   document.write(numero + '<br>')

// }while(numero < 10)
//le decimos cuantas vueltas dar

//break

while(numero < 100){
  numero++;
  document.write(numero)
  if(numero === 10){
    break;
  }
}

//for 
//bucle determinados nosotros le decimos cuantas vueltas dar
//continue nos sirve para saltearnos un numero

for (let i = 1; i < 11; i++) {
  if (i === 7){
    continue;
   }
  let number = 1;
  const element = number * i;
  document.write(element + '<br>')
}
document.write('<br>')
//for in

let animales = ['lobo','tigre','leon','gorilla',]

for (animal in animales){
document.write(animales[animal] + '<br>')
}
//para que no muestre el valor debemos entrar al array
//cada vuelta del bucle sera igual al segundo valor
document.write('<br>')
//for in nos mostrara la posicion en la que se encuentra el valor

for (animal of animales){
  document.write(animal + '<br>')
}
//for of nos mostrara el valor no su 
document.write('<br>')
//label
//asociar casi cualquier bucle a un nombre

array1 = ['josef','bismark','anotiny'];
array2 = ['irene','josefina','leticia',array1,'german'];


//label recuerda es : no ;
forbreak:
for (let array in array2){
  if (array == 3){
    for(let array of array1){
     document.write(array + '<br>')
     break forbreak;
    }
  }else{
    document.write(array2[array] + '<br>')
  }
}


document.write('<br>');
document.write('<br>');
//practica de un label

domesticos = ['perro','serpiente','pez'];
animales = ['cocodrilo','puma','alce',domesticos,'puerpuespin'];


forstop:
for(let animal in animales){
   if (animal == 3){
    for(let animal of domesticos){
      continue forstop;
        document.write(animal + '<br>');
    }
   }else {
    document.write(animales[animal] + '<br>');
   }
}

// funciones
//porcion de codigo
//cada funcion con su propia caracteristica
// una funcion una cosa es lo que retorna y otra es lo que hace

function saludar(){
let respuesta = prompt('como te encuentaras')
if(respuesta == 'bien'){
  alert('Que bien')
}else{
  alert('Que pena')
}
}
saludar();

document.write('<br>')

function multiplication(num1, num2){
 let res = num1 * num2
 document.write(res)
}

multiplication(255,255);

document.write('<br>')

function hello(nombre){
let frase = `Hola ${nombre} como te encuntras`
document.write(frase)
}
hello('German');

//arrow fuction
//si solamente utilizamos una linea de codigo no hace falta utilizar ()
//si solamente utilizamos una expresino no hace falta que utilizemos las {} const saludo = nombre => let frase = `hola nombre como te encuentras` en esta el return es automatico


const saludo = (nombre) => {
  let frase = `Hola ${nombre} como te encuentras el dia de hoy`
}




