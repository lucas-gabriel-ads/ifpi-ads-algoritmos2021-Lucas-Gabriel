const input = require('prompt-sync')()

const num1 = Number(input('Digite o primeiro número: '))
const num2 = Number(input('Digite o segundo número: '))
const num3 = Number(input('Digite o terceiro número: '))

if (num1 <= num2 && num1 <= num3){
    if (num2 <= num3){
        console.log(num1, num2, num3)
    } else{
        console.log(num1, num3, num2)
    }
} else if (num2 <= num2 && num2 <= num3){
    if (num1 <= num3){
        console.log(num2, num1, num3)
    } else{
        console.log(num2, num3, num1)
    }
} else{
    if (num1 <= num2){
        console.log(num3, num1, num2)
    } else{
        console.log(num3, num2, num1)
    }
}
