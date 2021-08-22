const input = require('prompt-sync')()

const dia1 = Number(input('Dia 1: '))
const mes1 = Number(input('Mes 1: '))
const ano1 = Number(input('Ano 1: '))
const dia2 = Number(input('Dia 2: '))
const mes2 = Number(input('Mes 2: '))
const ano2 = Number(input('Ano 2: '))

if (ano1 === ano2){
    if (mes1 === mes2){
        if (dia1 === dia2){
            console.log('Datas iguais')
        }else if (dia1 > dia2){
            console.log(`${dia1}/${mes1}/${ano1} é a data mais recente.`)
        }else{
            console.log(`${dia2}/${mes2}/${ano2} é a data mais recente.`)
        }
    }else if (mes1 > mes2){
        console.log(`${dia1}/${mes1}/${ano1} é a data mais recente.`)
    }else {
        console.log(`${dia2}/${mes2}/${ano2} é a data mais recente.`)
    }
} else if (ano1 > ano2){
    console.log(`${dia1}/${mes1}/${ano1} é a data mais recente.`)
}else {
    console.log(`${dia2}/${mes2}/${ano2} é a data mais recente.`)
}
