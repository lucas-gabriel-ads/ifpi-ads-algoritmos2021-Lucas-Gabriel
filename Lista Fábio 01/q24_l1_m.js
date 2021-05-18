const input = require('prompt-sync')()

//Entrada
const valor_m = Number(input('Informe o valor em metros: '))

//Processamento
const valor_cm = valor_m * 100

//Saída
console.log(valor_m, 'metros equivalem a', valor_cm, 'cm')
