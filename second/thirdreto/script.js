const sumar = (num1,num2) =>{
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1,num2) =>{
    return parseInt(num1) - parseInt(num2);
}
const Multiplicar = (num1,num2) =>{
    return parseInt(num1) * parseInt(num2);
}
const division = (num1,num2) =>{
    return parseInt(num1) / parseInt(num2);
}
alert('Que operacion desea realizar');

let opreacion = prompt('1: Suma , 2:Resta, 3:Multiplicacion, 4:Division.')
 let numero1 = prompt('primer numero para la operacion ');
 let numero2 = prompt('segundo numero de la operacion');
 let result;

switch( true || false){
    case opreacion == 1:
        result = sumar(numero1,numero2);
        document.write(result)
     break;
    case opreacion == 2:
        result = restar(numero1,numero2)
        document.write(result)
     break;
    case opreacion == 3:
        result = Multiplicar(numero1,numero2) 
        document.write(result)
     break;
    case opreacion == 4:
        result =  division(numero1,numero2)
        document.write(result)
     break;
     default:
        alert('los resultados no son concretos')
}