/*
2. Crie uma classe Hora que tenha:

    a. Três atributos privados e definidos no construtor chamados hora, minutos e 
    segundos;

    b. Métodos públicos para ler hora, minuto e segundo de forma individual;

    c. Um método público para retorne a hora no formato “hh:mm:ss”.
*/

class Hora{
    constructor(private _hora: number, private _minutos: number, private _segundos: number){}

    get hora(){
        return this._hora;
    }

    get minutos(){
        return this._minutos;
    }

    get segundos(){
        return this._segundos;
    }

    lerHora(): string {
        return `${this._hora}:${this._minutos}:${this._segundos}`;
    }
}

let h: Hora = new Hora(10, 45, 13);
console.log(h.hora);
console.log(h.minutos);
console.log(h.segundos);
console.log(h.lerHora());
