const input = require('prompt-sync')()

const num = Number(input('Informe um número:'))

const algarismo1 = Math.trunc(num / 10)
const algarismo2 = num - (algarismo1 * 10)
if (algarismo1 === algarismo2){
    console.log('Os dois algarismos do número', num, 'são iguais')
} else{
    console.log('Os dois algarismos do número', num, 'não são iguais')
}
