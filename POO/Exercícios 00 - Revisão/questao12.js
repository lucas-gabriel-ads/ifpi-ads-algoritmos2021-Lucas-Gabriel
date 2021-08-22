const input = require('prompt-sync')()

function main(){
    const segundos = Number(input("Informe o valor em segundos para ser convertido: "))
    console.log(`${segundos} = ${converte_hora(segundos)}`)
}

function converte_hora(segundos){
    horas = Math.trunc(segundos / 3600)
    min = Math.trunc((segundos - (horas * 3600)) / 60)
    seg = (segundos - (horas * 3600) - (min * 60))
    return `${horas}:${min}:${seg}`
}

main()