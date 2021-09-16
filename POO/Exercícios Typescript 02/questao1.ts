/* 1- Converta em arrow function a seguinte função:

function ehPar(n: number) : boolean {
    return (n % 2) == 0;
}

*/

var ehPar = (n : number) => n % 2 == 0;

console.log(ehPar(4))
console.log(ehPar(5))