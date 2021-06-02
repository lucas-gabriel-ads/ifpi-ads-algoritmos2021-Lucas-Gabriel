const input = require('prompt-sync')()

const valorA = Number(input('Valor de A: '))
const valorB = Number(input('Valor de B: '))
const valorC = Number(input('Valor de C: '))

if (valorA != 0){
    const delta = Math.pow(valorB, 2) - (4 * valorA * valorC)
    const x1 = (-(valorB) - Math.sqrt(delta)) / (2 * valorA)
    const x2 = (-(valorB) + Math.sqrt(delta)) / (2 * valorA)
    console.log(`S = ${x1.toFixed(3)}, ${x2.toFixed(3)}`)
}else{
    console.log('Error! Valor de A precisa ser diferente de 0!')
}
