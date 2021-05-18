const input = require('prompt-sync')()

//Entrada
const valor_kg = Number(input('Informe o valor em Kg: '))

//Processamento
const valor_g = valor_kg * 1000

//Saída
console.log(valor_kg, 'Kg equivalem a', valor_g, 'gramas')
