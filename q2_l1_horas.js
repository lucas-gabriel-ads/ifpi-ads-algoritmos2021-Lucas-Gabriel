const input = require('prompt-sync')()

// Entradas
const horas = Number(input('Quantas horas? ')) // Recebendo quantidade de horas
const minutos = Number(input('Quantos minutos? ')) // Recebendo quantidade de minutos

// Processamento
const conversao_min = (horas * 60) + minutos // Convertendo horas em minutos e somando

// Saída
console.log(horas, 'Horas e', minutos, 'minutos equivalem a', conversao_min, 'minutos')