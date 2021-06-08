const input = require('prompt-sync')()

function main() {
    const nome = input('Seu nome: ')
    const nota_1 = Number(input('Nota Prova 1: '))
    const nota_2 = Number(input('Nota Prova 2: '))
    const nota_3 = Number(input('Nota Atividades: '))

    var media_ponderada = ((nota_1 * 0.2) + (nota_2 * 0.3) + (nota_3 * 0.1)) / 0.6

    console.log('+=================== BOLETIM ESCOLAR ===================+')
    console.log('Aluno: ', nome)
    if (media_ponderada >= 7) {  
        console.log(`APROVADO! Média: ${media_ponderada.toFixed(1)}`)
    } else if (media_ponderada < 4){
        console.log('REPROVADO!')
    } else{
        const nota_prova_final = Number(input('Nota da prova final: '))
        prova_final(nota_prova_final, media_ponderada)
    }
}

function prova_final(nota_prova_final, media_ponderada){
    var media_final = (nota_prova_final + media_ponderada) / 2
    if (media_final >=6){
      console.log(`APROVADO APÓS PROVA FINAL! Média: ${media_final.toFixed(1)}`)
    }else{
      console.log(`REPROVADO APÓS PROVA FINAL! Média: ${media_final.toFixed(1)}`)
    }
}

main()
