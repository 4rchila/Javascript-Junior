class Calculadora{
    constructor(){
}
 sumar(num1,num2){
    return parseInt(num1) + parseInt(num2);
}
 restar (num1,num2){
    return parseInt(num1) - parseInt(num2);
}
 Multiplicar(num1,num2){
    return parseInt(num1) * parseInt(num2);
}
 division(num1,num2){
    return parseInt(num1) / parseInt(num2);
}
 potencia(num,exp){
    return parseInt(num**exp)
 }
 raizCuadrada(num){
    return parseInt(Math.sqrt(num))
 }
 raizCubica(num){
    return parseInt(Math.cbrt(num))
 }
}   

const calculadora = new Calculadora()

alert('Que operacion desea realizar');

let opreacion = prompt('1: Suma , 2:Resta, 3:Multiplicacion, 4:Division, 5:Potenciacion, 6:raiz cuadra, 7:raiz cubica')
 let numero1 = prompt('primer numero para la operacion ');
 let numero2 = prompt('segundo numero de la operacion');
 let result;

switch( true || false){
    case opreacion == 1:
        result = calculadora.sumar(numero1,numero2);
        document.write(result)
     break;
    case opreacion == 2:
        result = calculadora.restar(numero1,numero2)
        document.write(result)
     break;
    case opreacion == 3:
        result = calculadora.Multiplicar(numero1,numero2) 
        document.write(result)
     break;
    case opreacion == 4:
        result =  calculadora.division(numero1,numero2)
        document.write(result)
     break;
     case opreacion == 5:
        result = calculadora.potencia(numero1,numero2)
        document.write(result)
     break;   
     case opreacion == 6:
        result = calculadora.raizCuadrada(numero1)
        document.write(result)
    break;
    case opreacion == 7:
       result = calculadora.raizCubica(numero1)
       document.write(result)
       break;
     default:
        alert('los resultados no son concretos')
}