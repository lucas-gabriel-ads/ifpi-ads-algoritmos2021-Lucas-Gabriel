#include <stdio.h>

main() {
	
	float nota1, nota2, media, notafinal, mediafinal;
	
	printf("Informe a sua 1° nota: ");
	scanf("%f", &nota1);
	printf("Informe a sua 2° nota: ");
	scanf("%f", &nota2);
	
	media = (nota1 + nota2) / 2;
	
	if (media >= 7){
		printf("APROVADO! Media: %0.1f", media);
	}else{
		printf("O aluno deve fazer Prova Final! \nInforme a nota da Prova Final: ");
		scanf("%f", &notafinal);
		
		mediafinal = (notafinal + media) / 2;
		
		if (mediafinal >= 6){
			printf("APROVADO! Media: %0.1f", mediafinal);
		}else{
			printf("REPROVADO! Media: %0.1f", mediafinal);
		}
	}
}
