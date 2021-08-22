const input = require('prompt-sync')()

//Entrada
const minutos = Number(input('Informe a quantidade de minutos: '))

//Processamento
const dias = Math.trunc(minutos / 1440)
const horas = Math.trunc((minutos - (dias * 1440)) / 60)
const minutos_restantes = minutos - (dias * 1440) - (horas * 60)

//Saída
console.log(minutos, 'minutos equivalem a', dias, 'dias', horas, 'horas e', minutos_restantes, 'minutos')
