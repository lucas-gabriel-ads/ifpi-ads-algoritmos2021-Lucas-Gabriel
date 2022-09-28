#include <stdio.h>

main() {
	
	int num1, num2;
	
	printf("Informe um numero inteiro: ");
	scanf("%i", &num1);
	printf("Informe outro numero inteiro: ");
	scanf("%i", &num2);
	
	if (num1 > num2){
		printf("Maior: %i \nMenor: %i", num1, num2);
	}else{
		printf("Maior: %i \nMenor: %i",  num2, num1);
	}
}
