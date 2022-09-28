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
			if (topo == NULL){
				return '#';
			}else{
				No *aux = topo;
				topo = topo->prox;
				return aux->nome;
			}	
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





//=========================== QUESTÃO 1 ===========================

int verificaExpre(string expre){
	Pilha *p = new Pilha();
	
	for (int a=0; a < expre.length(); a++){
		if (expre[a] == '{' || expre[a] == '(' || expre[a] == '['){
			p->push(expre[a]);
		}
		if (expre[a] == '}'){
			if (p->pop() != '{'){
				return 0;
			}	
		}
		if (expre[a] == ')'){
			if (p->pop() != '('){
				return 0;
			}	
		}
		if (expre[a] == ']'){
			if (p->pop() != '['){
				return 0;
			}	
		}
	}
	if (p->isEmpty() == 0){
		return 1;
	}else{
		return 0;
	}
};


//=========================== QUESTÃO 2 ===========================

int xCy(string s){
	Pilha *p = new Pilha();
	int cont = 1;
	
	for (int x=0; x<s.length(); x++){
		if (s[x] == 'C'){
			break;
		}
		if (s[x] == 'A' || s[x] == 'B'){
			p->push(s[x]);
			cont += 1;
		}	
	}
	
	for (int y=cont; y<s.length(); y++){
		if (s[y] != p->pop()){
			return 0;
		}
	}
	
	if (p->isEmpty() == 0){
		return 1;
	}else{
		return 0;
	}
};


//=========================== QUESTÃO 4 ===========================

class FilaComPilhas{
	public:
		Pilha *p1 = new Pilha();
		Pilha *p2 = new Pilha();
		
		void entrar_com_pilhas(char c){		
			if (p1->isEmpty() == 0){
				p1->push(c);
			}else{
				while (p1->isEmpty() != 0){
					p2->push(p1->pop());
				}
				p1->push(c);
				while (p2->isEmpty() != 0){
					p1->push(p2->pop());
				}
			}
		}
		
		void sair_com_pilhas(){
			cout << p1->pop() << endl;
		}
};


//=========================== QUESTÃO 5 ===========================

class PilhaComFilas{
	public:
		Fila *f1 = new Fila();
		Fila *f2 = new Fila();
		
		void empilhar_com_fila(char c){
			if (f1->isEmpty()){
				f1->append(c);
			}else{
				f2->append(c);
				while(f1->isEmpty()!=true){
					f2->append(f1->pop());
				}
				while(f2->isEmpty()!=true){
					f1->append(f2->pop());
				}
			}
		}
		
		void desempilhar_com_fila(){
			cout << f1->pop() << endl;
		}
};


//=========================== MAIN (TESTES) ===========================
int main(){
	string s = "{m +(x+5)+3}";
	if (verificaExpre(s) == 0){
		cout << "ERRO" << endl;
	}else{
		cout << "CORRETO" << endl;
	}
	
	string s2 = "ABABBACABBABA";
	if (xCy(s2) == 0){
		cout << "ERRO" << endl;
	}else{
		cout << "CORRETO" << endl;
	}
	
	FilaComPilhas *teste1 = new FilaComPilhas();
	teste1->entrar_com_pilhas('A');
	teste1->entrar_com_pilhas('B');
	teste1->entrar_com_pilhas('C');
	teste1->sair_com_pilhas();
	
	PilhaComFilas *teste2 = new PilhaComFilas();
	teste2->empilhar_com_fila('A');
	teste2->empilhar_com_fila('B');
	teste2->empilhar_com_fila('C');
	teste2->desempilhar_com_fila();
	
	
	return 0;
};
