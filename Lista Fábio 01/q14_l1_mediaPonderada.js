const input = require('prompt-sync')()

//Entrada
const nota1 = Number(input('Informe a primeira nota: '))
const peso_nota1 = Number(input('Informe o peso da primeira nota: '))
const nota2 = Number(input('Informe a segunda nota: '))
const peso_nota2 = Number(input('Informe o peso da segunda nota: '))
const nota3 = Number(input('Informe a terceira nota: '))
const peso_nota3 = Number(input('Informe o peso da terceira nota: '))

//Processamento
const media_ponderada = (((nota1 * peso_nota1) + (nota2 * peso_nota2) + (nota3 * peso_nota3)) / (peso_nota1 + peso_nota2 + peso_nota3)).toFixed(1)

//Saída
console.log('A média ponderada das notas', nota1, 'de peso', peso_nota1, ',', nota2, 'de peso', peso_nota2, 'e', nota3, 'de peso', peso_nota3, 'é', media_ponderada)
