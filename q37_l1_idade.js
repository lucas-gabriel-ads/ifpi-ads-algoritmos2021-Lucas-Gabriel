const input = require('prompt-sync')()

//Entrada
const idade_dias = Number(input('Informe a sua idade em dias: '))

//Processamento
const anos = Math.trunc(idade_dias / 365)
const meses = Math.trunc((idade_dias - (anos * 365)) / 30)
const dias = idade_dias - (anos * 365) - (meses * 30)

//Saída
console.log('Você tem', anos, 'anos', meses, 'meses e', dias, 'dias')
