const input = require('prompt-sync')()

// Entradas
const primeiro_numero = Number(input('Informe o 1º número: '))
const segundo_numero = Number(input('Informe o 2º número: '))
const terceiro_numero = Number(input('Informe o 3º número: '))

// Processamento
const soma = primeiro_numero + segundo_numero
const subtracao = segundo_numero - terceiro_numero

// Saída
console.log(primeiro_numero, '+', segundo_numero, '=', soma)
console.log(segundo_numero, '-', terceiro_numero, '=', subtracao)
