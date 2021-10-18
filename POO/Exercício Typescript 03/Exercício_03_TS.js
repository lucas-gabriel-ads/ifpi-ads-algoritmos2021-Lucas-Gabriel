"use strict";
/*
1. Suponha uma classe Hotel que sirva apenas para guardar a quantidade de
solicitações de reservas feitas conforme abaixo:

class Hotel {
    quantReservas : number;
    adicionarReserva() : void {
        quantReservas++;
    }
}

Podemos afirmar que haverá um problema de compilação, pois a variável inteira não
foi inicializada previamente? Justifique.
    - Sim haverá um problema na compilação pois a propriedade 'quantReservas' não tem
    nenhum inicializador e não está definitivamente atribuída no construtor.

2. Ainda sobre a classe do exemplo anterior, considere o método main abaixo:
    
    let hotel : Hotel = new Hotel(2);
    console.log(hotel.quantReservas);

Adicione o construtor que aceite um parâmetro inteiro e faça a inicialização do atributo
quantReservas.
*/
class Hotel {
    constructor(quantReservas) {
        this.quantReservas = quantReservas;
    }
    adicionarReserva() {
        this.quantReservas++;
    }
}
let hotel = new Hotel(2);
console.log(hotel.quantReservas);
/*
3. Considere a classe Radio e as instruções fazem seu uso abaixo::

class Radio {
    volume : number;
    constructor(volume : number) {
        this.volume = volume;
    }
}

let r : Radio = new Radio();
r.volume = 10;

Justifique o erro de compilação e proponha uma solução.
    - Como a função possui um construtor, para definir o valor de 'volume', o valor deve
    ser atribuído na instanciação do objeto.
*/
class Radio {
    constructor(volume) {
        this.volume = volume;
    }
}
let radio = new Radio(10);
/*
4. Considerando o uso da classe Conta apresentada em aula e seu uso abaixo:

let c1 : Conta = new Conta("1",100);
let c2 : Conta = new Conta("2",100);
c1 = c2;
c1.sacar(10);
c1.tranferir(c2,50);

console.log(c1.saldo);
console.log(c2.saldo);

a. Qual o resultado dos dois "prints"? Justifique sua resposta.
    - O resultado dos dois prints é 90 pois c1 e c2 estão apontando
    para o mesmo endereço de memória ou seja, para o mesmo objeto,
    portanto uqalquer alteração em c1 e/ou c2 resultará na alteração
    de ambos.

b. O que acontece com o objeto para o qual a referência c1 aponta?
    - O objeto que era referenciado por c1 é perdido.

5. Crie uma classe chamada Jogador e nela:

a. Crie 3 atributos inteiros representando força, nível e pontos atuais;

b. Crie um construtor no qual os 3 parâmetros são passados e inicialize os
respectivos atributos;

c. Crie um método que calcule os pontos relativos a um ataque que são
calculados pela multiplicação de força pelo nível;

d. Crie um método chamado atacar em que é passado um outro jogador como
parâmetro e é feita a subtração de pontos de tal jogador baseado na
quantidade de pontos do jogador atual (“this”).

e. Avalie em com testes dois jogadores instanciados e inicializados através do
construtor. Utilize o método de ataque de cada jogador e ao final, verifique
qual jogador tem mais pontos.
*/
class Jogador {
    constructor(forca, nivel, pontos) {
        this.forca = forca;
        this.nivel = nivel;
        this.pontos_atuais = pontos;
    }
    pontos_ataque() {
        return this.forca * this.nivel;
    }
    atacar(jogador) {
        jogador.pontos_atuais -= this.pontos_ataque();
    }
}
let j1 = new Jogador(5, 3, 100);
let j2 = new Jogador(7, 2, 50);
j1.atacar(j2);
j2.atacar(j1);
console.log(j1.pontos_atuais);
console.log(j2.pontos_atuais);
/*
6. Altere a classe conta dos slides conforme as instruções abaixo:

a. Altere o método sacar de forma que ele retorne verdadeiro ou falso. Caso o
saque deixe saldo negativo, o mesmo não será realizado, retornando falso;

b. Altere o método transferir() para que o mesmo use os métodos sacar() e
depositar(). Visto pelo prisma da "proteção do saldo", chamar outros
métodos em vez de acessar o saldo diretamente é mais seguro?

c. Altere o método transferir() para que retorne também um valor lógico e que
não seja feita a transferência caso o sacar() na conta origem não seja
satisfeito;

d. Verifique as diferentes operações implementadas.
*/
class Conta {
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor > this.saldo) {
            return false;
        }
        else {
            this.saldo -= valor;
            return true;
        }
    }
    depositar(valor) {
        this.saldo += valor;
    }
    transferir(contaNova, valor) {
        if (this.sacar(valor) == false) {
            return false;
        }
        else {
            this.sacar(valor);
            contaNova.depositar(valor);
            return true;
        }
    }
}
let c1 = new Conta('1', 100);
let c2 = new Conta('2', 200);
console.log(c1.sacar(150));
console.log(c1.sacar(30));
console.log(c1.transferir(c2, 100));
console.log(c1.transferir(c2, 50));
console.log(c1.saldo);
console.log(c2.saldo);
/*
7. Crie uma classe chamada Produto e nela:

a. Crie os atributos codigo, descricao, valor e um construtor que os inicialize;

b. Crie os métodos baixar(quantidade : number) e repor(quantidade : number)
que reduzem e incrementam a quantidade disponível do produto;

c. Crie um atributo quantidadeMinima e reescreva o método baixar para que
não seja possível realizar a baixa caso a operação deixe a quantidade
abaixo da quantidade mínima;

d. Crie um método da classe Produto chamado reajusta(taxa : number) que
reajusta em x% o valor do produto.

e. Crie um método chamado toString() que retorna a representação textual do
produto concatenando todos os atributos.

f. Crie um método equals(Produto produto) que retorna true ou false se o
produto passado como parâmetro possui o mesmo código;

g. Verifique as diferentes operações implementadas com testes.
*/
class Produto {
    constructor(codigo, descricao, valor, qD, qM) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.valor = valor;
        this.quantidadeDisponivel = qD;
        this.quantidadeMinima = qM;
    }
    baixar(quantidade) {
        if (quantidade > (this.quantidadeDisponivel - this.quantidadeMinima)) {
            return false;
        }
        else {
            this.quantidadeDisponivel -= quantidade;
            return true;
        }
    }
    repor(quantidade) {
        this.quantidadeDisponivel += quantidade;
    }
    reajusta(taxa) {
        this.valor += (taxa / 100) * this.valor;
    }
    toString() {
        console.log("Código                : ", this.codigo);
        console.log("Descrição             : ", this.descricao);
        console.log("Valor                 : ", this.valor);
        console.log("Quantidade Disponível : ", this.quantidadeDisponivel);
        console.log("Quantidade Mínima     : ", this.quantidadeMinima);
    }
    equals(produto) {
        if (produto.codigo == this.codigo) {
            return true;
        }
        else {
            return false;
        }
    }
}
let p1 = new Produto("a1", "cadeira", 25.50, 35, 10);
let p2 = new Produto("b1", "mesa", 54.90, 25, 5);
let p3 = new Produto("a1", "lustre", 30, 50, 15);
console.log(p1.baixar(26));
p2.baixar(10);
console.log(p2.quantidadeDisponivel);
p2.repor(5);
console.log(p2.quantidadeDisponivel);
console.log(p3.valor);
p3.reajusta(12);
console.log(p3.valor);
p3.reajusta(-8);
console.log(p3.valor);
p1.toString();
console.log(p1.equals(p2));
console.log(p1.equals(p3));
