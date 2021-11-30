/*
2. Crie uma classe chamada triângulo que:
    a. Possua 3 atributos inteiros representando os lados;

    b. Crie um método que retorna true se os lados formarem um retângulo de 
    acordo com a regra: |b-c| < a < b+c;

    c. Crie 3 métodos : ehIsoceles(), ehEquilatero() e ehEscaleto() que retorne 
    verdadeiro caso o triângulo seja um dos tipos relacionados ao nome do 
    método. Eles devem chamar antes de tudo, o método da questão b. e 
    retornar false se esse método já retornar false também;
*/

class Triangulo{
    ladoa: number;
    ladob: number;
    ladoc: number;

    constructor(ladoa: number, ladob: number, ladoc: number){
        this.ladoa = ladoa;
        this.ladob = ladob;
        this.ladoc = ladoc;
    }

    formaTriangulo(): boolean{
        if (this.ladob - this.ladoc < 0){
            if ((this.ladob - this.ladoc)*(-1) < this.ladoa && this.ladoa < (this.ladob + this.ladoc)){
                return true;
            }else{
                return false;
            }
        }else{
            if (this.ladob - this.ladoc < this.ladoa && this.ladoa < (this.ladob + this.ladoc)){
                return true;
            }else{
                return false;
            }
        }
    }

    ehIsoceles(): boolean{
        if (this.formaTriangulo() == false){
            return false;
        }else{
            if (this.ladoa == this.ladob || this.ladoa == this.ladoc || this.ladob == this.ladoc){
                return true;
            }else{
                return false;
            }
        }
    }

    ehEquilatero(): boolean{
        if (this.formaTriangulo() == false){
            return false;
        }else{
            if (this.ladoa == this.ladob && this.ladob == this.ladoc){
                return true;
            }else{
                return false;
            }
        }
    }

    ehEscaleto(): boolean{
        if (this.formaTriangulo() == false){
            return false;
        }else{
            if (this.ladoa != this.ladob && this.ladob != this.ladoc && this.ladoc != this.ladoa){
                return true;
            }else{
                return false;
            }
        }
    }
}



let t1: Triangulo = new Triangulo(21,13,18);
console.log(t1.formaTriangulo());
console.log(t1.ehEquilatero());
console.log(t1.ehEscaleto());
console.log(t1.ehIsoceles());