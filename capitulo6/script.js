//Nodo
//el nodo pueden ser cualquier etiqueta como el <body> o cual quier otra etiqueta de html como lo pueden ser las listas

//Document: el nodo es el nodo raiz el nodo mas grande
//element nodos que se definen por html
//text: el texto dentro de un nodo element
//Attribute: los atributos de las etiquetas
//commentarios

//metodos de seleccion de elementos
//todo lo que me permita selecconar los elementos de mi documento

//document.getElementById() selecciona un elemento por ID
//document.getElementsByTagName() selecciona todos los elementos 
//queryselecto() devuelve el primer elemento que coincida  con el grupo expecificando de selectores
// let parrafo = document.querySelector('.parrafo')


// //metodos para definir, obtener y eliminar valores de atributos

// const rangoEtario = document.querySelector('.rangoEtario')

// let atributevalue = rangoEtario.getAttribute('type')
// rangoEtario.setAttribute("type","text")//set tambien crea atributos




//atibutos globales

//class atributos que contienen todos los elementos

// const title = document.querySelector('.title-container')
// //contentEditable nos deja editar el texto
// //dir nos indica la direccion del texto

// title.setAttribute('dir','rtl')


//atributos de los inputs

//className
//value que esta dentro del input
//accept lo que va a aseptar, que archivos va a haceptar
//form nos permite ejecuatar un input dento de un form
//minlength minima cantidad de caracteres de in input
//placeholder nos mustra dentro del input
//required nos dice si es requerido o no
// const input = document.querySelector('.codigo')

// document.write(input.form)



//style.code
//el atributo style nos permite modificar algo de estilos en javascript

// const title = document.querySelector('.title-container')

// title.style.padding = '30px'
// title.style.backgroundColor = 'red'
// title.style.textAlign = 'center'


//Metodos de classlist
//es particularidad de las clases de los objetos

// const title = document.querySelector('.title')

//metodo add  añadir una clase
//remove nos remueve la clase
//item nos da el indice especificado
//contains verifica si tiene alguna clase y nos devovera un boolean
//toggle en caso de que la tenga la saca en caso de no tener la agrega
//renplace remplaza una clase por otra
// let valor = title.classList.item(1)

// document.write(valor)


//obtencion y modificacion de elementos 
//textContent nos muestra lo que se encuentr oculto en algun texto
//innerHtml nos muetra el texto junto con las etiquetaas que llasen por fuera de ella en un rango menor 
//outHtml nos muesta el texto conjunto con todo lo que lo conforme como lo podria decir la etiqueta de la que probenga
// const title = document.querySelector('.title')

// let resultado = title.innerHTML

// document.write(resultado)

//creacion de elementos//
//createElemento nos crea un elemento etiguetas de todo tipo
//creatext nos crea un nodo de texto 
//si se quieren crear muchos elementos 
//creatdocumentfrackment nos ayuda a crear un elemento agregando evitando que este elemento se tenga que redibujar
// const container = document.querySelector('.contenedor')

// const item = document.createElement('LI')//todo en mayuscula

// const textoitem = document.createTextNode('este es el texto de la etiqueta')

// console.log(textoitem)


//metodos aplicados a hijos 

//appendChild() nos inserta un elemento dentro de otro elemento 
//con firstElementChild nosotros obtenemos el primer elemento del contenedor
// con lastElemenchild nosotro obtenemos el ultimo elemento del contenedor
//childNodes nos deuelve todo los hijos de nuestro contenedor // esto nos devuelve los nodos en una lista no en un array// recurda el texto tambien es un nodo/este es un objeto

//childrean nos devuelve las etiquetas html no nos devuelve el texto
//la coleccion html no se puede recorer con un forEach esto sise podra con un for in
//in de indice y of de elementos 




//metodos aplicables de los hijos 
//remplace child nos permite remplazar el texto de un contenedor de forma rapida conjunto a ello nos remplaza al hijo la etiqueta 
//romeve child nos quita al hijo creado
//haschildnodes nos dira si un contenedor tiene hijos o no tiene hijos

const contenedor = document.querySelector('.contenedor')

const h2_nuevo = document.createElement('H2')
h2_nuevo.innerHTML = 'titulo'

h2_antiguo = document.querySelector('.title-container')

contenedor.replaceChild(h2_nuevo,h2_antiguo)

//propiete for parents
//paretNode busca un nodo padre lo que podria no ser una etiqueta html como lo es con el texto
//parentElement nos busca un padre que puede rondar entre lo que puede ser una etiqueta html




//propiedad de sibiling
//los elementos hermanos son los que se encuentran en la misma linea y rango
//previusElementSibiling
//closet nos busca al contenedor mas sercano que llase en este elemto 