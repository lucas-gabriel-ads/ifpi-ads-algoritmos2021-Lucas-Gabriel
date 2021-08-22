const input = require('prompt-sync')()

const num = Number(input('Informe um número: '))

if(num === 2 || num === 3 || num === 5 || num === 7){
    console.log('É primo')
} else if((num % 2 === 0) || (num % 3 === 0) || (num % 5 === 0) || (num % 7 === 0)){
    console.log('Não é primo')
} else{
    console.log('É primo')
}
