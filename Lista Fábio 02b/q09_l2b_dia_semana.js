const input = require('prompt-sync')()

function main(){
    const opcao = Number(input('Informe uma opção: '))
    dia_semana(opcao)
}

function dia_semana(opcao){
    if (opcao === 1){
        console.log('Domingo')
    } else if (opcao === 2){
        console.log('Segunda-Feira')
    } else if (opcao === 3){
        console.log('Terça-Feira')
    } else if (opcao === 4){
        console.log('Quarta-Feira')
    } else if (opcao === 5){
        console.log('Quinta-Feira')
    } else if (opcao === 6){
        console.log('Sexta-Feira')
    } else if (opcao === 7){
        console.log('Sábado')
    } else{
        console.log('Opção Inválida')
    }
}

main()
