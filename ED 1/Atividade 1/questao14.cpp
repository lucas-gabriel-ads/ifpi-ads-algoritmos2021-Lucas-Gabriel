#include <stdio.h>

main() {
	
	char letra;
	
	printf("Informe uma letra F ou M: ");
	scanf("%c", &letra);
	
	switch(letra) {
		case 'F': {
			printf("F - Feminino");
			break;
		}
		case 'f': {
			printf("F - Feminino");
			break;
		}
		case 'M': {
			printf("M - Masculino");
			break;
		}
		case 'm': {
			printf("M - Masculino");
			break;
		}
		default: {
			printf("Sexo INVALIDO");
			break;
		}
	}
}
