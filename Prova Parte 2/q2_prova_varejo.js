const input = require('prompt-sync')()

function main(){
    const nome = input('Nome: ')
    const valor_total_vendas = Number(input('Informe o valor total vendas no mês: R$'))

    var comissao_faixa_1 = comissao_primeira_faixa(valor_total_vendas)
    var comissao_faixa_2 = comissao_segunda_faixa(valor_total_vendas)
    var comissao_faixa_3 = comissao_terceira_faixa(valor_total_vendas)
    var total_comissoes = comissao_faixa_1 + comissao_faixa_2 + comissao_faixa_3

    console.log('+============== ARMAZEM PARAÍBA ==============+')
    console.log('              FOLHA DE PAGAMENTO               ')
    console.log(`Funcionário                       : ${nome}`)
    console.log(`Valor total de vendas             : R$ ${valor_total_vendas}`)
    console.log(`Comissão primeira faixa (5%)      : R$ ${comissao_faixa_1.toFixed(2)}`)
    console.log(`Comissão segunda faixa (10%)      : R$ ${comissao_faixa_2.toFixed(2)}`)
    console.log(`Comissão terceira faixa (20%)     : R$ ${comissao_faixa_3.toFixed(2)}`)
    console.log(`Valor total da comissão           : R$ ${total_comissoes.toFixed(2)}`)
    console.log(`Salário fixo                      : R$ 1100.00`)
    console.log(`Salário final                     : R$ ${(1100 + total_comissoes).toFixed(2)}`)
}

function comissao_primeira_faixa(valor_total_vendas){
    if (valor_total_vendas <= 5000 || valor_total_vendas > 30000){
        var comissao_faixa_1 = 0
    } else if (valor_total_vendas > 10000 && valor_total_vendas <= 30000){
        var comissao_faixa_1 = 250
    } else{
        var comissao_faixa_1 = (valor_total_vendas - 5000) * 0.05
    }

    return comissao_faixa_1
}

function comissao_segunda_faixa(valor_total_vendas){
    if (valor_total_vendas <= 10000 || valor_total_vendas > 30000){
        var comissao_faixa_2 = 0
    } else{
        var comissao_faixa_2 = (valor_total_vendas - 10000) * 0.1
    }

    return comissao_faixa_2
}

function comissao_terceira_faixa(valor_total_vendas){
    if (valor_total_vendas > 30000){
        var comissao_faixa_3 = valor_total_vendas * 0.2
    } else{
        var comissao_faixa_3 = 0
    }

    return comissao_faixa_3
}

main()
