/*
4. Declare uma string com o texto “Instituto Federal do Piauí” e use métodos específicos
para:
    a. Exibir a string toda em maiúsculo;
    b. Retornar o caractere da posição 10;
    c. Retornar a última posição da vogal “o”;
    d. Dividir a frase em um array de strings tendo como delimitador os caracteres de
    espaço.
*/

let string : string = "Instituto Federal do Pauí";

console.log(string.toLocaleUpperCase());

console.log(string.charAt(10));

console.log(string.indexOf('o', string.indexOf('o') + 1));

let stringSplit : string[] = string.split(' ');
console.log(stringSplit);