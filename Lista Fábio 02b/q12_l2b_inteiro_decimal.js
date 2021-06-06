const input = require('prompt-sync')()

function main(){
    const num = Number(input('Informe um número: '))
    if (inteiro(num)){
        console.log(`${num} é inteiro`)
    } else{
        console.log(`${num} é um decimal`)
    }
}

function inteiro(num){
    if (Math.trunc(num) === num){
        return true
    }
}

main()
