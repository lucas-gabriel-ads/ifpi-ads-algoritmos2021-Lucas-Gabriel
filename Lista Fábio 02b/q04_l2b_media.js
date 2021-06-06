const input = require('prompt-sync')()

function main(){
    const nota1 = Number(input('Informe a primeira nota: '))
    const nota2 = Number(input('Informe a segunda nota: '))

    if (media(nota1, nota2) === 10){
        console.log('Aprovado com Distinção')
    } else if (media(nota1, nota2) < 7){
        console.log('Reprovado')
    } else{
        console.log('Aprovado')
    }
}

function media(nota1, nota2){
    return (nota1 + nota2) / 2
}

main()
