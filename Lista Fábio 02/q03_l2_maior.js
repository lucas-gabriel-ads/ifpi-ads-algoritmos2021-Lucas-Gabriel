const input = require('prompt-sync')()

const num1 = Number(input('Digite o primeiro número: '))
const num2 = Number(input('Digite o segundo número: '))
const num3 = Number(input('Digite o terceiro número: '))

if (num1 >= num2 && num1 >= num3){
    console.log(num1, 'é o maior')
} else if (num2 >= num1 && num2 >= num3){
    console.log(num2, 'é o maior')
} else if (num3 >= num1 && num3 >= num2){
    console.log(num3, 'é o maior')
}
