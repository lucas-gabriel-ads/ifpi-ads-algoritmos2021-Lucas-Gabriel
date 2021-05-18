const input = require('prompt-sync')()

//Entrada
const horas = Number(input('Informe o número de horas: '))

//Processamento
const semanas = Math.trunc(horas / 168)
const dias = Math.trunc((horas - (semanas * 168)) / 24)
const horas_restantes = horas - (semanas * 168) - (dias * 24)

//Saída
console.log(horas, 'horas equivalem a', semanas, 'semanas', dias, 'dias e', horas_restantes, 'horas')
