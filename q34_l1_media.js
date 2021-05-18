const input = require('prompt-sync')()

//Entrada
const num1 = Number(input('Primeiro número: '))
const num2 = Number(input('Segundoo número: '))
const num3 = Number(input('Terceiro número: '))

//Processamento
const media = (num1 + num2 + num3) / 3

//Saída
console.log('A media de', num1, ',', num2, 'e', num3, 'é', media.toFixed(1))
