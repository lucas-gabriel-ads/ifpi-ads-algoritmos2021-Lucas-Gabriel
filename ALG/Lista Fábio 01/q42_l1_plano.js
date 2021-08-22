const input = require('prompt-sync')()

//Entradas
const ponto_x1 = Number(input('Informe o X do ponto 1: '))
const ponto_y1 = Number(input('Informe o Y do ponto 1: '))
const ponto_x2 = Number(input('Informe o X do ponto 2: '))
const ponto_y2 = Number(input('Informe o Y do ponto 2: '))

//Processamento
const distancia = (Math.sqrt(Math.pow((ponto_x2 - ponto_x1), 2) + Math.pow((ponto_y2 - ponto_y1), 2))).toFixed(2)

//Saída
console.log('A distância entre esses dois pontos é', distancia)
