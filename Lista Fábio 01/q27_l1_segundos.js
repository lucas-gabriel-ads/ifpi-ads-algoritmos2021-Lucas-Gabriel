const input = require('prompt-sync')()

//Entrada
const segundos = Number(input('Informe os segundos: '))

//Processamento
const horas = Math.trunc(segundos / 3600)
const minutos = Math.trunc((segundos - (horas * 3600)) / 60)
const segnudos_restantes = segundos - (horas * 3600) - (minutos * 60)

//Saída
console.log(segundos, 'segundos equivalem a', horas, 'horas', minutos, 'minutos e', segnudos_restantes, 'segundos')
