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
const input = document.querySelector('.codigo')

document.write(input.form)

