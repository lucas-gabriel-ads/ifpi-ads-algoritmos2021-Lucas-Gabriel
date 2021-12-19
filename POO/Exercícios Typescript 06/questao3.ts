/*
3. Crie uma classe chamada CalculadoraCientifica que herda da classe Calculadora 
do exercício passado e:

    a. Implemente um método chamado exponenciar que retorne o _op1 elevado 
    ao _op2;

    b. Teste a classe;

    c. Foi necessária alguma modificação em Calculadora para o acesso aos 
    atributos?
*/

class Calculadora2{
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

class CalculadoraCientifica extends Calculadora2{
    constructor(op1: number, op2: number){
        super(op1, op2);
    }

    exponenciar(): number{
        return Math.pow(this.op1, this.op2);
    }
}

let calc2: CalculadoraCientifica = new CalculadoraCientifica(2, 5);
console.log(calc2.exponenciar());

// Foi necessário serem feitos os metodos Get dos atributos op1 e op2 para que pudesse ser usado na classe CalculadoraCientifica.