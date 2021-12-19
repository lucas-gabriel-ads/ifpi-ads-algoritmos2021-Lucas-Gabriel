/*
4. Implemente na classe Banco o método renderJuros(numero: String): number, 
onde:

    a. É passado por parâmetro o número de uma poupança e feita uma consulta 
    para ver se a conta existe. Note que a consulta não se altera sendo Conta 
    ou Poupança;

    b. Caso a poupança seja encontrada, teste se realmente se trata de uma 
    poupança com o operador instanceof, desconsidere a operação caso 
    contrário;

    c. Caso seja, faça um cast e invoque o método renderJuros da própria 
    instância encontrada;

    d. Teste o método da classe Banco passando tanto um número de poupança 
    como de conta passados inseridos anteriormente.

*/

class Conta3 {
	private _numero: String;
	private _saldo: number;

	constructor(numero: String, saldoInicial: number) {
		this._numero = numero;
		this._saldo = saldoInicial;
	}

    get saldo(){
        return this._saldo;
    }

    get numero(){
        return this._numero;
    }

	sacar(valor : number) : boolean{
        if (valor > this._saldo){
            return false;
        }else{
            this._saldo -= valor;
            return true;
        }
    }

	depositar(valor: number): void {
		this._saldo = this._saldo + valor;
	}

	transferir(contaDestino: Conta1, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

}

class Poupanca extends Conta3{
    private _taxaJuros: number;

    constructor(num: String, saldo: number, taxa: number){
        super(num, saldo);
        this._taxaJuros = taxa;
    }

    renderJuros(){
        this.depositar(this.saldo * this._taxaJuros/100);
    }
}

class Banco3 {
	private _contas: Conta3[] = [];
	
    get contas(){
        return this._contas;
    }

	inserir(conta: Conta3): void {
		if (this.consultarPorIndice(conta.numero) == -1){
            this._contas.push(conta);
        }
	}
	
	consultar(numero: String): Conta3 | undefined {
		let contaConsultada: Conta3;
		for (let conta of this._contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				return contaConsultada;
			}
		}
	}

	private consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this._contas.length; i++) {
			if (this._contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	alterar(conta: Conta3): void {
		let indice: number = this.consultarPorIndice(conta.numero);
		if (indice != -1) {
			this._contas[indice] = conta;
		}
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this._contas.length; i++) {
				this._contas[i] = this._contas[i+1];
			}

			this._contas.pop();
		} 
	}

	depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		if (contaConsultada != null) {
			contaConsultada.depositar(valor);
		}
	}

    sacar(numero: string, valor: number): void{
        let contaConsultada = this.consultar(numero);

        if (contaConsultada != undefined) {
			contaConsultada.sacar(valor);
		}
    }

    transferir(numeroCredito: string, numeroDebito: string, valor:number): void{
        let contaCred = this.consultar(numeroCredito);
        let contaDeb = this.consultar(numeroDebito);

        if (contaCred != undefined && contaDeb != undefined){
            contaDeb.transferir(contaCred, valor);
        }
    }

    totalContas(): number{
        let ttContas: number = 0;
        for (let x = 0; x < this._contas.length; x++){
            ttContas += 1;
        }
        return ttContas;
    }

    totalDinheiro(): number{
        let ttDinheiro: number = 0;

        for (let x: number = 0; x < this._contas.length; x++){
            ttDinheiro += this._contas[x].saldo;
        }
        return ttDinheiro;
    }

    mediaSaldo(): number{
        return this.totalDinheiro()/this.totalContas();
    }

    renderJuros(numero: String){
        let contaConsultada = this.consultar(numero);

        if (contaConsultada instanceof Poupanca){
            let poupanca: Poupanca = <Poupanca> contaConsultada;
            poupanca.renderJuros();
        }
    }
}

let b: Banco3 = new Banco3();

b.inserir(new Conta3("1", 100));
b.inserir(new Poupanca("2", 100, 0.5));
b.renderJuros("2");
console.log(b.consultar("2")?.saldo);
b.renderJuros("1");
console.log(b.consultar("1")?.saldo);