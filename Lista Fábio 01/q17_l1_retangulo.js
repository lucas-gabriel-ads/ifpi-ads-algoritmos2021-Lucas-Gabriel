const input = require('prompt-sync')()

//Entradas
const base = Number(input('Informe a base do retangulo: '))
const altura = Number(input('Informe a altura do retangulo: '))

//Processamento
const area = (base * altura).toFixed(1)

//Saida
console.log('A área do retangulo é', area)
