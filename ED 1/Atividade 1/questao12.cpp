#include <stdio.h>

main() {
	
	int dia1, dia2, mes1, mes2, ano1, ano2;
	
	printf("Dia: ");
	scanf("%i", &dia1);
	printf("Mes: ");
	scanf("%i", &mes1);
	printf("Ano: ");
	scanf("%i", &ano1);
	printf("Dia: ");
	scanf("%i", &dia2);
	printf("Mes: ");
	scanf("%i", &mes2);
	printf("Ano: ");
	scanf("%i", &ano2);
	
	if (dia1 > 31 || dia1 < 1 || dia2 > 31 || dia2 < 1 || mes1 > 12 || mes1 < 1 || mes2 > 12 || mes2 < 1 || ano1 < 0 || ano2 < 0){
		printf("Data INVALIDA!");
	}else{
		if (ano1 == ano2){
			if (mes1 == mes2){
				if (dia1 > dia2){
					printf("%i / %i / %i e o mais recente.", dia1, mes1, ano1);
				}
				if (dia1 < dia2){
					printf("%i / %i / %i e o mais recente.", dia2, mes2, ano2);
				}
				if (dia1 == dia2){
					printf("Datas IGUAIS!");
				}
			}
			if (mes1 > mes2){
				printf("%i / %i / %i e o mais recente.", dia1, mes1, ano1);
			}
			if (mes1 < mes2){
				printf("%i / %i / %i e o mais recente.", dia2, mes2, ano2);
			}
		}
		if (ano1 > ano2){
			printf("%i / %i / %i e o mais recente.", dia1, mes1, ano1);
		}
		if (ano1 < ano2){
			printf("%i / %i / %i e o mais recente.", dia2, mes2, ano2);
		}
	}
}
