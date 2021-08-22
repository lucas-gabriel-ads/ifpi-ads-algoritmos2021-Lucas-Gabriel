const input = require('prompt-sync')()

function main() {
    var x_ponto1 = Number(input('Informe a coordenada x do primeiro ponto: '))
    var y_ponto1 = Number(input('Informe a coordenada y do primeiro ponto: '))
    var x_ponto2 = Number(input('Informe a coordenada x do segundo ponto: '))
    var y_ponto2 = Number(input('Informe a coordenada y do segundo ponto: '))

    var base_retangulo = verifica_base(x_ponto1, x_ponto2)
    var altura_retangulo = verifica_altura(y_ponto1, y_ponto2)
    var area_retangulo = base_retangulo * altura_retangulo

    if(base_retangulo !== altura_retangulo && base_retangulo >= 0 && altura_retangulo >= 0 ){
        console.log(`A área do retângulo corresponde a ${area_retangulo}`)

    }else{
        console.log(`Informe os dados corretamente!`)
    }
}

function verifica_base(x1, x2) {
    if(x1 > x2){
        return x1 - x2

    }else if(x2 > x1){
        return x2 - x1

    }else if(x1 === x2){
        return x2
    }
}
function verifica_altura(y1, y2) {
    if(y1 > y2){
        return y1 - y2

    }else if(y2 > y1){
        return y2 - y1

    }else if(y1 === y2){
        return y2

    }
}

main()
