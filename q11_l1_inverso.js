const input = require('prompt-sync')()

//Entrada
const numero = Number(input('Informe um número inteiro de 3 digitos: '))

//Processamento
const primeiro_num = Math.trunc(numero / 100)
const segundo_num = Math.trunc((numero - (primeiro_num * 100)) / 10)
const terceiro_num = (numero - (primeiro_num * 100)) - (segundo_num * 10)
const inverso = (terceiro_num * 100) + (segundo_num * 10) + primeiro_num

//Saida
console.log('O inverso de', numero, 'é', inverso)
