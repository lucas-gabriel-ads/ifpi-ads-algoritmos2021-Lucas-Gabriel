const input = require('prompt-sync')()

//Entrada
const numero = Number(input('Informe um número de 4 digitos: '))

//Processamento
const primeiro_digito = Math.trunc(numero / 1000)
const segundo_digito = Math.trunc((numero % 1000) / 100)
const terceiro_digito = Math.trunc((numero - (primeiro_digito * 1000) - (segundo_digito * 100)) / 10)
const quarto_digito = numero - (primeiro_digito * 1000) - (segundo_digito * 100) - (terceiro_digito * 10)
const soma_digitos = primeiro_digito + segundo_digito + terceiro_digito + quarto_digito

//Saída
console.log(primeiro_digito, '+', segundo_digito, '+', terceiro_digito, '+', quarto_digito, '=', soma_digitos)
