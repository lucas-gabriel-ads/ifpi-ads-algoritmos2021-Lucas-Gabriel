#include <stdio.h>
#include <typeinfo>
#include <iostream>
#include <stdlib.h>
#include <string.h>

using namespace std;

class No{
	public:
		int num;
		No *prox;
		No(int n){
			num = n;
			prox = NULL;
		}
};

class Pilha{
	public:
		No *topo;
		
		Pilha(){
			topo = NULL;
		}
		
		void push(int n){
			No *novo = new No(n);
			if (topo == NULL){
				topo = novo;
			}else{
				novo->prox = topo;
				topo = novo;
			}
			
		}
		
		int pop(){
			No *aux = topo;
			topo = topo->prox;
			return aux->num;
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


//=========================== QUESTÃO 6 ===========================	

int calc(string exp){
	Pilha *p = new Pilha();
	
	for (int x=0; x<exp.length(); x++){
		if (exp[x] == '+'){
			int a = p->pop();
			p->push(p->pop() + a);
		}
		if (exp[x] == '-'){
			int a = p->pop();
			p->push(p->pop() - a);
		}
		if (exp[x] == '*'){
			int a = p->pop();
			p->push(p->pop() * a);
		}
		if (exp[x] == '1' || exp[x] == '2' || exp[x] == '3' || exp[x] == '4' || exp[x] == '5' || exp[x] == '6' || exp[x] == '7' || exp[x] == '8' || exp[x] == '9'){
			p->push(exp[x] - '0');
		}
	}
	return p->pop();
}
	
//=========================== MAIN (TESTES) ===========================
int main(){
	string a = "12-45+*";
	cout << calc(a) << endl;
	
	return 0;
};

