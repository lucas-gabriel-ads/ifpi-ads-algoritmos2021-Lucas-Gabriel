const input = require('prompt-sync')()

const num1 = Number(input('Informe um número: '))
const num2 = Number(input('Informe um número: '))
const num3 = Number(input('Informe um número: '))
const num4 = Number(input('Informe um número: '))
const num5 = Number(input('Informe um número: '))

const media = (num1 + num2 + num3 + num4 + num5) / 5
console.log('A média é', media)
console.log('Os valores informados que são maiores que a média são: ')
if (num1 > media){
    console.log(num1)
}
if (num2 > media){
    console.log(num2)
}
if (num3 > media){
    console.log(num3)
}
if (num4 > media){
    console.log(num4)
}
if (num5 > media){
    console.log(num5)
}
