const input = require('prompt-sync')()

// Entradas
const valor_dolar = Number(input('Informe o valor atual do dólar: $')) // Recebendo valor do dólar
const dolares = Number(input('Informe uma quantia em dólares: $')) // Recebendo quantia em dólares a ser convertida em reais

// Processamento
const valor_reais = dolares * valor_dolar // Convertendo para reais

//Saída
console.log('$', valor_dolar, 'dólares convertido em reais fica R$', valor_reais.toFixed(2)) // Exibindo o valor convertido em reais formatado com 2 casas decimais