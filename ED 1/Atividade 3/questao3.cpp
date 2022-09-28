#include <stdio.h>
#include <iostream>

using namespace std;

main() {
	
	int tamanho, a, b, cont = 0;
	
	cout << "Informe o numero de elementos dos vetores: ";
	cin >> tamanho;
	
	int vetorA[tamanho];
	int vetorB[tamanho];
	int vetorUniao[(tamanho * 2)];
	
	for (a = 0; a < tamanho; a++){
		cout << "Informe um valor a ser adicionado ao vetor A: ";
		cin >> vetorA[a];
	}
	
	for (a = 0; a < tamanho; a++){
		cout << "Informe um valor a ser adicionado ao vetor B: ";
		cin >> vetorB[a];
	}
	
	for (a = 0; a < tamanho; a++){
		vetorUniao[cont] = vetorA[a];
		cont += 1;
		vetorUniao[cont] = vetorB[a];
		cont += 1;
	}
	
	int vetorInter[tamanho], tamInter = 0;
	
	for(a = 0; a < tamanho; a++){
        
		for(b = 0; b < tamanho; b++){
            
			if(vetorA[a] == vetorB[b]){
                
				vetorInter[tamInter] = vetorA[a];
                tamInter += 1; 
                break;
            }
        }
    }
	
	cout << "Vetor A: ";
	for (a = 0; a < tamanho; a++){
		cout << vetorA[a] << " ";
	}
	cout << "\nVetor B: ";
	for (a = 0; a < tamanho; a++){
		cout << vetorB[a] << " ";
	}
	cout << "\nVetor União: ";
	for (a = 0; a < (tamanho * 2); a++){
		cout << vetorUniao[a] << " ";
	}
	cout << "\nVetor Interseção: ";
	for (a = 0; a < tamInter; a++){
		cout << vetorInter[a] << " ";
	}
}
