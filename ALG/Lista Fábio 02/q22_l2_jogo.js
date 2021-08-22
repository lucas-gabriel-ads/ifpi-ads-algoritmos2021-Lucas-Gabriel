const input = require('prompt-sync')()

const hora_inicio = Number(input('Hora de início: '))
const min_inicio = Number(input('Minuto de início: '))
const hora_fim = Number(input('Hora de término: '))
const min_fim = Number(input('Minuto de término: '))

if(hora_inicio > hora_fim && min_inicio > min_fim){
    var horas_total = (24 - (hora_inicio - hora_fim)) - 1
    var min_total = 60 - (min_inicio - min_fim)
    console.log(`O jogo teve duração de ${horas_total} : ${min_total}.`) 

}else if(hora_inicio > hora_fim && min_inicio < min_fim){
    var horas_total = (24 - (hora_inicio - hora_fim)) - 1
    var min_total = min_fim - min_inicio
    console.log(`O jogo teve duração de ${horas_total} : ${min_tota}.`) 

}else if(hora_inicio < hora_fim && min_inicio > min_fim){
    var horas_total = (hora_fim - hora_inicio) - 1
    var min_total = 60 - (min_inicio - min_fim)
    console.log(`O jogo teve duração de ${horas_total} : ${min_total}.`) 

}else if(hora_inicio < hora_fim && min_inicio < min_fim){
    var horas_total = hora_fim - hora_inicio
    var min_total = min_fim - min_inicio
    console.log(`O jogo teve duração de ${horas_duracao} : ${minutos_duracao}.`) 
}
