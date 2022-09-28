#include <stdio.h>
#include <iostream>

using namespace std;

main() {
	
	int tam, menor, posMenor = 0, maior, posMaior = 0, a;
	
	cout << "Informe o numero de elementos do vetor: ";
	cin >> tam;
	
	int vetor[tam];
	
	for (a = 0; a < tam; a++){
		cout << "Informe um valor a ser adicionado ao vetor: ";
		cin >> vetor[a];
	}
	
	menor = vetor[0];
	maior = vetor[0];
	
	for (a = 0; a < tam; a++){
		if (vetor[a] > maior){
			maior = vetor[a];
			posMaior = a;
		}
		if (vetor[a] < menor){
			menor = vetor[a];
			posMenor = a;
		}
	}
	
	cout << "Menor: " << menor << " Posição: " << posMenor;
	cout << "\nMaior: " << maior << " Posição: " << posMaior;
}
