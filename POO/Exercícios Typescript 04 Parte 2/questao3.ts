/*
3. Atualize a implementação da classe Banco apresentada em sala de acordo com as 
seguintes instruções:
    a. Altere o método inserir para que não seja possível contas com mesmo 
    número;

    b. sacar(String numero, double valor): pesquisa uma conta e realiza uma 
    operação de crédito com o valor passado. 

    c. transferir(String numeroCredito, String numeroDebito, double valor): realiza 
    uma procura por ambas as contas e chama o método transferir de uma 
    delas passando a conta de débito e o valor como parâmetros;

    d. Crie 3 métodos: um que retorne a quantidade de contas, outro que retorne 
    o total de dinheiro depositado em todas as contas. Por fim, crie um método 
    que retorne a média do saldo das contas chamando os dois métodos 
    anteriores;
*/

class Conta1 {
	numero: String;
	saldo: number;

	constructor(numero: String, saldoInicial: number) {
		this.numero = numero;
		this.saldo = saldoInicial;
	}

	sacar(valor : number) : boolean{
        if (valor > this.saldo){
            return false;
        }else{
            this.saldo -= valor;
            return true;
        }
    }

	depositar(valor: number): void {
		this.saldo = this.saldo + valor;
	}

	transferir(contaDestino: Conta1, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}

}

class Banco {
	contas: Conta1[] = [];
	
	inserir(conta: Conta1): void {
		if (this.consultarPorIndice(conta.numero) == -1){
            this.contas.push(conta);
        }
	}
	
	consultar(numero: String): Conta1 | undefined {
		let contaConsultada: Conta1;
		for (let conta of this.contas) {
			if (conta.numero == numero) {
				contaConsultada = conta;
				return contaConsultada;
			}
		}
	}

	consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this.contas.length; i++) {
			if (this.contas[i].numero == numero) {
				indice = i;
				break;
			}
		}
		return indice;
	}

	alterar(conta: Conta1): void {
		let indice: number = this.consultarPorIndice(conta.numero);
		if (indice != -1) {
			this.contas[indice] = conta;
		}
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i+1];
			}

			this.contas.pop();
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
        for (let x = 0; x < this.contas.length; x++){
            ttContas += 1;
        }
        return ttContas;
    }

    totalDinheiro(): number{
        let ttDinheiro: number = 0;

        for (let x: number = 0; x < this.contas.length; x++){
            ttDinheiro += this.contas[x].saldo;
        }
        return ttDinheiro;
    }

    mediaSaldo(): number{
        return this.totalDinheiro()/this.totalContas();
    }
}



let conta1: Conta1 = new Conta1("1", 100);
let conta2: Conta1 = new Conta1("2", 200);
let conta3: Conta1 = new Conta1("3", 300);

let banco: Banco = new Banco();

banco.inserir(conta1);
banco.inserir(conta2);
banco.inserir(conta3);

banco.sacar("2", 50);
console.log(conta2.saldo);

banco.transferir("3", "1", 50);
console.log(conta3.saldo);
console.log(conta1.saldo);

console.log(banco.totalContas());
console.log(banco.totalDinheiro());
console.log(banco.mediaSaldo());