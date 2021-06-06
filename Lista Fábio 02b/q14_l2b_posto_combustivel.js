const input = require('prompt-sync')()

function main(){
    const tipo_combustivel = input('Informe o tipo de combustível que deseja (A - Álcool, G - Gasolina): ')
    const litros = Number(input('Informe a quantidade de litros desejada: '))

    if (tipo_combustivel === 'A' || tipo_combustivel === 'a'){
        var preco_bruto = litros * 1.90
        var preco_final = preco_bruto - (preco_bruto * (calcula_desconto(litros, tipo_combustivel) / 100))
        console.log(`O valor final a ser pago é de R$ ${preco_final.toFixed(2)}`)
    } else if (tipo_combustivel === 'G' || tipo_combustivel === 'g'){
        var preco_bruto = litros * 2.50
        var preco_final = preco_bruto - (preco_bruto * (calcula_desconto(litros, tipo_combustivel) / 100))
        console.log(`O valor final a ser pago é de R$ ${preco_final.toFixed(2)}`)
    } else{
        console.log('Opção Inválida')
    }
}

function calcula_desconto(litros, tipo){
    if (tipo === 'A' || tipo === 'a'){
        if (litros <= 20){
            var desconto = 3
        }else{
            var desconto = 5
        }
    } else if (tipo === 'G' || tipo === 'g'){
        if (litros <= 20){
            var desconto = 4
        }else{
            var desconto = 6
        }
    }
    return desconto
}

main()
