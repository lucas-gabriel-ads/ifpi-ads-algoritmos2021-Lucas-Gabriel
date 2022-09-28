#include <stdio.h>

main() {
	
	char letra;
	
	printf("Informe uma letra: ");
	scanf("%c", &letra);
	
	if (letra == 'A' || letra == 'a' || letra == 'E' || letra == 'e' || letra == 'I' || letra == 'i' || letra == 'O' || letra == 'o' || letra == 'U' || letra == 'u'){
		printf("A letra %c e uma VOGAL!", letra);
	}else{
		printf("A letra %c e uma CONSOANTE!", letra);
	}
}
