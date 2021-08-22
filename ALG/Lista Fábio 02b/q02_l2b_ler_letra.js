const input = require('prompt-sync')()

function main(){
    const letra = input('Informe seu sexo (F - Feminino ou M - Masculino): ')
    f_m(letra)
}

function f_m(letra){
    if (letra === 'F' || letra === 'f'){
        console.log('Feminino')
    } else if (letra === 'M' || letra === 'm'){
        console.log('Masculino')
    } else{
        console.log('Sexo Inválido')
    }
}

main()
