const input = require('prompt-sync')()

//Entrada
const binario = input('Informe um número ninário de 4 dígitos: ')

//Processamento
var num_decimal = 0
for (var contador = 0; contador < 4; contador ++) {
    num_decimal += Math.pow(2, contador) * binario[binario.length - contador - 1]
}

//Saída
console.log(binario, 'equivale a', num_decimal, 'em decimal')
