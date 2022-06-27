//metodos
let cadena = 'abc'
//concat añade concatenar metodo
let resultado = cadena.repeat(10)
//string es un objeto que crea javascript en automatico
//let cadena = new String('esta es la forma como lo crea jscript')
document.write(resultado)

//starwith
//devuelve true or false si empieza con ello si cadena uno empieza con cadena 2
// y endwith verifica que el finalizar sea el mismo

//includes si una cadena se encuentra dentro de otra

//indexOF nos devuleve la pocicion de la primera letra de la cadena que busquemos dentro de otra
//si este devuelve menos uno significa que este no existe

//lasindexof este nos devueve la posicion del ultimo cuando hay muchas cadenas

//padstar padend este se encarga llenar la cadena al principio con lo que se necesita
//rellena con la cantidad de caracteres que le compartimos
//padend lo hace al final
//repeat nos repite lo que tengamos en la cadena cada que este sea necesario asta llenar el numero que le pasemos

document.write('<br> <br>')

//  TRASFORMAR CADENAS


// let cadenaprub = 'hola, como, estas'
// let candea2 = ''

// result = cadenaprub.split(',')

// document.write(result[0])
//este se dividira cada que encuetre un separadaro ya sea un espacio o un punto
//split este nos comvierte la cadena de texto en un array si le colocamos una parte del array este la eliminara y seprara el resto del mismo por comas



//substring
//nos devuelvelo que seleccionamos desde donde queremos que comiense


// let cadenaprub ='ABCDEFGH'
// let candea2 = ''

// result = cadenaprub.substring(0,3)

// document.write(result)

//tolowercase
//combierta nuestra cadena a minuscula
//toUpperCase no pasa el texto de pequeño a grande 
//toStirng nos comberte otro valor primitivo a un string
// let cadenaprub = 'es el peso que conlleva la grandeza recordad que la cima es solo el lugar de los elegidos es vustro lugar si haci lo desidis'
// let candea2 = ''

// result = cadenaprub.toUpperCase()

// document.write(result)

//trim,trimend los espacios del final, y trim start nos elimina del principio
//nos remueve los espacios dento de una cadena de texto ,estos los espacios extenros
//valueOf nos retorna el valor primitivo de un array



// metodos de array trasformadores
// el metodo pop elimina el ultimo elemento de la cadena  nos muestra cual elimina
// el metodo shift nos elimina lo que se encuentre en la primera pocicion del arreglo
// push agrega un elemento despues de todo el array
// reverse invierte el orden de los elementos del array
// unshit agrega al principio uno o mas elementos y devuelve la longitud del mismo si a este se le pasan dos parametros el primero sera para parar en una pocicion
//sort nos ordena los valores del arreglo de manera lexicografico
//SPLICE cambia o elimina los elementos de un array cambiandolos por otros, se coloca donde arrancara y cuantos elemetos eliminara, el tercer parametron sera para agregar los elementos
// let salamambiches = ['hyun','haocheng','daheno','ayanokoji','johan','Urama']
// let candea2 = ''

// result = salamambiches.splice(2,1,"kevin")

// document.write(salamambiches)


//metodos accesores
//nos crea un nuevo array
//join nos combierte en una cadena de texto con la diferencia con la que podemos utilizar el separaor que queraos
//slice devuelve una parte de un array dentro de un nuevo array se selecciona un caracter y uno final menos uno nos seleccionara todos
// let obras = ['silent war','secret class','clase privada','beaterful new world','cicles','teacher punishment']
// let candea2 = ''

// let result = obras.slice(0,-1)

// document.write(result)


//metodos de repeticion
let obras = ['silent war','secret class','clase privada','beaterful new world','cicles','teacher punishment']

obras.filter(numero => document.write(numero + '<br>')) 

document.write(result)

//filter este es como un bucle,recorren el array, en filter nos devuelve los elementos que cumplen con una condicino nos

