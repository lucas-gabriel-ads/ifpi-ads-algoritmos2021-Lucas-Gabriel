const input = require('prompt-sync')()

function main() {
    var dia_nascimento = Number(input('Informe o dia da data de nascimmento: '))
    var mes_nascimento = Number(input('Informe o mês da data de nascimento: '))
    var ano_nascimento = Number(input('Informe o ano da data de nascimento: '))
    var dia_atual = Number(input('Informe o dia da segunda data: '))
    var mes_atual = Number(input('Informe o mês da segunda data: '))
    var ano_atual = Number(input('Informe o ano da segunda data: '))

    var datas_validadas = validar_datas(dia_nascimento, mes_nascimento, dia_atual, mes_atual)
    var idade_em_dias = verificar_idade_em_dias(dia_nascimento, dia_atual)
    var idade_em_meses = verificar_idade_em_meses(mes_nascimento, mes_atual)
    var idade_em_anos = verificar_idade_em_anos(mes_nascimento, ano_nascimento, mes_atual, ano_atual)

    if(datas_validadas){
    console.log(`A idade corresponde a ${idade_em_anos} anos, ${idade_em_meses} meses e ${idade_em_dias} dias.`)

    }else{
    console.log('Data inválida')
    }
}

function validar_datas(dia_nasc, mes_nasc, dia_atual, mes_atual) {
    var validar_nascimento = dia_nasc <= 31 && mes_nasc <= 12
    var validar_data_atual = dia_atual <= 31 && mes_atual <= 12
    var validar_datas = validar_nascimento && validar_data_atual

    return validar_datas
}

function verificar_idade_em_dias(dia_nasc, dia_atual) {
    
    if(dia_nasc >= dia_atual){
        return dia_atual
    }else if(dia_atual >= dia_nasc){
        return dia_atual - dia_nasc
    }
}

function verificar_idade_em_meses(mes_nasc, mes_atual) {
   
    if(mes_nasc > mes_atual){
        return 12 - (mes_nasc - mes_atual)
    }else if(mes_atual >= mes_nasc){
        return mes_atual - mes_nasc
    }
}

function verificar_idade_em_anos(mes_nasc, ano_nasc, mes_atual, ano_atual) {
  
    if(ano_atual >= ano_nasc && mes_nasc > mes_atual){
        return (ano_atual - ano_nasc) - 1
    }else if(ano_atual >= ano_nasc && mes_atual >= mes_nasc){
        return ano_atual - ano_nasc
    }
    
}
main()
