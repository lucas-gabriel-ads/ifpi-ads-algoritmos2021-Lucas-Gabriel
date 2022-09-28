#include <stdio.h>

main() {
	
	int num1, num2, num3, maior;
	
	printf("Informe um numero inteiro: ");
	scanf("%i", &num1);
	printf("Informe outro numero inteiro: ");
	scanf("%i", &num2);
	printf("Informe outro numero inteiro: ");
	scanf("%i", &num3);
	
	if (num1 > num2 && num1 > num3){
		maior = num1;
	}
	if (num2 > num1 && num2 > num3){
		maior = num2;
	}
	if (num3 > num1 && num3 > num2){
		maior = num3;
    }
    
	printf("Maior: %i", maior);
}
