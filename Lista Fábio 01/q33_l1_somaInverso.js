const input = require('prompt-sync')()

//Entrada
const numero = Number(input('Informe um número de 3 digitos: '))

//Processamento
const primeiro_digito = Math.trunc(numero / 100)
const segundo_digito = Math.trunc((numero % 100) / 10)
const terceiro_digito = numero - (primeiro_digito * 100) - (segundo_digito * 10)
const inverso = (terceiro_digito * 100) + (segundo_digito * 10) + primeiro_digito

//Saída
console.log(numero, '+', inverso, '=', (numero + inverso))
