const input = require('prompt-sync')()

const numero = Number(input('Informe um numero: '))

const parte_fracionaria = numero - Math.trunc(numero)
if (parte_fracionaria >= 0.5){
    console.log(Math.trunc(numero) + 1)
}else{
    console.log(Math.trunc(numero))
}
