const input = require('prompt-sync')()

function main(){
    const string = input('Informe a string a ser alterada: ')

    let nova_string = string.replace(/a|e|i|o|u/gi, "")
    
    console.log(nova_string)
}

main()