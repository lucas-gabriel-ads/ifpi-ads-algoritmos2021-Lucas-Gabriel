const input = require('prompt-sync')()

const opcao = Number(input('Escolha uma opção (1, 2, ou 3): '))
const num1 = Number(input('Informe o primeiro número: '))
const num2 = Number(input('Informe o segundo número: '))
const num3 = Number(input('Informe o terceiro número: '))

if (opcao === 1){
    console.log(num1)
} else if (opcao === 2){
    console.log(num2)
} else if (opcao === 3){
    console.log(num3)
} else{
    console.log('Opção inválida')
}
