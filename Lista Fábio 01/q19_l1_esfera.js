const input = require('prompt-sync')()

//Entradas
const raio = Number(input('Informe o raio da esfera: '))

//Processamento
const volume = ((4 * 3.14 * raio) / 3).toFixed(1)

//Saida
console.log('O volume da esfera é', volume)
