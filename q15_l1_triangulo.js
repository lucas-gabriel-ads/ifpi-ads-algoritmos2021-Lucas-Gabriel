const input = require('prompt-sync')()

//Entradas
const base = Number(input('Informe a base do trinagulo: '))
const altura = Number(input('Informe a altura do triangulo: '))

//Processamento
const area = ((base * altura) / 2).toFixed(1)

//Saida
console.log('A área do triangulo é', area)
