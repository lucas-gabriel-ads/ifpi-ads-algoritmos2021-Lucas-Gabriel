const input = require('prompt-sync')()

const lado1 = Number(input('Digite o primeiro lado: '))
const lado2 = Number(input('Digite o segundo lado: '))
const lado3 = Number(input('Digite o terceiro lado: '))

if (lado1 + lado2 >= lado3 && lado1 + lado3 >= lado2 && lado2 + lado3 >= lado1){
    if  (lado1 === lado2 && lado2 === lado3){
        console.log('Triangulo equilátero')
    } else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1){
        console.log('Triangulo escaleno')
    } else{
        console.log('Triangulo isóceles')
    }
} else{
    console.log('Não é um triangulo')
}
