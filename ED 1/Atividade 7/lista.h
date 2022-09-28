#include <iostream>
#include <stdlib.h>
#define fmt "%d"

using namespace std;
typedef int Item;
typedef struct no {
	Item item;
	struct no *prox;
}*Lista;

Lista no(Item x, Lista p){
	Lista n = (Lista)malloc(sizeof(Lista));
	n->item = x;
	n->prox = p;
	return n;
}

void exibe(Lista p){
	Lista atual = p;
	while (atual != NULL){
		cout << atual->item << endl;
		atual = atual->prox;
	}
}

int ocorrencias(Item x, Lista p){
	int oc = 0;
	Lista atual = p;
	while(atual != NULL){
		if (atual->item == x){
			oc += 1;
		}
		atual = atual -> prox;
	}
	return oc;
}

Item ultimo(Lista p){
	Lista atual = p;
	while (atual != NULL){
		if (atual -> prox == NULL){
			return atual -> item;
		}
		atual = atual -> prox;
	}
}

Lista inversa(Lista p){
	Lista n;
	Lista aux = NULL;
	
	n = p->prox;
	p->prox = NULL;
	
	while(n != NULL){
		aux = n->prox;
		n->prox = p;
		p = n;
		n = aux;
	}
	return p;
}

