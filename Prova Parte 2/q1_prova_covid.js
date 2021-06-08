const input = require('prompt-sync')()

function main(){
    const media_14_dias = Number(input('Informe a média de casos a 14 dias: '))
    const media_atual = Number(input('Informe a média atual de casos: '))

    identifica_variacao(media_14_dias, media_atual)

    const classificacao = identifica_variacao(media_14_dias, media_atual)
    var porcentagem = ((classificacao * 100) * -1).toFixed(1)
    if (classificacao < -0.15){
        console.log(`Em QUEDA! Queda de ${porcentagem}%`)
    } else if (classificacao > 0.15){
        console.log(`Em ALTA! Aumento de ${porcentagem}%`)
    } else {
        if (classificacao < 0){
            console.log(`Em ESTABILIDADE! Queda de ${porcentagem}%`)
        } else if (classificacao > 0){
            console.log(`Em ESTABILIDADE! Aumento de ${porcentagem}%`)
        } else {
            console.log(`Em ESTABILIDADE! Não ouve alteração na média.`)
        }
    }
}

function identifica_variacao(media_14_dias, media_atual){
    var diferenca_medias = media_atual - media_14_dias
    var porcentagem_em_decimal = diferenca_medias / media_14_dias
    return porcentagem_em_decimal
}

main()
