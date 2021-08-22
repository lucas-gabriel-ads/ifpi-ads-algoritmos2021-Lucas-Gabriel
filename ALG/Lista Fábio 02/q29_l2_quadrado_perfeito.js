const input = require('prompt-sync')()

function main() {
    var numero = Number(input('Digite um número: '))
    var quadrado_perfeito = verificar_quadrado_perfeito(numero)

    if(quadrado_perfeito && numero >= 1000){
        console.log(`O número ${numero} é um quadrado perfeito!`)

    }else if(numero < 1000){
        console.log(`Quantidade de dígitos insuficiente.`)

    }else{
        console.log(`O número ${numero} não é um quadrado perfeito!`)
    }
}

function verificar_quadrado_perfeito(numero) {
    var raiz = Math.sqrt(numero)
    var primeira_dezena = parseInt(numero / 100)
    var segunda_dezena = numero % 100

    return raiz === primeira_dezena + segunda_dezena
    
}
main()
