const input = require('prompt-sync')()

//Entradas
const valorA = Number(input('Informe o valor A: '))
const valorB = Number(input('Informe o valor B: '))
const valorC = Number(input('Informe o valor C: '))
const valorD = Number(input('Informe o valor D: '))
const valorE = Number(input('Informe o valor E: '))
const valorF = Number(input('Informe o valor F: '))

//Processamento
const valorX = (((valorC * valorE) - (valorB * valorF)) / ((valorA * valorE) - (valorB * valorD))).toFixed(2)
const valorY = (((valorA * valorF) - (valorC * valorD)) / ((valorA * valorE) - (valorB * valorD))).toFixed(2)

//Saída
console.log('Para os valores dados X =', valorX, 'e Y =', valorY)
