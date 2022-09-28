#include <stdio.h>

main() {
	float valor_dolar, dolares, real;
	
	printf("Informe o valor atual do Dolar: R$");
	scanf("%f", &valor_dolar);
	printf("Informe um valor em Dolares para ser convertido em reais: $");
	scanf("%f", &dolares);
	
	real = (valor_dolar * dolares);
	
	printf("$ %0.2f Dolares equivalem a R$ %0.2f Reais.", dolares, real);
}
