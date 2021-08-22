const input = require('prompt-sync')()

//Entradas
const lado = Number(input('Informe o valor do lado do quadrado: '))

//Processamento
const area = (lado * lado).toFixed(1)

//Saida
console.log('A área do quadrado é', area)
