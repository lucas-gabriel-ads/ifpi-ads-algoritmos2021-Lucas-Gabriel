/*
3. Altere as implementações da classe Banco das aulas anteriores para que:

    a. O array de contas seja privado;

    b. O método consulta por índice seja privado;

    c. Os demais métodos sejam públicos.

4. Altere também a sua classe Conta dos exercícios anteriores para:

    a. Ter atributos privados e métodos “get” para leitura; 

    b. Verifique se sua implementação da classe Banco e os testes precisarão ser 
    adaptados para ter métodos de leitura e escrita, visto que os atributos que 
    agora são privados.
*/

class Conta2 {
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

class Banco2 {
	private _contas: Conta1[] = [];
	
    get contas(){
        return this._contas;
    }

	inserir(conta: Conta1): void {
		if (this.consultarPorIndice(conta.numero) == -1){
            this._contas.push(conta);
        }
	}
	
	consultar(numero: String): Conta1 | undefined {
		let contaConsultada: Conta1;
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

	alterar(conta: Conta1): void {
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
}

let cont1: Conta2 = new Conta2("1", 100);
let cont2: Conta2 = new Conta2("2", 200);

console.log(cont1.saldo);
console.log(cont2.saldo);
//cont1.saldo = -1000;
//cont2.saldo = -1000;

let banc: Banco2 = new Banco2();
banc.inserir(cont1);
banc.inserir(cont2);

console.log(banc.contas);
//banc.contas = [];
banc.transferir("1", "2", 50);
console.log(cont1.saldo);
console.log(cont2.saldo);