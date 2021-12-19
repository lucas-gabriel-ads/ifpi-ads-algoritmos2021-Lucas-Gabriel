/*
5. Suponha duas classes Produto e ProdutoPerecivel. Produto tem atributos privados
_id, _descricao, _quantidade e _valor. Já ProdutoPerecivel tem as mesmas 
características de Produto, porém possui a mais um atributo chamado 
_dataValidade (https://www.javatpoint.com/typescript-date-object). 
Produto possui dois métodos: repor e darBaixa, onde ambos somam e 
subtraem uma quatidade passada por parâmetro do atributo quantidade. Além 
disso, um produto perecível possui um método que diz se um produto está válido 
ou não comparando sua data de validade com a data atual.

Dessa forma implemente:

    a. Usando herança, as duas classes Produto e ProdutoPerecivel;

    b. Uma classe chamada Estoque que possui um atributo privado que é um 
    array de produtos (Produto ou ProdutoPerecivel); 

    c. Métodos para Inserir, consultar, excluir produtos na classe estoque;

    d. Crie validações para não deixar serem incluídos produtos com mesmo id ou 
    mesmo nome;

    e. Os métodos repor e darBaixa, onde após uma consulta são chamados os 
    métodos da classe produto para finalmente alterar a quantidade;

    f. Um método que liste todos os produtos perecíveis vencidos.
*/

class Produto{
    private _id: String;
    private _desc: String;
    private _qtd: number;
    private _valor: number;

    constructor(id: String, desc: String, qtd: number, valor: number){
        this._id = id;
        this._desc = desc;
        this._qtd = qtd;
        this._valor = valor;
    }

    get id(){
        return this._id;
    }

    get nome(){
        return this._desc;
    }

    get qtd(){
        return this._qtd;
    }

    get valor(){
        return this._valor;
    }

    repor(qtd: number){
        this._qtd += qtd;
    }

    darBaixa(qtd: number){
        this._qtd -= qtd;
    }
}

class ProdutoPerecivel extends Produto{
    private _dtValidade: Date;

    constructor(id: String, desc: String, qtd: number, valor: number, dtVal: string){
        super(id, desc, qtd, valor);
        dtVal.split(",")
        this._dtValidade = new Date(dtVal);
    }

    get dt(){
        return this._dtValidade;
    }

    estaValido(): boolean{
        let dtAtual: Date = new Date();

        if (this._dtValidade > dtAtual){
            return true;
        }else{
            return false;
        }
    }

    toString(): string{
        return `ID: ${this.id}\nDescrição: ${this.nome}\nQuantidade: ${this.qtd}\nValor: R$${this.valor}\n`;
    }
}

class Estoque{
    private _produtos: Produto[] = [];

    inserir(produto: Produto): boolean{
        for (let x = 0; x<this._produtos.length; x++){
            if (this._produtos[x].id == produto.id || this._produtos[x].nome == produto.nome){
                return false
            }
        }
        this._produtos.push(produto);
        return true;
    }

    consultar(id: String): Produto | undefined{
        for(let p of this._produtos){
            if (p.id == id){
                return p;
            }
        }
    }

    private consultarPorIndice(id: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this._produtos.length; i++) {
			if (this._produtos[i].id == id) {
				indice = i;
				break;
			}
		}
		return indice;
	}

    excluir(id: String){
        let indice: number = this.consultarPorIndice(id);
		
		if (indice != -1) {
			for (let i: number = indice; i < this._produtos.length; i++) {
				this._produtos[i] = this._produtos[i+1];
			}
			this._produtos.pop();
		}
    }

    repor(id: String, num: number){
        let indice = this.consultarPorIndice(id);

        this._produtos[indice].repor(num);
    }

    darBaixa(id: String, num: number){
        let indice = this.consultarPorIndice(id);

        if (this._produtos[indice].qtd >= num){
            this._produtos[indice].darBaixa(num);
        }
    }

    produtosvencidos(): String{
        let vencidos: string = "";

        for (let p of this._produtos){
            if (p instanceof ProdutoPerecivel){
                if(p.estaValido() == false){
                    vencidos += p.toString();
                }
            }
        }
        return vencidos;
    }
}

let p1: ProdutoPerecivel = new ProdutoPerecivel("1", "Queijo", 23, 15, "2022/12/25");
let p2: ProdutoPerecivel = new ProdutoPerecivel("2", "Biscoito", 49, 1.50, "2022/11/25");
let p3: ProdutoPerecivel = new ProdutoPerecivel("3", "Manteiga", 37, 4, "2020/12/25");
let p4: Produto = new Produto("4", "Vassoura", 30, 7);
let p5: Produto = new Produto("5", "Sabão", 44, 2);

let estoque: Estoque = new Estoque();

estoque.inserir(p1);
estoque.inserir(p2);
estoque.inserir(p3);
estoque.inserir(p4);
estoque.inserir(p5);

console.log(estoque.produtosvencidos());