const input = require('prompt-sync')()

//Entrada
const latao = Number(input('Informe a quantidade de latão em Kg: '))

//Processamento
const cobre = (latao * 0.7).toFixed(2)
const zinco = (latao * 0.3).toFixed(2)

//Saída
console.log('Em', latao, 'Kg de latão se tem', cobre, 'Kg de cobre e', zinco, 'Kg de zinco')
