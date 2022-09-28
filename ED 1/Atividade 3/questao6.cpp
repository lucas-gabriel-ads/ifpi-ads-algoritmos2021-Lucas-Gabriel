#include <stdio.h>
#include <iostream>

using namespace std;

main() {
	
	int tam, a;
	
	cout << "Informe o numero de elementos do vetor: ";
	cin >> tam;
	
	if (tam > 0){
		int vetor[tam];
		
		
		vetor[0] = 0;
		vetor[1] = 1;
		
		for (a = 2; a < tam; a++){
			vetor[a] = (vetor[(a - 1)] + vetor[(a - 2)]);
		}
		
		cout<< "Sequencia de Fibonacci:";
		for (a = 0; a < tam; a++){
			cout << " " << vetor[a];
		}
	}else{
		cout << "Valor Inválido";
	}
}
