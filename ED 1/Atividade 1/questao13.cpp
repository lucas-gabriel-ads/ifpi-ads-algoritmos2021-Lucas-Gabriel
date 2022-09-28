#include <stdio.h>

main() {
	
	int num;
	
	printf("Informe um numero: ");
	scanf("%i", &num);
	
	if (num < 0){
		printf("O numero %i e NEGATIVO.", num);
	}else{
		printf("O numero %i e POSITIVO.", num);
	}
}
