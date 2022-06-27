let text = 'this is javascript';

let pregunta = prompt('whats your name')

const string = 'bienvenido '

document.write(string + pregunta)

let numero = 25;

numero %= 25;

console.log(numero);

// el operador  % es interpretado como el reso de una division


let numero2 = 25;

numero2 **= 25;

console.log(numero2);

// el operador de ** es referente a un exponencial


let numero3 = 25;

numero3--

let resultado = numero3;

console.log(resultado);

//

let saludo = 5;
let question = 10;

const result = "" + saludo.concat(question);

console.log(result)

//si colocamos '' de string antes de numeros y un operador + estos se concatenaran
//concat solo nos funciona cuando tenemos string porque son metodos de concatenacion




let frase1 = 'javascript y python ';

let frase2 = `estos lenguajes ${frase1} son sorprendente`

console.log(frase2);

// no se puede poner comillas del mismo signo dentro de las mismas commillas ya que las tomara como commillas de cierre

// const strin2 = "esto es un " string " muy bonito"

//operadores logicos

let number = 23;
let number2 = '23';

const result0 = number == number2;
const result01 = number != number2;
const result02 = number === number2;
const result03 = number !== number2;
const result04 = number != number2
console.log(result04);

let valorone = true;
let valortwo = true;

let resultadoo = valorone && valortwo // si las dos se cumplen es verdadero
let resultoo = valorone || valortwo // si una de las dos se cumple es verdadero
let resultooo = !valorone// volvemelo al contrario

// se pueden mesclar operadores
  num1 = 12;
  num2 = 24;
  num3 = 25;
 num4 = 92;
 num5 = 91;

 let op = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);

 console.log(op);

 //camel case
// nos dice que todo va con mayucula al ser la dos la priera va con minuscula decimeAlgoPorFavor
parseInt();


//condicionales
// sentencia de validar algo

const ifprueba = () =>{
    if(0 == '0'){
    console.log('hello!!!!!')
}else{
  console.log('no hello')
}
}
ifprueba();

//cuando es doble if se ejecutan ambos














