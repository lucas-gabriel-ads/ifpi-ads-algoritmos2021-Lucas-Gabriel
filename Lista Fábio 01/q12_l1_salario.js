const input = require('prompt-sync')()

//Entrada
const salario = Number(input('Informe seu salário: R$'))

//Processamento
const novo_salario = (salario + (salario * 0.25)).toFixed(2)

//Saída
console.log('Seu salário no valor de R$', salario, 'com o aumento de 25% fica de R$', novo_salario)
