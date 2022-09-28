#include <stdio.h>
#include <iostream>

using namespace std;

typedef struct no {
	int cod;
	char nome[20];
} No;
No vetor[10];
int pos = 0;

// 2.	Preencha a função que inclui elementos na última posição OCUPADA do “vetor”.
void incluir (No novo){
	vetor[pos] = novo;
	pos++;
}

// 3.	Preencha a função que consulta de um elemento especifico em “vetor”. 
// A função deve retornar a posição do elemento se ele for encontrado. Se o elemento não for encontrado a função deve retornar -1.
int procura(int mat) {
	int cont = 0;
	int posi = 0;
	while (cont < 10){
		if (vetor[cont].cod == mat){
			return posi;
		}
		posi++;
		cont++;
	}
	return -1;
}

// 4.	Preencha a função que mostra todos os elementos do vetor. 
// Considere a variável “pos” no código como a última posição ocupada e não considere posições vazias.
void mostra(){
	int cont = 0;
	while(cont < pos){
		cout << "Cod: " << vetor[cont].cod << endl;
		cout << "Nome: " << vetor[cont].nome << endl;
		cont++;
	}
}

// 5.	Preencha a função que remove um elemento da lista, a posição do elemento a ser removido é passado como parâmetro na função 
// (colocar o último elemento da lista na posição do elemento removido).
// Se o elemento for encontrado e removido retorne 1. Se o elemento NÃO for encontrado retorne 0.
int remove (int posicao){
	if (posicao >= pos){
		return 0;
	}else{
		vetor[posicao] = vetor[pos - 1];
		pos--;
		return 1;
	}
}

main() {

	No primeiro = {1, "ana maria"};
	No segundo = {2, "carla gomes"};
	No terceiro = {3, "lucas gabriel"};
	No quarto = {4, "pedro luis"};
	incluir(primeiro);  //Incluindo item no vetor.
	incluir(segundo);   //Incluindo item no vetor.
	incluir(terceiro);  //Incluindo item no vetor.
	incluir(quarto);   //Incluindo item no vetor.
	cout << "Posicao cod 3: " << procura(3) << endl; // Exibindo a posição do item com cod = 3.
	mostra(); // Mostrando elementos do vetor.
	remove(1); // Removendo a posição 1 do vetor.
	mostra(); // Mostrando elementos do vetor aops remover o item do indice 1.
}
