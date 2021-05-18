const input = require('prompt-sync')()

//Entrada
const numerador_funcao1 = Number(input('Informe o numerador da primeira função: '))
const denominador_funcao1 = Number(input('Informe o denominador da primeira fração: '))
const numerador_funcao2 = Number(input('Informe o numerador da segunda função: '))
const denominador_funcao2 = Number(input("Informe o denominador da segunda função: "))

//Processamento
const denominador = denominador_funcao1 * denominador_funcao2
const numerador = (numerador_funcao1 * denominador_funcao2) + (numerador_funcao2 * denominador_funcao1)

//Saída
console.log(numerador_funcao1, '/', denominador_funcao1, '+', numerador_funcao2, '/', denominador_funcao2, '=', numerador, '/', denominador)
