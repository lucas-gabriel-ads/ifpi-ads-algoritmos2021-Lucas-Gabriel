const input = require('prompt-sync')()

function main(){
    const turno = input('Informe em que turno voce estuda (M - matutino, V - vespertino ou N - noite): ')
    saudacao(turno)
}

function saudacao(turno){
    if (turno === 'm' || turno === 'M'){
        console.log('Bom Dia!')
    } else if(turno === 'v' || turno === 'V'){
        console.log('Boa Tarde!')
    } else if (turno === 'n' || turno === 'N'){
        console.log('Boa Noite!')
    } else{
        console.log('Valor Inválido!')
    }
}

main()
