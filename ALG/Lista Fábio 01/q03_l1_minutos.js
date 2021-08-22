const input = require('prompt-sync')()


// Entradas
const minutos = Number(input('Valor em minutos: ')) // Recebendo valor em minutos

// Processamento
const conversao_horas = Math.trunc(minutos/60) // Convertendo os minutos para horas
const minutos_restantes = minutos - (conversao_horas * 60) // Calculando os minutos restantes depois da conversão pra horas

// Saida
console.log(minutos, 'equivalem a', conversao_horas, 'horas e', minutos_restantes, 'minutos.')
