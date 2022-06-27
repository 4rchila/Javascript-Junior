class App{
    constructor(descargas,puntuacion,peso){
     this.descargas = descargas
     this.puntuacion = puntuacion
     this.peso = peso
     this.instalar = false;
     this.iniciar = false;
    }
    abrir(){
        if(this.instalar == false){
        alert('la app se a instalado correctamente');
        this.instalar = true
        }
    }
   desintalar(){
    if(this.instalar == true){
      alert('la aplicacion se a desistalado correctamente')
      this.instalar == false
    }
   }
   iniciarapp(){
    if(this.iniciar == false && this.instalar == true){
        alert('app iniciando')
        this.iniciar = true 
    }
   }
   cerrar(){
    if(this.iniciar == true && this.instalar == true){
        alert('app cerrada correctamente')
        this.iniciar == false
    }
   }
   appInfo (){
     return `
     Descargas: <b>${this.descargas}</b><br>
     Peso: <b>${this.peso}</b><br>
     Puntuacion: <b>${this.puntuacion}</b><br>
     `
   }
}
 
const app = new App('+1M','5 estrellas','1GB');
const app2 = new App('7M','4.4 estrellas','2GB');
const app3 = new App('575K','5 estrellas','3GB');

// document.write(
// `
// ${app.appInfo()}<br><br>
// ${app2.appInfo()}<br><br>
// ${app3.appInfo()}
// `
// );
 
 app.abrir();
 app.iniciarapp()
 app.cerrar();
 app.desintalar();
 

