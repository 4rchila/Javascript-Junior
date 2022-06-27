
let free = false

const validar = (time) =>{
let edad = prompt('Que edad tines');
if (edad > 18){
 if(time >= 2 && time < 7 && free == false){
   alert(`son las ${time}.00Hrs , por lo que puedes pasar gratis`)
   free = true
 }else{
  alert(`son las ${time}.00Hrs, por lo que puedes pasar pero debes pagar tu entrada `)
 }
}else{
 alert('Eres menor de edad por lo que no puedes ingresar')
}
};

validar(23);
validar(8);
validar(22);
validar(12);
validar(1);
validar(2);
validar(3)