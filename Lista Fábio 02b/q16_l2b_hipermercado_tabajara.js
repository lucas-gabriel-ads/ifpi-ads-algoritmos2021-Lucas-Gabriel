const input = require('prompt-sync')()

function main(){
    const tipo = input('Que tipo de carne vai querer (file, alcatra, picanha): ')
    if (tipo != 'file' && tipo != 'alcatra' && tipo != 'picanha'){
        console.log('Tipo de carne inválido!')
    }else{
        const kg_carne = Number(input(`Quantos Kg de ${tipo} deseja: `))
        const opcao_pagamento = input('Que método de pagamento deseja (C - Cartão Tabajara com 5% de desconto, D - Dinheiro): ')

        const preco_bruto = calcula_valor_bruto(tipo, kg_carne)
    
        if (opcao_pagamento === 'C' || opcao_pagamento === 'c'){
        var valor_final = preco_bruto - (preco_bruto * 0.05)
        monta_nota_fiscal(tipo, kg_carne, preco_bruto, opcao_pagamento, 5, valor_final)
        } else if (opcao_pagamento === 'D' || opcao_pagamento === 'd'){
        var valor_final = preco_bruto
        monta_nota_fiscal(tipo, kg_carne, preco_bruto, opcao_pagamento, 0, valor_final)
        } else{
        console.log('Opção de pagamento inválida')
        }
    }  
}

function calcula_valor_bruto(tipo, kg_carne){
    if (tipo === 'file'){
        if (kg_carne <= 5){
            var preco_kg_carne = 4.90
        }else{
            var preco_kg_carne = 5.80
        }
    } else if (tipo === 'alcatra'){
        if (kg_carne <= 5){
            var preco_kg_carne = 5.90
        }else{
            var preco_kg_carne = 6.80
        }
    } else if (tipo === 'picanha'){
        if (kg_carne <= 5){
            var preco_kg_carne = 6.90
        }else{
            var preco_kg_carne = 7.80
        }
    }
    return kg_carne * preco_kg_carne
}

function monta_nota_fiscal(tipo, kg_carne, preco_bruto, opcao_pagamento, valor_desconto, valor_final){
    console.log('+========== HIPERMERCADO TABAJARA ==========+')
    console.log(`Tipo de carne          : ${tipo}`)
    console.log(`Quantidade             : ${kg_carne} Kg`)
    console.log(`Valor total do pedido  : R$ ${preco_bruto.toFixed(2)}`)
    if (opcao_pagamento === 'C' || opcao_pagamento === 'c'){
        console.log(`Forma de Pagamento     : Cartão Tabajara`)
    }else{
        console.log(`Forma de Pagamento     : Dinheiro`)
    }
    console.log(`Desconto               : ${valor_desconto}%`)
    console.log(`Valor a pagar          : R$ ${valor_final.toFixed(2)}`)
    console.log('+===========================================+')
}

main()
