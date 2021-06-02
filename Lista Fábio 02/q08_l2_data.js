const input = require('prompt-sync')()

const dia_atual = Number(input('Dia atual: '))
const mes_atual = Number(input('Mes atual: '))
const ano_atual = Number(input('Ano atual: '))

const dia_nasc = Number(input('Dia do seu nascimento: '))
const mes_nasc = Number(input('Mes do seu nascimento: '))
const ano_nasc = Number(input('Ano do seu nascimento: '))

if (dia_nasc === dia_atual && mes_nasc === mes_atual){
    console.log('Feliz aniversário!!! Voce esta completando', ano_atual - ano_nasc, 'anos')
} else if (mes_atual > mes_nasc || (mes_nasc === mes_atual && dia_atual > dia_nasc)){
    console.log('Voce tem', ano_atual - ano_nasc,'anos')
} else {
    console.log('Voce completará', ano_atual - ano_nasc, 'este ano, mas ainda tem', (ano_atual - ano_nasc)-1, 'anos')
}
