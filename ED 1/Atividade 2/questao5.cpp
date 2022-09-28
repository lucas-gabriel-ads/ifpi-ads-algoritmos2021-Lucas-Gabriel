#include <stdio.h>

main() {
	
	int num, contador;
	
	printf("Informe um número: ");
	scanf("%i", &num);
	
	if (num == 0){
		contador = 1;
	}else{
		contador = 0;
		while (num != 0){
            num = num / 10;
			contador += 1;
    	}
	}
	printf("%i Digitos", contador);
        
}
