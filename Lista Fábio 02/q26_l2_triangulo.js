const input = require('prompt-sync')()

const lado1 = Number(input('Digite o primeiro lado: '))
const lado2 = Number(input('Digite o segundo lado: '))
const lado3 = Number(input('Digite o terceiro lado: '))

if (Math.pow(lado1,2) + Math.pow(lado2,2) === Math.pow(lado3,2)){
    console.log(`O ${lado3} é a hipotenusa e os catetos são ${lado1} e ${lado2}`)
}else if (Math.pow(lado1,2) + Math.pow(lado3,2) === Math.pow(lado2,2)){
    console.log(`O ${lado2} é a hipotenusa e os catetos são ${lado1} e ${lado3}`)
}else if (Math.pow(lado2,2) + Math.pow(lado3,2) === Math.pow(lado1,2)){
    console.log(`O ${lado1} é a hipotenusa e os catetos são ${lado3} e ${lado2}`)
}else{
    console.log('Triangulo inválido')
}
