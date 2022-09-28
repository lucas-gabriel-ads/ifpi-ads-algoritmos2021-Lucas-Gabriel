#include <stdio.h>
#include <iostream>

using namespace std;

main(){
	
	int tam, a;
	
	cout << "Informe o numero de elementos do vetor A: ";
	cin >> tam;
	
	int vetorA[tam];
	int vetorB[tam];
	
	for (a = 0; a < tam; a++){
		cout << "Informe um valor a ser adicionado ao vetor A: ";
		cin >> vetorA[a];
	}
	for (a = 0; a < tam; a++){
		if (vetorA[a] % 2 == 0){
			vetorB[a] = 0;
		}else{
			vetorB[a] = 1;
		}
	}
	
	cout << "Vetor A: ";
	for (a = 0; a < tam; a++){
		cout << vetorA[a] << " ";
	}
	cout << "\nVetor B: ";
	for (a = 0; a < tam; a++){
		cout << vetorB[a] << " ";
	}
}
