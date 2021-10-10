/*
1. Qual a diferença entre objetos e classes? Exemplifique.

    Classes são modelos a partir dos quais são criados os objetos (instanciados).
    - Receita (classe) e bolo (objeto).

2. De forma breve, conceitue atributos e métodos. Pesquise e exemplifique um
exemplo de objeto que possua atributos e métodos (notação livre).

    Atributos são características e propriedades que os objetos possuem.
    - Jogador: Nome, numero, velocidade;
    Métodos são comportamentos de um objeto ou ações que um objeto pode realizar.
    - Jogador: chutar, correr, efetuar passe.

3. A abstração visa focar no que é importante para um sistema. Você concorda que
um atributo de uma pessoa pode ser importante ou não dependendo do contexto
do sistema. Enumere na tabela abaixo contextos/sistemas distintos em que os
atributos abaixo seriam ou não relevantes:
                            |    Importante             |      Não Importante
    Peso                    |    Boxe                   |      Sistema Bancário
    Tipo CNH                |    Uber                   |      Sistema de Supermercado
    Tipo Sanguineo          |    Sistema Hospitalar     |      Sisetma Bancário
    Habilidade Destra       |    Tocar violão           |      Sistema Bancário
    Percentual de Gordura   |    Sistema de Frigorífico |      Sistema Bancário
    Saldo Conta             |    Sistema Bancário       |      Sistema Hospitalar
    Etnia                   |    Sistema de Cotas(ENEM) |      Sistema de Supermercado

4. Considerando os objetos Pessoa e Conta:
    a. Seria interessante em um sistema bancário um objeto "conta" possuir uma
    "pessoa" como um atributo interno representando o titular da conta?
        Acho que seria mais viável um atributo dentro de "pessoa" armazenando a/as "conta"(s).
    
    b. Olhando no sentido inverso, seria interessante uma pessoa possuir mais de
    uma conta como atributo? Que elemento da programação estruturada melhor
    representaria o conjunto de contas de uma pessoa?
        Utilizando um Array de objetos do tipo "conta" como atributo de "pessoa".

5. Identifique pelo menos 5 objetos de um sistema de controle acadêmico. Ex: aluno.

    Aluno, Professor, Setores do campus, Cursos, Turmas.

6. Imagine um jogo qualquer. Identifique o máximo de objetos possíveis e eventuais
características (atributos) e comportamentos (métodos) que os mesmos poderiam
ter.

    Jogo de corrida:
    carro:  Nome, marca, cor, modelo, preço;
            Acelerar, frear, fazer curva, derrapar, soltar boost;
    
    pista:  Nome, numero de voltas, condição climática;
            Gerar obstáculos, gerar boost coletáveis.

7. Considerando o exemplo da classe Retangulo dos slides, implemente um método
adicional chamado que calcule o perímetro do retângulo e altere a classe
TestaRetangulo para exibir o cálculo do perímetro.

*/
class Retangulo {
    l1: number = 0;
    l2: number = 0;

    calculaArea(): number {
        return this.l1 * this.l2;
    }

    calculaPerimetro(): number {
        return (this.l1 * 2) + (this.l2 * 2)
    }
}

let r : Retangulo = new Retangulo();
r.l1 = 15
r.l2 = 10
console.log(r.calculaPerimetro())

/*

8. Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que
calculam a área e o perímetro. Instancie um objeto dessa classe, atribua um valor
ao raio e exiba a área e o perímetro chamando os dois métodos definidos.

*/
class Circulo {
    raio : number = 0;

    calculaArea(): number{
        return 3.14 * (Math.pow(this.raio, 2))
    }

    calculaPerimetro(): number{
        return 2 * 3.14 * this.raio
    }
}

let c : Circulo = new Circulo();
c.raio = 12
console.log(c.calculaArea())
console.log(c.calculaPerimetro())

/*

9. Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e
valorDebitos. Crie um método chamado saldo() que retorna/calcula a diferença
entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize os dois
atributos e exiba o resultado do método saldo().

*/
class SituacaoFinanceira {
    valorCreditos : number = 0;
    valorDebitos : number = 0;

    saldo(): number{
        return this.valorCreditos - this.valorDebitos
    }
}

let a : SituacaoFinanceira = new SituacaoFinanceira();
a.valorCreditos = 1225
a.valorDebitos = 975.15
console.log(a.saldo())
