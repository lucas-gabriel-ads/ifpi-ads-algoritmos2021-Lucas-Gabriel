const input = require('prompt-sync')()

//Entradas
const celsius = Number(input('Informe uma temperatura em celsius: '))

//Processamento
const fahrenheit = (((9 * celsius) + 160) / 5).toFixed(1)

//Saida
console.log(celsius, 'ºC', 'equivale a', fahrenheit, 'ºF')
