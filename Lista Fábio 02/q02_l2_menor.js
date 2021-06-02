const input = require('prompt-sync')()

const num1 = Number(input('Primeiro número:'))
const num2 = Number(input('Segundo número:'))

if (num1 > num2){
    console.log(num1, 'é o maior e', num2, 'é o menor')
} else if (num1 < num2){
    console.log(num2, 'é o maior e', num1, 'é o menor')
} else{
    console.log('Números iguais.')
}
