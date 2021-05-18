const input = require('prompt-sync')()

//Entrada
const valor_m = Number(input('Informe o valor em metros: '))

//Processamento
const km = Math.trunc(valor_m / 1000)
const m_restantes = valor_m - (km * 1000)

//Saída
console.log(valor_m, 'metros equivalem a', km, 'Km e', m_restantes, 'metros')
