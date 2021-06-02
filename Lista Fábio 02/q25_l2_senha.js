const input = require('prompt-sync')()

const senha = '1234'
const senha_digitada = input('Digite a senha: ')

if (senha_digitada === senha){
    console.log('Acesso CONCEDIDO')
}else{
    console.log('Acesso NEGADO')
}
