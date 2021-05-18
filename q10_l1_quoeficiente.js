const input = require('prompt-sync')()

// Entradas
const primeiro_numero = Number(input('Informe o primeiro número: '))
const segundo_numero = Number(input('Informe o segundo número: '))

// Processamento
const divisao = Math.trunc((primeiro_numero / segundo_numero))
const resto = primeiro_numero % segundo_numero

// Saída
console.log(primeiro_numero, '/', segundo_numero, '=', divisao, 'e o resto é', resto)
