const input = require('prompt-sync')()

function main(){
    const numero = input("Informe um número inteiro: ")
    const digito = input("Informe o dígito a ser contado (0 a 9): ")
    if (Number(digito) < 0 || Number(digito) > 9){
        console.log("Digito INVALIDO")
    }else{
        console.log(`Para o número ${numero} temos ${conta_digitos(numero, digito)} vezes a repetição do digito ${digito}`)
    }
}

function conta_digitos(numero, digito){
    contador = 0
    for (let index = 0; index < numero.length; index++){
        if (numero[index] == digito){
            contador += 1
        }
    }
    return contador
}

main()