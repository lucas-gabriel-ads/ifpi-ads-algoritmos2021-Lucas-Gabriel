/*
4. Crie uma implementação que simule um migroblog:

    a. Crie uma classe Postagem e nela:

        a. Crie os atributos:

            1. id do tipo number, representando o identificador da 
            postagem;

            2. texto do tipo string, representando um texto da postagem;

            3. quantidadeCurtidas do tipo number.

        b. Crie um método chamado curtir que incrementa a quantidade 
        curtidas;

        c. Crie um método chamado toString que retorna a concatenação da 
        postagem com a quantidade de curtidas;

    b. Crie uma classe Microblog e nela:

        a. Crie um array de classes Postagem;

        b. Crie um método que inclua uma postagem passada como 
        arâmetro no array de postagens;

        c. Crie um método de excluir uma postagem que recebe um id 
        passado por parâmetro. Para isso, efetue uma busca pelo id nas 
        postagens do array e faça a exclusão de forma análoga à feita na 
        classe Banco;

        d. Crie um método que retorna um array com a postagem mais 
        curtida. 

        e. Crie um método curtir em que se passa um id como parâmetro e a 
        classe microblog pesquisa a postagem e chama seu método curtir
        da própria postagem;

        f. Crie um método toString que retorna a concatenação do “toString”
        de todas as postagens.
*/

class Postagem{
    id: number;
    texto: string;
    quantidadeCurtidas: number;

    constructor(id: number, texto: string, qtdcurt: number){
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = qtdcurt;
    }

    curtir(): void{
        this.quantidadeCurtidas += 1;
    }

    toString(): string{
        return `Postagem: ${this.texto}\nCurtidas: ${this.quantidadeCurtidas}\n`;
    }
}

class Microblog{
    postagens: Postagem[] = [];

    incluir(post: Postagem): void{
        this.postagens.push(post);
    }

    consultarPorIndice(id: number): number {
		let indice: number = -1;
		for (let i: number = 0; i < this.postagens.length; i++) {
			if (this.postagens[i].id == id) {
				indice = i;
				break;
			}
		}
		return indice;
	}

    excluir(id: number): void{
        let ind = this.consultarPorIndice(id);
        for (let x=ind; x<this.postagens.length; x++){
            this.postagens[x] = this.postagens[x + 1];
        }
        this.postagens.pop();
    }

    maisCurtida(): Postagem[]{
        let maisCurt: Postagem = this.postagens[0];

        for (let x=0; x<this.postagens.length; x++){
            if(this.postagens[x].quantidadeCurtidas > maisCurt.quantidadeCurtidas){
                maisCurt = this.postagens[x];
            }
        }
        let arrayMaisCurtida: Postagem[] = [maisCurt];
        return arrayMaisCurtida;
    }

    curtir(id: number): void{
        let ind: number = this.consultarPorIndice(id);
        this.postagens[ind].curtir();
    }

    toString(): string{
        let toString: string = "";

        for (let x=0; x<this.postagens.length; x++){
            toString += this.postagens[x].toString();
        }

        return toString;
    }
}





let post1: Postagem = new Postagem(10, "Hello World!!", 0);
let post2: Postagem = new Postagem(11, "Bom Dia!!", 0);
let post3: Postagem = new Postagem(12, "Boa Tarde!!", 0);
let post4: Postagem = new Postagem(13, "Boa Noite!!", 0);


post1.curtir();
console.log(post1.quantidadeCurtidas);
console.log(post3.toString());

let microblog: Microblog = new Microblog();

microblog.incluir(post1);
microblog.incluir(post2);
microblog.incluir(post3);
microblog.incluir(post4);

microblog.excluir(12);
console.log(microblog.toString());

console.log(microblog.maisCurtida()[0]);

microblog.curtir(13);
microblog.curtir(13);
console.log(microblog.maisCurtida()[0]);

console.log(microblog.toString());
