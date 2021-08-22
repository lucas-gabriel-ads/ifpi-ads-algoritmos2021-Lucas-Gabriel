const input = require('prompt-sync')()

function main(){
    const valor_hora = Number(input('informe o valor cobrado por hora: R$'))
    const horas_trabalhadas = Number(input('Quantidade de horas trabalhadas no mês: '))

    const salario_bruto = valor_hora * horas_trabalhadas
    if (salario_bruto <= 900){
        var porcentagem_ir = 0
    } else if (salario_bruto <= 1500){
        var porcentagem_ir = 5
    } else if (salario_bruto <= 2500){
        var porcentagem_ir = 10
    } else{
        var porcentagem_ir = 20
    }

    calcula_imposto(salario_bruto, porcentagem_ir)
}

function calcula_imposto(salario_bruto, porcentagem_ir){
    const ir = salario_bruto * porcentagem_ir / 100
    const inss = salario_bruto * 0.1
    const fgts = salario_bruto * 0.11
    const total_descontos = ir + inss
    console.log(`Salário Bruto                         : R$ ${salario_bruto.toFixed(2)}`)
    console.log(`(-) IR(${porcentagem_ir}%)                            : R$ ${ir.toFixed(2)}`)
    console.log(`(-) INSS (10%)                        : R$ ${inss.toFixed(2)}`)
    console.log(`FGTS (11%)                            : R$ ${fgts.toFixed(2)}`)
    console.log(`Total de descontos                    : R$ ${total_descontos.toFixed(2)}`)
    console.log(`Salário Liquido                       : R$ ${(salario_bruto - total_descontos).toFixed(2)}`)
}

main()
