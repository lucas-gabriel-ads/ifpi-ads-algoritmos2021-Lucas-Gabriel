#include <stdio.h>

main(){
	
	int num1, num2, a, b, resto;
	
	printf("Informe um número: ");
	scanf("%i", &num1);
	printf("Informe outro número: ");
	scanf("%i", &num2);
	
	a = num1;
    b = num2;
	
	do {
        
		resto = a % b;

        a = b;
        b = resto;

    } while (resto != 0);
    
    printf("O MDC de %i e %i é %i", num1, num2, a);
}
