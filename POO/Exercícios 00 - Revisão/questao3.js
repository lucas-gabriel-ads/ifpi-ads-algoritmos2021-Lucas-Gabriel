const input = require('prompt-sync')()

function main(){
    const num1 = Number(input('Primeiro valor: '))
    const num2 = Number(input('Segundo valor: '))
    const num3 = Number(input('Terceiro valor: '))
    let menor = 0

    if (num1 < num2 && num1 < num3){
        menor = num1
    }else if(num2 , num1 && num2 < num3){
        menor = num2
    }else{
        menor = num3
    }
    console.log(`O menor valor é ${menor}`)
}

main()