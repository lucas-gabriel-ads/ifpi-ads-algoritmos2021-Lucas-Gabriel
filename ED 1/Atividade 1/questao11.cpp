#include <stdio.h>

main() {
	
	int num1, num2, op;
	float resultado;
	
	printf("Primeiro valor: ");
	scanf("%i", &num1);
	printf("Segundo valor: ");
	scanf("%i", &num2);
	printf("1 - Adicao \n2 - Subtracao \n3 - Multiplicacao \n4 - Divisao \nEscolha uma operacao: ");
	scanf("%i", &op);
	
	switch (op){
		case 1: {
			resultado = num1 + num2;
			printf("%i + %i = %0.1f", num1, num2, resultado);
			break;
		}
		case 2: {
			resultado = num1 - num2;
			printf("%i - %i = %0.1f", num1, num2, resultado);
			break;
		}
		case 3: {
			resultado = num1 * num2;
			printf("%i * %i = %0.1f", num1, num2, resultado);
			break;
		}
		case 4: {
			if (num2 == 0){
				printf("ERRO! Divisao por ZERO!");
			}else{
				resultado = num1 / num2;
				printf("%i / %i = %0.1f", num1, num2, resultado);
			}
			break;
		}
		default: {
			printf("Operacao INVALIDA!");
			break;
		}
	}
}
