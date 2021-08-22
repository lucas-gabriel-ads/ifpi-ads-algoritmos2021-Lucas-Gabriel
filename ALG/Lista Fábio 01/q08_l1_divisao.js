const input = require('prompt-sync')()

// Entradas
const primeiro_numero = Number(input('Informe o primeiro número: '))
const segundo_numero = Number(input('Informe o segundo número: '))

// Processamento
const soma = primeiro_numero + segundo_numero
const subtracao = primeiro_numero - segundo_numero
const divisao = (soma / subtracao).toFixed(1)

// Saída
console.log('A divisão da soma pela subtração dos números', primeiro_numero, 'e', segundo_numero, 'é', divisao)
