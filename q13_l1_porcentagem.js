const input = require('prompt-sync')()

//Entrada
const valor = Number(input('Informe um valor em R$: '))

//Processamento
const porcentagem = (valor * 0.7).toFixed(2)

//Saída
console.log('70% de R$', valor, 'é R$', porcentagem)
