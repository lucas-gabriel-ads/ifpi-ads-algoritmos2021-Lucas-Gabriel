const input = require('prompt-sync')()

function main(){
    const num = Number(input('Informe um número: '))
    if (positivo(num)){
        console.log(`${num} é positivo`)
    } else{
        console.log(`${num} é negativo`)
    }
}

function positivo(numero){
    if (numero >= 0){
        return true
    } else{
        return false
    }
}

main()
