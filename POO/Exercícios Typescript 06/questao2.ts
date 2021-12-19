/*
2. Crie uma classe Calculadora com:
    a. Dois tributos privados chamados _op1 e _op2;

    b. Crie um construtor que inicializa os atributos;

    c. Crie um método chamado adicionar que retorna a soma dos dois atributos;

    d. Teste a classe.
*/

class Calculadora{
    private _op1: number;
    private _op2: number;

    constructor(op1: number, op2: number){
        this._op1 = op1;
        this._op2 = op2;
    }

    get op1(): number{
        return this._op1;
    }

    get op2(): number{
        return this._op2;
    }

    adicionar(): number{
        return this._op1 + this._op2;
    }
}

let calc: Calculadora = new Calculadora(13, 12);
console.log(calc.adicionar());
