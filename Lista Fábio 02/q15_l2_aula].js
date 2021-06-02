const input = require('prompt-sync')()

const horas_prof1 = Number(input('Horas aula do primeiro professor: '))
const valor_hora_prof1 = Number(input('Valor que o primeiro professor recebe por hora: R$'))
const horas_prof2 = Number(input('Horas aula do segundo professor: '))
const valor_hora_prof2 = Number(input('Valor que o segundo professor recebe por hora: R$'))

const salario_prof1 = (valor_hora_prof1 * horas_prof1)
const salario_prof2 = (valor_hora_prof2 * horas_prof2)

if (salario_prof1 > salario_prof2){
    console.log('O primeiro professor tem o maior salário')
} else{
    console.log('O segundo professor tem o maior salário')
}
