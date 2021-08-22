const input = require('prompt-sync')()

function main(){
    const cotacao_dolar = Number(input('Informe a cotação atual do dólar: R$'))
    const dolar = Number(input('Informe um valor em Dólar a ser convertido em Real: $'))
    const real = cotacao_dolar * dolar
    console.log(`$ ${dolar.toFixed(2)} equivalem a R$ ${real.toFixed(2)}.`)
}

main()