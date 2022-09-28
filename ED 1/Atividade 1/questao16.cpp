#include <stdio.h>

main() {
	
	float preco1, preco2, preco3;
	
	printf("Informe o valor do primeiro produto: R$");
	scanf("%f", &preco1);
	printf("Informe o valor do segundo produto: R$");
	scanf("%f", &preco2);
	printf("Informe o valor do terceiro produto: R$");
	scanf("%f", &preco3);
	
	if (preco1 <= preco2 && preco1 <= preco3){
		printf("O primeiro produto deve ser comprado. R$ %0.2f", preco1);
	}
	if (preco2 <= preco1 && preco2 <= preco3){
		printf("O segundo produto deve ser comprado. R$ %0.2f", preco2);
	}
	if (preco3 <= preco1 && preco3 <= preco2){
		printf("O terceiro produto deve ser comprado. R$ %0.2f", preco3);
	}
}
