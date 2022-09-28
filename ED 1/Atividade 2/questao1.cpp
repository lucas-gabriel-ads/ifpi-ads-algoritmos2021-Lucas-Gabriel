#include <stdio.h>

main() {
	
	int num, i, contador;
	
	printf("Informe um número para saber os seus divisores (informe): ");
	scanf("%i", &num);
	while (num != 0){
		contador = 0;
		printf("O número informado foi %i\n", num);
		printf("Seus divisores são: \n");
		for(i = num; i > 0; i--){
			if (num % i == 0){
				printf("%i\n", i);
			}
		}
		printf("Informe um número para saber os seus divisores (0 p/ PARAR): ");
		scanf("%i", &num);
	}
}
