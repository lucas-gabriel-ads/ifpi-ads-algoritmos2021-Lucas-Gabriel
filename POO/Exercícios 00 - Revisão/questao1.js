const input = require('prompt-sync')()

function main(){
    const num = Number(input("Informe um número inteiro: "))
    console.log(`O Antecessor de ${num} é ${num - 1} e o sucessor é ${num + 1}.`)
}

main()