const input = require('prompt-sync')()

//Entrada
const valor_mercadoria = Number(input('Informe o valor do produto: R$'))

//Processamento
const valor_entrada = (Math.trunc(valor_mercadoria / 3) + (valor_mercadoria % 3)).toFixed(2)
const valor_prestacao = ((valor_mercadoria - valor_entrada) / 2).toFixed(2)

//Saída
console.log('Para uma mercadoria de R$', valor_mercadoria, 'o valor da entrada é de R$', valor_entrada, 'e duas prestações de R$', valor_prestacao, 'cada')
