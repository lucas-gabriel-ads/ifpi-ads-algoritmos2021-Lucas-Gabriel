const input = require('prompt-sync')()

function main(){
    const letra = input('Informe uma letra: ')
    if (vogal(letra)){
        console.log(`${letra} é uma vogal`)
    } else{
        console.log(`${letra} é uma consoante`)
    }
}

function vogal(letra){
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
        return true
    } else{
        return false
    }
}

main()
