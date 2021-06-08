const input = require('prompt-sync')()

function main(){
    const leitura_anterior = Number(input('Leitura Anterior (KWh): '))
    const leitura_atual = Number(input('Leitura Atual (KWh): '))
    var consumo = leitura_atual - leitura_anterior

    calcula_fatura_talao(consumo)
}

function calcula_fatura_talao(consumo){
    if (consumo <= 30){
        var valor_bruto_tarifa = 0
    } else if(consumo <= 100){
        var valor_bruto_tarifa = consumo * 0.59
    } else if(consumo > 100){
        var valor_bruto_tarifa = consumo * 0.75
    }

    var icms = valor_bruto_tarifa * 0.25
    var pis_confis = valor_bruto_tarifa * 0.15
    var iluminacao_publica = valor_bruto_tarifa * 0.06
    if (consumo < 80){
        iluminacao_publica = 0
    }
    var bandeira_amarela = Math.trunc(consumo / 100) * 8
    var valor_total = valor_bruto_tarifa + pis_confis + icms + iluminacao_publica + bandeira_amarela

    console.log('+================= EQUATORIAL ENERGIA =================+')
    console.log(`Consumo                       : ${consumo} KWh`)
    console.log(`Valor Faturado                : R$ ${valor_bruto_tarifa.toFixed(2)}`)
    console.log(`Bandeira (Amarela)            : R$ ${bandeira_amarela.toFixed(2)}`)
    console.log(`ICMS                          : R$ ${icms.toFixed(2)}`)
    console.log(`PIS/CONFIS                    : R$ ${pis_confis.toFixed(2)}`)
    console.log(`Taxa Iluminação               : R$ ${iluminacao_publica.toFixed(2)}`)
    console.log(`Valor Total à pagar           : R$ ${valor_total.toFixed(2)}`)
}

main()
