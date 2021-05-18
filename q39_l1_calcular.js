const input = require('prompt-sync')()

//Entradas
const numA = Number(input('Informe o 1º número inteiro positivo: '))
const numB = Number(input('informe o 2º número inteiro positivo: '))
const numC = Number(input('Informe o 3º número inteiro positivo: '))

//Processamento
const calculoR = Math.pow((numA + numB), 2)
const calculoS = Math.pow((numB + numC), 2)
const resultado = (calculoR + calculoS) / 2

//Saída
console.log('O resultado é', resultado)
