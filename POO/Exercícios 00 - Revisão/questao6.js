const input = require('prompt-sync')()

function main(){
    numeros = []
    soma = 0
    while (true){
        let num = Number(input("Informe um número inteiro (-1 p/ parar): "))
        if (num == -1){
            break
        }else{
            numeros.push(num)
            soma += num
        }
    }
    const media = soma / numeros.length
    console.log(`a média para os valores informados é ${media.toFixed(2)}.`)
}

main()