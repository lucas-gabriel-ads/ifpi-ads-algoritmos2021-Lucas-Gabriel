const input = require('prompt-sync')()

//Entrada
const valor_km = Number(input('Informe o valor em Km: '))

//Processamento
const valor_m = valor_km * 1000

//Saída
console.log(valor_km, 'Km equivalem a', valor_m, 'metros')
