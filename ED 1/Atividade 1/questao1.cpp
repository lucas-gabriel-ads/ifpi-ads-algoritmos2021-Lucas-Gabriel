#include <stdio.h>

main(){
	
	float velocidade_ms, velocidade_kmh;
	
	printf("Informe a Velocidade em m/s: ");
	scanf("%f", &velocidade_ms);
	
	velocidade_kmh = (velocidade_ms * 3.6);
	
	printf("%0.1f m/s equivale a %0.1f Km/h.", velocidade_ms, velocidade_kmh);
}

