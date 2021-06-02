const input = require('prompt-sync')()

const altura = Number(input('Informe sua altura em metros: '))
const peso = Number(input('Informe o seu peso em Kg: '))

const imc = peso / (altura * altura)

if (imc < 25){
    console.log('Peso normal')
}else if (25 >= imc && imc <= 30){
    console.log('Obeso')
}else if (imc > 30){
    console.log('Obesidade mórbita')
}
