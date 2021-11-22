/*
1. Crie um array de números em typescript e escreva um código que exibe a soma
dos elementos.
*/

let numeros : number[] = [2, 4, 6, 23, 12];

function soma(numeros : number[]) : number{
    let soma : number = 0;
    for (var i of numeros){
        soma += i;
    }
    return soma;
}

console.log(soma(numeros));
