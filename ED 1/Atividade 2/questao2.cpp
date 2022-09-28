#include <stdio.h>

main() {
	
	int num1, num2, a, b, resto;
	
	printf("Informe um número: ");
	scanf("%i", &num1);
	printf("Informe outro número: ");
	scanf("%i", &num2);
	
	do {
        resto = a % b;

        a = b;
        b = resto;
	
	} while (resto != 0);
	
	
	printf("O MMC de %i %i é %i", num1, num2, ((num1 * num2) / a));
}
