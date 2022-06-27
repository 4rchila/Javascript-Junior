class Celular{
    constructor(color, peso, rsp, rsc, ram){
    this.color = color;
    this.peso = peso;
    this.rsp = rsp;
    this.rsc = rsc;
    this.ram = ram;
    this.encendido = true;
    }
 
    Telefonoencendido(){
        if (this.encendido == true){
         alert('el telefono esta encendido');
         this.encendido = false
        }else{
          ('el telefono se apago');
          this.encendido = true
        }
    }
    reinicio (){
        if(this.encendido == true){
          alert('reiniciando telefono')
        }else{
          alert('telefono apagadoS')
        }
    }
    tomarFoto(){
        alert(`fotografia tomada en: ${this.rsc}`)
    }
    grabarVideos(){
        alert(`video grabado en resolucion: ${this.rsc}`)
    }
    mobilInfo(){
       return `color: <b>${this.color} </b><br>
               peso : <b>${this.peso}</b><br> 
               resolucion pantalla: <b>${this.rsp}</b><br>
               resolucion de camara: <b>${this.rsc}</b><br>
               ram: <b>${this.ram}</b></br>
        `
    }

}
class altaGama extends Celular{
  constructor(color, peso, rsp, rsc, ram,rsce,){
    super(color, peso, rsp, rsc, ram)
     this.rsce = rsce
     this.iniciar = true
  }
  grabarvidelento(){
    if(this.iniciar == true){
     alert(`se inicio a grabar un vide en camara lenta con una resolucion de ${this.rsce}`)
    }else{
      alert('no a iniciado')
    }
  }
  reconocimientoFacial(){
  alert('se a iniciado reconocimiento facial')
}
gamainfo(){
  return this.mobilInfo() + `camara trasera: <b> ${this.rsce} </b> <br>`
}
}


const celular = new altaGama('Negro','150gr','1080','FULL HD','6GB','64pixeles');
const celular2 = new altaGama('Azul','170gr','1200','HD','8GB','64pixeles');


document.write(`
${celular.gamainfo()} <br>
${celular2.gamainfo()}
`);

//  const telefono1 = new Celular('Negro','150gr','HD','1080','4GB');
//  const telefono2 = new Celular('Rojo','110gr','Full HD','1505','4GB');
//  const telefono3 = new Celular('Azul','200gr','Full HD', '1200','6GB');

//  document.write(`
//   ${telefono1.mobilInfo()} <br>
//   ${telefono2.mobilInfo()} <br>
//   ${telefono3.mobilInfo()} <br>
//  `);


















//aprendizaje basado en el pensamiento