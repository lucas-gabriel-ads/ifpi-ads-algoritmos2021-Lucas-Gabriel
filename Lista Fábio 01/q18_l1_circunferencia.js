const input = require('prompt-sync')()

//Entradas
const raio = Number(input('Informe o raio da cincunferência: '))

//Processamento
const comprimento = (2 * 3.14 * raio).toFixed(1)

//Saida
console.log('O comprimento da circunferência é', comprimento)
