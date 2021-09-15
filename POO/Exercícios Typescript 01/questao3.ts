/*3) Crie uma enum com as siglas dos estados “PI”, “CE”, “MA” e implemente as duas
alternativas abaixo:
a) Crie um laço usando for para imprimir esses valores;*/

enum siglas {PI, CE, MA}

for (let i = 0; i < 3; i++){
    console.log(siglas[i])
}


//b) Crie um laço que imprima os índices dessa enum e diga o que aconteceu.

let contador = 0
for (let i = 0; i < 3; i++){
    switch (contador){
        case 0:                             // Estrutura switch verifica o valor da variável contador e imprime o índice de cada um dos itens do enum siglas
            console.log(siglas.PI)          // para cada uma das repetições do laço for.
            break
        case 1:
            console.log(siglas.CE)
            break
        case 2:
            console.log(siglas.MA)
            break
    }
    contador += 1
}
