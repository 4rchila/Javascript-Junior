
let montocofla = prompt('cuanto dinero tienes Cofla');
let montojuan = prompt('cuanto dinero tienes Juan');
let montorobert = prompt('cuanto dinero tienes Robert');

let dinerocofla = parseInt(montocofla)
let dinerojuan = parseInt(montojuan)
let dinerorobert = parseInt(montorobert)

//dinero de cofla

switch(true || false){
    case montocofla >= 0.6 && montocofla < 1:
        document.write('puedes comprar el helado de vainilla o el de limon')
        document.write('el dinero de sencillo es de ' + (dinerocofla - 0.6).toFixed(2))

        break;

    case montocofla >= 1 && montocofla < 1.9:
        document.write('puedes comprar el helado de fresa y el de framuse ')
        alert('el dinero de sencillo es de ' + (dinerocofla - 1).toFixed(2))

        break;

    case montocofla >= 1.9 && montocofla < 2.9:
        document.write('puedes comprar el helado de chocolate')
        alert('el dinero de sencillo es de ' + (dinerocofla - 1.9).toFixed(2))

        break;

    case montocofla >= 2.9:
        document.write('puedes comprar el helado de cono de waffle con doble chocolate')
        alert('el dinero de sencillo es de ' + (dinerocofla - 2.9).toFixed(2))

        break;

    default:
        document.write('lo pero el monto de dinero no es suficiente para comprar algun helado ')
        break;
        
} 
//dinero de juan

switch(true || false){
    case montojuan >= 0.6 && montojuan < 1:
        document.write('puedes comprar el helado de vainilla o el de limon')

        break;

    case montojuan >= 1 && montojuan < 1.9:
        document.write('puedes comprar el helado de fresa y el de framuse')

        break;

    case montojuan >= 1.9 && montojuan < 2.9:
        document.write('puedes comprar el helado de chocolate')

        break;

    case montojuan >= 2.9:
        document.write('puedes comprar el helado de cono de waffle con doble chocolate')

        break;

    default:
        document.write('lo sentimos pero el monto de dinero no es suficiente para comprar algun helado')
        break;
        
} 

//dinero de robert

switch(true || false){
    case montorobert >= 0.6 && montorobert < 1:
        document.write('puedes comprar el helado de vainilla o el de limon')

        break;

    case montorobert >= 1 && montorobert < 1.9:
        document.write('puedes comprar el helado de fresa y el de framuse')

        break;

    case montorobert >= 1.9 && montorobert < 2.9:
        document.write('puedes comprar el helado de chocolate')

        break;

    case montorobert >= 2.9:
        document.write('puedes comprar el helado de cono de waffle con doble chocolate')

        break;

    default:
        document.write('lo sentimos pero el monto de dinero no es suficiente para comprar algun helado')
        break;
        
} ;
