#include <stdio.h>
#include <iostream>
#include <stdlib.h>
#include <string.h>

using namespace std;

class No{
	public:
		char nome;
		No *prox;
		No(char n){
			nome = n;
			prox = NULL;
		}
};

class Pilha{
	public:
		No *topo;
		
		Pilha(){
			topo = NULL;
		}
		
		void push(char n){
			No *novo = new No(n);
			if (topo == NULL){
				topo = novo;
			}else{
				novo->prox = topo;
				topo = novo;
			}
			
		}
		
		char pop(){
			No *aux = topo;
			topo = topo->prox;
			return aux->nome;
		}
		
		int isEmpty(){
			if (topo == NULL){
				return 0;
			}else{
				return 1;
			}
		}
		
		void popAll(){
	    	while (isEmpty() == 1){
	    		pop();
			}
		}
};

int main(){
	Pilha *p = new Pilha();
	
	p->push('A');
	p->push('B');
	p->push('C');
	p->push('D');
	p->push('E');
	
	cout << p->pop() << endl;
	cout << p->pop() << endl;
	
	if (p->isEmpty() == 0){
		cout << "Pilha Vazia!" << endl;
	}else{
		cout << "Pilha contem elementos!" << endl;
	}
	
	p->popAll();
	
	if (p->isEmpty() == 0){
		cout << "Pilha Vazia!" << endl;
	}else{
		cout << "Pilha contem elementos!" << endl;
	}
}
