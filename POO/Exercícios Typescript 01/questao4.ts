enum DiasSemana {Segunda, Terca, Quarta, Quinta, Sexta, Sabado, Domingo}

namespace DiasSemana {
    export function idDiaUtil(DiasSema : DiasSemana) : boolean{
        if (DiasSema == 5 || DiasSema == 6){
            return false
        }else{
            return true
        }
    }
}

let dia : DiasSemana = DiasSemana.Sabado
console.log(DiasSemana.idDiaUtil(dia))