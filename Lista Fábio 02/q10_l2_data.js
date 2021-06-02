const input = require('prompt-sync')()

const dia = Number(input('Dia: '))
const mes = Number(input('Mes: '))
const ano = Number(input('Ano: '))

if ((dia <= 31 && dia > 0) && (mes <= 12 && mes > 0) && ano > 0){
    console.log(dia, '/', mes, '/', ano, 'é uma data válida')
} else{
    console.log('Não é uma data válida')
}
