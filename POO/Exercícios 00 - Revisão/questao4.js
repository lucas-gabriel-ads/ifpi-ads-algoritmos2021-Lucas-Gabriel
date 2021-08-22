const input = require('prompt-sync')()

function main(){
    while (true){
        const mes = Number(input('Informe o número do mês (1 a 12): '))
        if (mes > 0 && mes < 13){
            let mes_extenso = ''
            switch (mes){
                case 1:
                    mes_extenso = 'Janeiro'
                    break
                case 2:
                    mes_extenso = 'Feveiro'
                    break
                case 3:
                    mes_extenso = 'Março'
                    break
                case 4:
                    mes_extenso = 'Abril'
                    break
                case 5:
                    mes_extenso = 'Maio'
                    break
                case 6:
                    mes_extenso = 'Junho'
                    break
                case 7:
                    mes_extenso = 'Julho'
                    break
                case 8:
                    mes_extenso = 'Agosto'
                    break
                case 9:
                    mes_extenso = 'Setembro'
                    break
                case 10:
                    mes_extenso = 'Outubro'
                    break
                case 11:
                    mes_extenso = 'Novembro'
                    break
                case 12:
                    mes_extenso = 'Dezembro'
                    break
            }
            console.log(`${mes} equivale ao mês de ${mes_extenso}.`)
            break
        }else{
            console.log('Valor INVALIDO!')
        }
    }
}

main()