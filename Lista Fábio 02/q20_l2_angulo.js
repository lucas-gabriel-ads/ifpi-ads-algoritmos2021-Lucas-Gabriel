const input = require('prompt-sync')()

const angulo = Number(input('Informe o angulo (de 0° à 360°): '))

if (angulo <= 90){
    console.log('O angulo informado se encontra no primeiro quadrante.')
} else if (angulo > 90 && angulo <= 180){
    console.log('O angulo informado se encontra no segundo quadrante.')
} else if (angulo > 180 && angulo <= 240){
    console.log('O angulo informado se encontra no terceiro quadrante.')
} else{
    console.log('O angulo informado se encontra no quarto quadrante.')
}
