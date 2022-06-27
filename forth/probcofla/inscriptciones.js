let materias = {
    fisica: ['juanfran','German','hyun','gabriel','O,she','iban'],
    programacion: ['dalto','cofla','gabriel','German','kristen'],
    logica: ['rodrigez','cofla','hyun','German','chloe'],
    ingles: ['Ricardo','carey','hyun','chloe','iban'],
    quimica: ['gutierrez','cofla','olaya','ryo','O,she']
}

const inscribir =(alumno,materia) =>{
personas = materias[materia];
if(personass.length >= 20){
    document.write(`lo sentimos estimado <b>${alumno}</b>, pero los cupos para la materia de ${materia} se encuentran llenos`)
  }else{
    personas.push(alumno)
    if (materia === 'fisica'){
     materias = {
            fisica: personas,
            programacion: materias['programacion'],
            logica: materias['logica'],
            ingles: materias['ingles'],
            quimica: materias['quimica']
        }
    }else if(materia === 'programacion'){
        materias = {
            fisica: materias['fisica'],
            programacion: personas,
            logica: materias['logica'],
            ingles: materias['ingles'],
            quimica: materias['quimica']
        }
    }else if(materia === 'logica'){
        materias = {
            fisica: materias['fisica'],
            programacion: materias['programacion'],
            logica: personas,
            ingles: materias['ingles'],
            quimica: materias['quimica']
        }
  }else if(materia === 'programacion'){
    materias = {
        fisica: materias['fisica'],
        programacion: materias['programacion'],
        logica: materias['logica'],
        ingles: personas,
        quimica: materias['quimica']
    }
}else if(materia === 'programacion'){
    materias = {
        fisica: materias['fisica'],
        programacion: materias['programacion'],
        logica: materias['logica'],
        ingles: materias['ingles'],
        quimica: personas
    }
}
}
document.write('felicitaciones ya estas inscrito a nuestra materia')
}
inscribir('juanito', 'fisica')