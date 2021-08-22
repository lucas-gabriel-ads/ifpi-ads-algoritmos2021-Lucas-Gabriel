const input = require('prompt-sync')()

const valor1 = Number(input('Informe o primeiro número inteiro: '))
const valor2 = Number(input('Informe o segundo número inteiro: '))
const opcao = Number(input('Informe a operação que deseja fazer (1 - Adição, 2 - Subtração, 3 - Muçltiplicação, 4 - Divisão): '))

if (opcao === 1){
    console.log(valor1 + valor2)
} else if (opcao === 2){
    console.log(valor1 - valor2)
} else if (opcao === 3){
    console.log(valor1 * valor2)
} else if (opcao === 4){
    if (valo2 === 0){
        console.log('Error! Divisão por 0')
    } else{
        console.log(valor1 / valor2)
    }
} else{
    console.log('Opção inválida')
}
