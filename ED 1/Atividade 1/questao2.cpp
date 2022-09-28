#include <stdio.h>

main() {
	
	int horas, min, soma;
	
	printf("Informe um valor de horas: ");
	scanf("%i", &horas);
	printf("Informe um valor de minutos: ");
	scanf("%i", &min);
	
	soma = ((horas * 60) + min);
	
	printf("%i horas e %i minutos equivalem a %i minutos!", horas, min, soma);
}
