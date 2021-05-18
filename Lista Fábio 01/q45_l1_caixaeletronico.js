const input = require('prompt-sync')()

//Entrada
const valor_sacado = Number(input('Informe o valor que deseja sacar: R$'))

//Processamento
const notas50 = Math.trunc(valor_sacado / 50)
const notas10 = Math.trunc((valor_sacado % 50) / 10)
const notas5 = Math.trunc((valor_sacado % 10) / 5)
const notas1 = valor_sacado % 5

//Saída
console.log('Para o valor de R$', valor_sacado, 'você vai receber', notas50, 'notas de R$ 50,', notas10, 'notas de R$ 10,', notas5, 'notas de R$ 5 e', notas1, 'de R$ 1')
