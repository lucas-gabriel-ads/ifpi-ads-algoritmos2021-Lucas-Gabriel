const input = require('prompt-sync')()

const num1 = Number(input('Digite o primeiro número: '))
const num2 = Number(input('Digite o segundo número: '))
const num3 = Number(input('Digite o terceiro número: '))

if (num1 === num2 && num2 === num3){
    console.log('3 números iguais.')
} else if (num1 === num2 || num2 === num3 || num1 === num3){
    console.log('2 números iguais.')
} else{
    console.log('Não existem números iguais.')
}
