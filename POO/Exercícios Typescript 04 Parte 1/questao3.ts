/*
3. Declare um array com 10 números e exiba-os em ordem crescente e em ordem
decrescente.
*/

let numbers : number[] = [2, 7, 1, 5, 3, 6, 0, 9, 4, 8];

console.log('Em Ordem Crescente');
console.log(numbers.sort());

console.log('Em Ordem Decrescente');
console.log(numbers.sort().reverse());
