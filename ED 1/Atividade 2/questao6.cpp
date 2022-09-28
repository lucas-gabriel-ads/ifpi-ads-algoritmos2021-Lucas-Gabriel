#include <stdio.h>

main() {
	
	float salario, salarioReajustado, somaAtual = 0, somaReajustado = 0, diferencaSomas = 0;
	
	printf("Informe o salário do funcionário(-1 p/ PARAR): R$ ");
	scanf("%f", &salario);
	while (salario != -1){
		
		if (salario < 3000){
			salarioReajustado = salario + (salario * 0.25);
		}
		if (salario >= 3000 && salario < 6000){
			salarioReajustado = salario + (salario * 0.20);
		}
		if (salario >= 6000 && salario < 10000){
			salarioReajustado = salario + (salario * 0.15);
		}
		if (salario >= 10000){
			salarioReajustado = salario + (salario * 0.10);
		}
		
		somaAtual += salario;
		somaReajustado += salarioReajustado;
		diferencaSomas = somaReajustado - somaAtual;
		
		printf("Salário antes do reajuste: R$ %0.2f\n",salario);
		printf("Salário após reajuste: R$ %0.2f\n", salarioReajustado);
		printf("Soma dos salários antes do reajuste: R$ %0.2f\n", somaAtual);
		printf("Soma dos salários após o reajuste: R$ %0.2f\n", somaReajustado);
		printf("Diferença entre a soma dos salários antes e pós reajuste: R$ %0.2f", diferencaSomas);
		
		printf("Informe o salário do funcionário(-1 p/ PARAR): R$ ");
		scanf("%f", &salario);
	}
}
