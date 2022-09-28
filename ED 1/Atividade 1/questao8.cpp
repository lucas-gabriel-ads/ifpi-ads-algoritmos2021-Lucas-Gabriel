#include <stdio.h>

main() {
	
	int num, primeiro_alg, segundo_alg;
	
	printf("Informe um numero de 2 digitos: ");
	scanf("%i", &num);
	
	primeiro_alg = num / 10;
	segundo_alg = num - (primeiro_alg * 10);
	
	if (primeiro_alg == segundo_alg){
		printf("Para o valor %i os algarismo de dezena e unidade sao IGUAIS!", num);
	}else{
		printf("Para o valor %i os algarismo de dezena e unidade sao DIFERENTES!", num);
	}
}
