const input = require('prompt-sync')()

// Entrada
const velocidade_ms = Number(input('Digite a velocidade em m/s: ')) // Recebendo a velocidade em m/s

// Processamento
const velocidade_km = velocidade_ms * 3.6 // Calculando a velocidade em k/h (Vk/h = Vm/s * 3.6)

// Saida
console.log(velocidade_ms, 'm/s equivale a', velocidade_km, 'k/h') // Exibindo o resultado da conversão na tela
