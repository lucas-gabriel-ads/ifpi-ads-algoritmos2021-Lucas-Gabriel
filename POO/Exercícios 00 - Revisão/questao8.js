const input = require('prompt-sync')()

function main() {
    lista = []
    pares = 0
    
    for (let index = 0; index < 20; index++){
        var num = Number(input("Informe um número inteiro: "))
        lista.push(num)
        if (num % 2 == 0){
            pares += 1
        }
    }

    console.log(lista)
    console.log(`Existem ${pares} números pares.`)
}

main()