const input = require('prompt-sync')()

function main(){
    const pergunta1 = input('Telefonou para a vítima? ')
    const pergunta2 = input('Esteve no local do crime? ')
    const pergunta3 = input('Mora perto da vítima? ')
    const pergunta4 = input('Devia para a vítima? ')
    const pergunta5 = input('Já trabalhou com a vítima? ')

    const resultado_analise_criminal = analise_criminal(pergunta1, pergunta2, pergunta3, pergunta4, pergunta5)

    if (resultado_analise_criminal === 2){
        console.log('Suspeito(a)!')
    } else if (resultado_analise_criminal === 3 || resultado_analise_criminal === 4){
        console.log('Cúmplice!')
    } else if (resultado_analise_criminal === 5){
        console.log('Assassino!')
    } else{
        console.log('Inocente!')
    }
}

function analise_criminal(perg1, perg2, perg3, perg4, perg5){
    var contador_sim = 0
    if (perg1 === 'sim'){
        contador_sim += 1
    }
    if (perg2 === 'sim'){
        contador_sim += 1
    }
    if (perg3 === 'sim'){
        contador_sim += 1
    }
    if (perg4 === 'sim'){
        contador_sim += 1
    }
    if (perg5 === 'sim'){
        contador_sim += 1
    }
    return contador_sim
}

main()
