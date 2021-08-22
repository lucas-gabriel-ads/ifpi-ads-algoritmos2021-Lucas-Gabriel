const input = require('prompt-sync')()

//Entrada
const anos = Number(input('Quantos anos: '))
const meses = Number(input('Quantos meses: '))
const dias = Number(input('Quantos dias: '))

//Processamento
const idade_dias = (anos * 365) + (meses * 30) + dias

//Saída
console.log('Sua idade em dias é de', idade_dias, 'dias')
