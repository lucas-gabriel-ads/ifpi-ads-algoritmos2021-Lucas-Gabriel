const input = require('prompt-sync')()

// Entrada
const velocidade_km = Number(input('Informe a velocidade em km/h: '))

// Processamento
const velocidade_ms = velocidade_km / 3.6 // Convertendo para km/h

// Saída
console.log(velocidade_km, 'km/h equivale a', velocidade_ms.toFixed(1), 'm/s') // Exibindo em Km/h formatado com 1 casa decimal