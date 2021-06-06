const input = require('prompt-sync')()

const num = Number(input('Informe um número menor que 1000: '))

const centenas = Math.trunc(num / 100)
const dezenas = Math.trunc((num - (centenas * 100)) / 10)
const unidades = num - (centenas * 100) - (dezenas * 10)

if (centenas === 0 && dezenas == 0 && unidades != 0){
    console.log(`${num} = ${unidades} unidades`)
} else if (centenas === 0 && unidades === 0 && dezenas != 0){
    console.log(`${num} = ${dezenas} dezenas`)
} else if (dezenas === 0 && unidades === 0 && centenas != 0){
    console.log(`${num} = ${centenas} centenas`)
} else if (centenas === 0 && dezenas != 0 && unidades != 0){
    console.log(`${num} = ${dezenas} dezenas e ${unidades} unidades`)
} else if (centenas != 0 && dezenas === 0 && unidades != 0){
    console.log(`${num} = ${centenas} centenas e ${unidades} unidades`)
} else if (centenas != 0 && dezenas != 0 && unidades === 0){
    console.log(`${num} = ${centenas} centenas, e ${dezenas} dezenas`)
} else if (centenas != 0 && dezenas != 0 && unidades != 0){
    console.log(`${num} = ${centenas} centenas, ${dezenas} dezenas e ${unidades} unidades`)
}
