const input = require('prompt-sync')()

// Entrada
const numero = Number(input('Informe um número com 2 dígitos: '))

// Processamento
const primeiro_num = Math.trunc(numero/10)
const segundo_num = numero - (primeiro_num * 10)
const inverso = (segundo_num * 10) + primeiro_num

// Saída
console.log('O inverso de', numero, 'é', inverso)
