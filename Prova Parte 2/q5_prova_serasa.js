const input = require('prompt-sync')()

function main(){

    var valor_1 = Number(input('Digite um valor de 0 a 1000 para o critério A: '))
    var valor_2 = Number(input('Digite um valor de 0 a 1000 para o critério B: '))
    var valor_3 = Number(input('Digite um valor de 0 a 1000 para o critério C: '))

    score_1(valor_1, valor_2, valor_3)
    score_2(valor_1, valor_2, valor_3)
}

function score_1(valor_1, valor_2, valor_3){
    var score_1 = ((valor_1 * 0.26) + (valor_2 * 0.57) + (valor_3 * 0.17))
    
    if (score_1 > 800 && score_1 <= 1000 ){
        console.log(`Score 1.0: ${score_1} - Muito Bom`)
    } else if(score_1 > 600 && score_1 <= 800 ){
        console.log(`Score 1.0: ${score_1} - Bom`)
    } else if(score_1 > 400 && score_1 <= 600 ){
        console.log(`Score 1.0: ${score_1} - Regular`)
    } else if (score_1 >= 0 && score_1 <= 400){
        console.log(`Score 1.0: ${score_1} - Baixo`)
    }  
}

function score_2(valor_1, valor_2, valor_3){
    var score_2 = ((valor_1 * 0.62) + (valor_2 * 0.19) + (valor_3 * 0.19))
    
    if (score_2 > 700 && score_2 <= 1000){
        console.log(`Score 2.0: ${score_2} - Muito Bom`)
    } else if (score_2 > 500 && score_2 <= 700 ){
        console.log(`Score 2.0: ${score_2} - Bom`)
    } else if (score_2 > 300 && score_2 <= 500){
        console.log(`Score 2.0: ${score_2} - Regular`)
    } else if (score_2 >= 0 && score_2 <= 300){
        console.log(`Score 2.0: ${score_2} - Baixo`)
    }
}

main()
