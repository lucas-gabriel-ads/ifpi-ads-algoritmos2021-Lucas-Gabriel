const input = require('prompt-sync')()

function main(){
    const nota1 = Number(input('Informe a primeira nota: '))
    const nota2 = Number(input('Informe a segunda nota: '))
    
    const media = calcula_media(nota1, nota2)
    const con = conceito(media)
    if (con === 'A' || con === 'B' || con === 'C'){
        var situacao = 'APROVADO'
    } else{
        var situacao = 'REPROVADO'
    }

    console.log(`Primeira nota : ${nota1}`)
    console.log(`Segunda nota  : ${nota2}`)
    console.log(`Média         : ${media}`)
    console.log(`Conceito      : ${con}`)
    console.log(`Situação      : ${situacao}`)
}

function calcula_media(nota1, nota2){
    return (nota1 + nota2) / 2
}

function conceito(media){
    if (media <= 10 && media >= 9){
        return 'A'
    } else if (media >= 7.5 && media < 9){
        return 'B'
    } else if (media >= 6 && media < 7.5){
        return 'C'
    } else if (media >= 4 && media < 6){
        return 'D'
    } else if (media >= 0 && media < 4){
        return 'E'
    }
}

main()
