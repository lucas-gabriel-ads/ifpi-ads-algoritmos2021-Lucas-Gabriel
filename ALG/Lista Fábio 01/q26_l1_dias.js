const input = require('prompt-sync')()

//Entrada
const dias = Number(input('Informe o número de dias: '))

//Processamento
const semanas = Math.trunc(dias / 7)
const dias_restantes = dias - (semanas * 7)

//Saída
console.log(dias, 'dias equivalem a', semanas, 'semanas e', dias_restantes, 'dias')
