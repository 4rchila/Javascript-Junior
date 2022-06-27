class Animal {
    constructor(color,especie,edad){
        //this sera el objeto que yo creare
        //cuando le digo que tendra una propiedad
this.especie = especie;
this.edad = edad;
this.color = color;
this.info = `soy un ${this.especie} tengo ${this.edad} años y soy de color ${this.color}`
    }// no podemos utilizar funciones flecha
    //new nos sirve para instanciar una clase
    //metodo acciones que podemos hacer
    verInformacion() {
        document.write(this.info + '<br>')
    }
}



    //tomara todo lo que hace el objeto pero le agregara cosas herencia
    class Perro extends Animal{
        constructor(especie,edad,color,raza){
            super(especie,edad,color)
            this.raza = null;
            
        
        }
   set modificarRaza(newName){
        this.raza = newName;
    }
    get getRaza (){
        return this. raza
    }
    //    static ladra(){
    //         alert('WAW') 
    //      }
    }

 const perro = new Perro('marron','perro',5,'doberman');
const gato = new Animal('negro','gato',2);
const serpiente = new Animal('verde','serpiente',4)


perro.modificarRaza = 'pedro';
document.write(perro.raza)
gato.ladra();
serpiente.verInformacion();
//para acceder a propiedades utilizamos un punto

//document.write(perro.informacion)

//caracteristicas del POO

//abstraccion tenemos un auto omito todo, pero tu sabes que es un auto//absatraccion reducimos lo mas que podamos el onjeto

//modularidad es resolver un problema grande separandolos por partes , resolver por pedacitos 
//separamos 

//encapsulamiento hacer que todos los datos sean privados que no se pueda acceder tan facil

//polimorfismo ver como un objeto se comporata de manera distinta a un metodo por sus propiedades

//ejemplo el caminar de un perro y el de una tortuga en una clase llamada animal


//un metodo estatico es el que no necesita el la clase se defina para poder ser creado

//los geters son para obtener un valor 
//los setters son para modificarlo o definirlo
//los geters y los seters funcionan como propiedades
