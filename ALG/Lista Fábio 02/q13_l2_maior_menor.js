const input = require('prompt-sync')()

const num1 = Number(input('Informe um número: '))
const num2 = Number(input('Informe um número: '))
const num3 = Number(input('Informe um número: '))
const num4 = Number(input('Informe um número: '))
const num5 = Number(input('Informe um número: '))

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
    console.log('O maior é', num1)
} else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
    console.log('O maior é', num2)
} else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
    console.log('O maior é', num3)
} else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
    console.log('O maior é', num4)
} else if (num5 > num1 && num5 > num2 && num5 > num3 && num5 > num4){
    console.log('O maior é', num5)
}

if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5){
    console.log('O menor é', num1)
} else if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5){
    console.log('O menor é', num2)
} else if (num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5){
    console.log('O menor é', num3)
} else if (num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5){
    console.log('O menor é', num4)
} else if (num5 < num1 && num5 < num2 && num5 < num3 && num5 < num4){
    console.log('O menor é', num5)
}
