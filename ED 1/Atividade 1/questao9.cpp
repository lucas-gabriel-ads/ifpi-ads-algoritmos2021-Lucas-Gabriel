#include <stdio.h>

main() {
	
	int dia, mes, ano;
	
	printf("Dia: ");
	scanf("%i", &dia);
	printf("Mes: ");
	scanf("%i", &mes);
	printf("Ano: ");
	scanf("%i", &ano);
	
	if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 0){
		printf("%i / %i / %i - DATA INVALIDA!", dia, mes, ano);
	}else{
		printf("%i / %i / %i - DATA VALIDA!", dia, mes, ano);
	}
}
