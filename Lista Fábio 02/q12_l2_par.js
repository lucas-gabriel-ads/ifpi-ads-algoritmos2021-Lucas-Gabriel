const input = require('prompt-sync')()

const numero = Number(input('Informe um número: '))

if (numero % 2 === 0){
    console.log(numero, 'é par')
} else{
    console.log(numero, 'é ímpar')
}
