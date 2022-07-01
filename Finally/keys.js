 const container = document.querySelector('.div-container')
 document.querySelector('.send-button').value = 'COMPRAR'
 function crearLlave(nombre, modelo, precio){
    img = "<img src='./26ed4bf470ad0a2fa80c1b6258e9f5a1-icono-de-llave-basica.png' class = 'imagenKey'>"
     nombre = `<h2>${nombre}</h2>`
     modelo = `<h3>${modelo}</h3>`
     precio = `<p>Precio: <b>${precio}</b></p>`
     return [img,nombre, modelo, precio]
}

const changeHidden = (number)=>{
    document.querySelector('keyH').value = number
}
let documentFragment = document.createDocumentFragment() 

for (let i = 1;i <= 20; i++){
    let modelRandom = Math.round(Math.random()*1000)
    let preciorandom = Math.round(Math.random()*10+30)
    let llave = crearLlave(`LLave ${i}`,`Modelo: ${modelRandom}`, preciorandom)
    let div = document.createElement('DIV')
    div.addEventListener('click',() =>{changeHidden(modelRandom)})
    div.tabIndex = i
div.classList.add(`item-${i}`,'contenin-item')
div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3]
documentFragment.appendChild(div)
}

container.appendChild(documentFragment)




// class Llave{
//     constructor(nombre, modelo, precio){
//         this.imagen = new Image()
//         this.nombre = nombre
//         this.modelo = modelo
//         this.precio = precio
//         this.info


//      this.imagen.src = imagenes[this.nombre]

//     }
//     informacion(){
//         document.body.appendChild(this.imagen)
//         document.write('<br>')
//     document.write(`
//     <b>${this.nombre}<b>
//       Modelo:<b>${this.modelo}</b><br>
//     Precio:<b>${this.precio}</b><hr>
//     `)
//     }
// }

// let imagenes = []
// imagenes['llave'] = './26ed4bf470ad0a2fa80c1b6258e9f5a1-icono-de-llave-basica.png'

// let coleccion = [];
// coleccion.push(new Llave('llave1', 'X',38))