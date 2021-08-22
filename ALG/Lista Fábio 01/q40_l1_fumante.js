const input = require('prompt-sync')()

//Entradas
const anos = Number(input('A quantos anos você fuma? '))
const cigarros_dia = Number(input('Quantos cigarros você fuma por dia? '))
const preco_carteira = Number(input('Preço de uma carteira de cigarro: R$'))

//Processamento
const cigarros_fumados = (anos * 365) * cigarros_dia
const valor_gasto = ((cigarros_fumados / 20) * preco_carteira).toFixed(2)

//Saída
console.log('Você já gastou R$', valor_gasto, 'em cigarros! Pare de fumar!')
