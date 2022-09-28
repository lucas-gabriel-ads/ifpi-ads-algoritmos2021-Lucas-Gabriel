#include <stdio.h>

main(){
	
	float velocidade_ms, velocidade_kmh;
	
	printf("Informe a Velocidade em Km/h: ");
	scanf("%f", &velocidade_kmh);
	
	velocidade_ms = (velocidade_kmh / 3.6);
	
	printf("%0.1f Km/h equivale a %0.1f m/s.", velocidade_kmh, velocidade_ms);
}
