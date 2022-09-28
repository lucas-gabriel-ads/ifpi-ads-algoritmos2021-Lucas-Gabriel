#include <stdio.h>

main() {
	
	char turno;
	
	printf("[M] - Matutino \n[V] - Vespertino \n[N] - Noturno \nInforme seu turno: ");
	scanf("%c", &turno);
	
	switch(turno){
		case 'M': {
			printf("Bom Dia!");
			break;
		}
		case 'm': {
			printf("Bom Dia!");
			break;
		}
		case 'V': {
			printf("Bom Tarde!");
			break;
		}
		case 'v': {
			printf("Bom Tarde!");
			break;
		}
		case 'N': {
			printf("Bom Noite!");
			break;
		}
		case 'n': {
			printf("Bom Noite!");
			break;
		}
		default: {
			printf("Valor Invalido");
			break;
		}
	}
}
