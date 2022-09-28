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

class Fila{
	public:
		No *inicio;
		No *fim;
		
		Fila(){
			inicio = NULL;
			fim = NULL;
		}
		
		void append(char n){
			No *novo = new No(n);
			if (inicio == NULL){
				inicio = novo;
				fim = novo;
			}else{
				fim->prox = novo;
				fim = novo;
			}	
		}
		
		char pop(){
			No *aux = inicio;
			inicio = inicio->prox;
			return aux->nome;
		}
		
		bool isEmpty(){
			return (inicio == NULL);
		}
	
	    void popAll(){
	    	while (isEmpty() == false){
	    		pop();
			}
		}
};

int main(){
	Fila *f = new Fila();
	
	f->append('A');
	f->append('B');
	f->append('C');
	f->append('D');
	f->append('E');
	
	cout << f->pop() << endl;
	cout << f->pop() << endl;
	
	if (f->isEmpty()){
		cout << "Fila Vazia!" << endl;
	}else{
		cout << "Fila contem elementos!" << endl;
	}
	
	f->popAll();
	
	if (f->isEmpty()){
		cout << "Fila Vazia!" << endl;
	}else{
		cout << "Fila contem elementos!" << endl;
	}
}
