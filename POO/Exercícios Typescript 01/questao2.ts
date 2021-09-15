/* 2 - Dada a função soma abaixo, tente executar os scripts das alternativas e exiba os 
eventuais resultados: */

function soma(x: number, y?: any): number {
    return x + y
}

console.log(soma(1, 2)); // Saída : 3
console.log(soma(1, "2")); // Saída :12
console.log(soma(1)); // Saída : NaN