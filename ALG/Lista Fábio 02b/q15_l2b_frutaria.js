const input = require('prompt-sync')()

function main(){
    const kg_morango = Number(input('Informe a quantidade de morangos que deseja em Kg: '))
    const kg_maca = Number(input('Informe a quantidade de maçãs que deseja em Kg: '))

    const preco_bruto = calcula_valor_bruto(kg_morango, kg_maca)
    const total_kg = kg_morango + kg_maca

    if (preco_bruto > 25 || total_kg > 8){
        var valor_final = preco_bruto - (preco_bruto * 0.1)
    }else{
        var valor_final = preco_bruto
    }

    console.log(`O valor final a ser pago por ${kg_morango}Kg de morango e ${kg_maca}Kg de maçã é R$ ${valor_final.toFixed(2)}`)
}

function calcula_valor_bruto(kg_morango, kg_maca){
    if (kg_morango <= 5){
        var preco_kg_morango = 2.50 
    }else{
        var preco_kg_morango = 2.20
    }

    if (kg_maca <= 5){
        var preco_kg_maca = 1.80
    }else{
        var preco_kg_maca = 1.50
    }

    const preco_bruto = (kg_morango * preco_kg_morango) + (kg_maca * preco_kg_maca)
    return preco_bruto
}

main()
