const input = require('prompt-sync')()

//Entrada
const meses = Number(input('Informe o número de meses: '))

//Processamento
const anos = Math.trunc(meses / 12)
const meses_restantes = meses - (anos * 12)

//Saída
console.log(meses, 'meses equivalem a', anos, 'anos e', meses_restantes, 'meses')
