const input = require('prompt-sync')()

const ang1 = Number(input('Digite o primeiro angulo: '))
const ang2 = Number(input('Digite o segundo angulo: '))
const ang3 = Number(input('Digite o terceiro angulo: '))

if (ang1 + ang2 + ang3 === 180){
    if (ang1 < 90 && ang2 < 90 && ang3 < 90){
        console.log('É um triangulo acutangulo')
    } else if (ang1 === 90 || ang2 === 90 || ang3 === 90){
        console.log('É um triangulo retangulo')
    } else if (ang1 > 90 || ang2 > 90 || ang3 > 90){
        console.log('É um triangulo obtusangulo')
    }
} else{
    console.log('Não é um triangulo')
}
