const input = require('prompt-sync')()

function main(){
    const p = Number(input("Informe o valor da porcentagem: "))
    const x = Number(input("Informe o valor a ser calculado a porcentagem: "))
    console.log(`${p}% de ${x} = ${porcentagem(p, x)}`)
}

function porcentagem(p, x){
    return (x * (p / 100))
}

main()