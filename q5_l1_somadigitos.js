const input = require('prompt-sync')()

// Entrada
const numero = Number(input('Informe um número inteiro de 3 dígitos: ')) // Solicitando o numero inteiro de 3 digitos

// Processamento
const primeiro_digito = Math.trunc(numero / 100) // Descobrindo o primeiro digito do valor informado
const segundo_digito = Math.trunc((numero - (primeiro_digito * 100)) / 10) // Descobrindo o segundo digito do valor informado
const terceiro_digito = numero - ((primeiro_digito * 100) + (segundo_digito * 10)) // Descobrindo o terceiro digito do valor informado
const soma = primeiro_digito + segundo_digito + terceiro_digito // Somando os três dígitos

// Saída
console.log('O número informado foi', numero)
console.log(primeiro_digito, '+', segundo_digito, '+', terceiro_digito, '=', soma)