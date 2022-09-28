#include <stdio.h>
#include <iostream>

using namespace std;

main() {
	
	int tamanho, i, j, cont = 0, l, m;
	
	cout << "Informe o numero de elementos do vetor A: ";
	cin >> tamanho;
	
	int vetorA[tamanho], vetorB[tamanho];
	
	for (i = 0; i < tamanho; i++){
		cout << "Informe um valor pra ser adicionado ao vetor A: ";
		cin >> vetorA[i];
	}
	
	for (j = (tamanho - 1); j >= 0; j--){
		vetorB[cont] = vetorA[j];
		cont += 1;
	}
	
	cout << "Vetor A: ";
	for (l = 0; l < tamanho; l++){
		cout << vetorA[l] << " ";
	}
	
	cout << "\nVetor B: ";
	for (m = 0; m < tamanho; m++){
		cout << vetorB[m] << " ";
	}
}
