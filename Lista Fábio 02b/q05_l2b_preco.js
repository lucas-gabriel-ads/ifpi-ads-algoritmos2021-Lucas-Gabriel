const input = require('prompt-sync')()

const preco1 = Number(input('Informe o preço do primeiro produto: '))
const preco2 = Number(input('Informe o preço do segundo produto: '))
const preco3 = Number(input('Informe o preço do terceiro produto: '))

if (preco1 <= preco2 && preco1 <= preco3){
    console.log('O primeiro produto deve ser comprado')
} else if (preco2 <= preco3 && preco2 <= preco1){
    console.log('O segundo produto deve ser comprado')
} else{
    console.log('O terceiro produto deve ser comprado')
}
