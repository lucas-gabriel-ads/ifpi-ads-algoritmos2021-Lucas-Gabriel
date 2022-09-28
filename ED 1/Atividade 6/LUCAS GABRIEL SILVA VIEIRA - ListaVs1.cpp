#include <stdio.h>
#include <iostream>
using namespace std;

typedef struct aluno{
	int mat;
	string nome;	
}Aluno; 

Aluno lista[30];
int pos = 0;

void incluirDesordenado(Aluno e){
	
	lista[pos] = e;
	pos++;
	
}

//retorna a posicao do elemento procurado
int procura(int mat){
	
	int cont = 0;
	int posi = 0;
	while (cont < 30){
		if (lista[cont].mat == mat){
			return posi;
		}
		posi++;
		cont++;
	}
	return -1;	
	
}

//recebe a posicao e imprime o elemento na tela
void mostrar(int pos){
	
	if (pos < 0 && pos > 30){
		cout << "Elemento nao encontrado.";
	}else{
		cout << "Matricula: " << lista[pos].mat << endl;
		cout << "Nome: " << lista[pos].nome << endl;
	}
	
}

//mostra TODOS os elementos da lista
void mostra(){
	
	int cont = 0;
	while(cont < pos){
		cout << "Matricula: " << lista[cont].mat << endl;
		cout << "Nome: " << lista[cont].nome << endl;
		cont++;
	}	
}

//estratégia 1: colocar o ultimo elemento da lista na posição do elemento removido
void remover00(int posicao){
	
	lista[posicao] = lista[pos - 1];
	pos--;
	
}

//estratégia 2: mover TODOS os elementos que estão APÓS  o elemento que deve ser removido UMA POSIÇÃO A FRENTE.
void remover01(int posicao){
	
	while (posicao < pos){
		lista[posicao] = lista[posicao + 1];
		posicao += 1;
	}
	pos--;
	
}

main(){
	
	Aluno fabio = {1, "fabio"};
	Aluno bruna = {2, "bruna"};
	Aluno maria = {3, "maria"};
	Aluno joao = {4, "joao"};
	Aluno paulo = {5, "paulo"};
	incluirDesordenado(fabio);
	incluirDesordenado(bruna);
	incluirDesordenado(maria);
	incluirDesordenado(joao);
	incluirDesordenado(paulo);
	cout << procura(2) << endl;
	mostrar(1);
	mostra();
	remover00(1);
	mostra();
	remover01(2);
	mostra();
}
