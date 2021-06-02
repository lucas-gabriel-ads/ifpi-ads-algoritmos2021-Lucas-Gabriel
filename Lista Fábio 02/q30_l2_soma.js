const input = require('prompt-sync')()

function main() {
    var numero = Number(input('Digite um valor com 4 dígitos: '))

    if(verificar_retorno(numero) && numero >= 1000 && numero <= 9999){
        console.log(`O número ${numero} obedece a essa característica.`)
    }else{
        console.log(`O número ${numero} não obedece essa característica.`)
    }
}

function verificar_retorno(numero) {
    var numero_composto_milhar_centena = parseInt(numero / 100)
    var numero_composto_dezena_unidade = numero % 100
    var terceiro_numero = numero_composto_milhar_centena + numero_composto_dezena_unidade

    return terceiro_numero ** 2 === numero

}

main()
