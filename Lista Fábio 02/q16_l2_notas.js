const input = require('prompt-sync')()

const nota1 = Number(input('Informe a primeira nota: '))
const nota2 = Number(input('Informe a segunda nota: '))

const media = (nota1 + nota2) / 2

if (media >= 7){
    console.log('Aprovado')
} else{
    const exame_final = Number(input('Nota do exame final: '))
    const media_final = (exame_final + media) / 2
    if (media_final >= 5){
        console.log('Aprovado')
    } else{
        console.log('Reprovado')
    }
}
