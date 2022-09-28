#include <stdio.h>

main() {
	
	int num, c, d, u, soma;
	
	printf("Informe um numero inteiro de 3 digitos: ");
	scanf("%i", &num);
	
	c = (num / 100);
	d = ((num - (c * 100)) / 10);
	u = (num - ((c * 100) + (d * 10)));
	soma = c + d + u;
	
	printf("A soma dos algarismos de %i equivale a %i.", num, soma);
}
