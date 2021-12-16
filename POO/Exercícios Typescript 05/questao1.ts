/*
1. Crie uma classe Calculadora que tenha:

    a. Dois atributos privados (operando1 e 2) do tipo number;

    b. Dois métodos públicos, cada um representando uma operação básica;

    c. Um construtor onde são passados os operandos e que esses inicializam os 
    atributos;

    Teste a classe calculadora e seus métodos. Tente acessar os atributos 
    diretamente e verifique o que acontece.
*/

class Calculadora{
    private _operando1: number;
    private _operando2: number;

    constructor(num1: number, num2: number){
        this._operando1 = num1;
        this._operando2 = num2;
    }

    soma(): number{
        return this._operando1 + this._operando2;
    }

    multplicacao(): number{
        return this._operando1 * this._operando2;
    }
}

let calc: Calculadora = new Calculadora(12, 10);
console.log(calc.soma());
console.log(calc.multplicacao());

//calc._operando1 = 28;
//calc._operando2 = 11;