const input = require('prompt-sync')()

function main(){
    lista = []
    
    for (let index = 0; index < 5; index++){
        var variavel = input("Informe o valor da variável: ")
        lista.push(variavel)
    }

    console.log(lista)
}

main()