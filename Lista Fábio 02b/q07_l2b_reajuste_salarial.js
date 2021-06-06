const input = require('prompt-sync')()

function main(){
    const salario = Number(input('Informe seu salário: R$'))
    if (salario <= 280){
        var porcentagem_aumento = 20
    } else if (salario > 280 && salario <= 700){
        var porcentagem_aumento = 15
    } else if (salario > 700 && salario <= 1500){
        var porcentagem_aumento = 10
    } else{
        var porcentagem_aumento = 5
    }

    const novo_salario = salario + porcentagem(salario, porcentagem_aumento)
    console.log(`Seu salário era de R$ ${salario.toFixed(2)}`)
    console.log(`O percentual de aumento aplicado foi de ${porcentagem_aumento}%`)
    console.log(`O valor aumentado foi de R$ ${porcentagem(salario, porcentagem_aumento).toFixed(2)}`)
    console.log(`O seu novo salário é de R$ ${novo_salario.toFixed(2)}`)
}

function porcentagem(valor, porcentagem){
    return valor * (porcentagem / 100)
}

main()
