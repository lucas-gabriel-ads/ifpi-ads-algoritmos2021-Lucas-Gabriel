const input = require('prompt-sync')()

//Entradas
const fahrenheit = Number(input('Informe uma temperatura em Fahrenheit: '))

//Processamento
const celsius = (((5 * fahrenheit) - 160) / 9).toFixed(1)

//Saida
console.log(fahrenheit, 'ºF', 'equivale a', celsius, 'ºC')
