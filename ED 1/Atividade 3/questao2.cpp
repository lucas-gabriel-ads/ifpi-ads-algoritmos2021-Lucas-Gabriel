#include <stdio.h>
#include <iostream>

using namespace std;

main() {
	
	int tamanho, a, cont = 0;
	
	cout << "Informe o numero de elementos dos vetores: ";
	cin >> tamanho;
	
	int vetorA[tamanho];
	int vetorB[tamanho];
	int vetorC[(tamanho * 2)];

	for (a = 0; a < tamanho; a++){
		cout << "Informe um valor a ser adicionado ao vetor A: ";
		cin >> vetorA[a];
	}
	
	for (a = 0; a < tamanho; a++){
		cout << "Informe um valor a ser adicionado ao vetor B: ";
		cin >> vetorB[a];
	}
	
	for (a = 0; a < tamanho; a++){
		vetorC[cont] = vetorA[a];
		cont += 1;
		vetorC[cont] = vetorB[a];
		cont += 1;
	}
	
	cout << "Vetor A: ";
	for (a = 0; a < tamanho; a++){
		cout << vetorA[a] << " ";
	}
	
	cout << "\nVetor B: ";
	for (a = 0; a < tamanho; a++){
		cout << vetorB[a] << " ";
	}
	
	cout << "\nVetor C: ";
	for (a = 0; a < (tamanho * 2); a++){
		cout << vetorC[a] << " ";
	}
}
