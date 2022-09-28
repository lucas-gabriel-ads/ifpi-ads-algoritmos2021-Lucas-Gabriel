#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <iostream>
using namespace std;

//lista DUPLAMENTE ENCADEADA - ELEMENTO NO COM 2 PONTEIROS, UM PARA O ELEMENTO ANTERIOR E OUTRO PARA O PROX ELEMENTO
class No{
	public:
		int mat;
		char nome[23];
		No *prox;
		No *ant;
		No(int m,char n[23]){
			mat=m;
			strcpy(nome,n);
			prox=NULL;
			ant=NULL;
		}
};


class Lista{
	public:
		No *inicio;
		No *fim;
	
		//construtor
	    Lista(){
	    	inicio = NULL;
	    	fim = NULL;
		}	
		
		//adiciona no final da lista
		void addToFinal(int m, char n[23]){
			No *novo= new No(m,n);
			if (fim==NULL){
				inicio = novo;
				fim = novo;
			}
			else{
				fim->prox=novo;
				novo->ant=fim;
				fim=novo;
			}
		}
		
		//adiciona no inicio da lista
		void addToIni(int m, char n[23]){
			No *novo= new No(m,n);
			if (inicio==NULL){
				inicio = novo;
				fim = novo;
			}
			else{
				novo->prox = inicio;
				inicio->ant = novo;
				inicio = novo;
			}
		}
		
		//adiciona o elemento na lista ordenada
		void addOrd(int m, char n[23]){
			No *novo= new No(m,n);
			No *atual = inicio;
			if (inicio==NULL){
				inicio = novo;
				fim = novo;
			}else{
				while(atual!=NULL){
					if (atual->mat > novo->mat){
						novo->prox = atual;
						novo->ant = atual->ant;
						atual->ant->prox = novo;
						atual->ant = novo;
						break;
					}
					atual = atual->prox;
				}
			}
		}
		
		// mostrar os elementos do inicio ao final da lista
		void mostraIniFim(){
			No *atual = inicio;
			while (atual!=NULL){
				cout << "Matricula: " << atual->mat << endl;
				cout << "Nome: " << atual->nome << endl;
				cout << "===============================" << endl;
				atual = atual->prox;
			}
		}
		
		//mostrar os elementos do final ao inicio da lista
		void mostraFimIni(){
			No *atual = fim;
			while (atual!=NULL){
				cout << "Matricula: " << atual->mat << endl;
				cout << "Nome: " << atual->nome << endl;
				cout << "===============================" << endl;
				atual = atual->ant;
			}
		}
		
		//remove o elemento do final da lista
		int removerFinal(){
			No *atual = fim;
			if (inicio == NULL){
				return 0;
			}else{
				fim = fim->ant;
				atual->ant = NULL;
				fim->prox = NULL;
				free(atual);
				return 1;
			}
		}
		
		//remove o elemento do inicio da lista
		int removerInicio(){
			No *atual = inicio;
			if (inicio == NULL){
				return 0;
			}else{
				inicio = inicio->prox;
				atual->prox = NULL;
				inicio->ant = NULL;
				free(atual);
				return 1;
			}	
		}
		
		//remove o elemento procurado , o valor procurado é passado como parametro m
		int remover(int m){
			No *atual = inicio;
			while(atual!=NULL){
				if (atual->mat == m){
					atual->ant->prox = atual->prox;
					atual->prox->ant = atual->ant;
					free(atual);
					return 1;
				}else{
					atual = atual->prox;
				}
			}
			return 0;
		}
};

main(){
   Lista *l=new Lista(); // cria o objeto l do tipo da classe Lista
   
   //faça aqui o teste de todos os métodos da classe
   l->addToFinal(1, "Jose");
   l->addToFinal(2, "Maria");
   l->addToFinal(3, "Paula");
   l->addToIni(0, "Carlos");
   l->addToFinal(10, "Samira");
   l->addOrd(7, "Pedro");
   l->addOrd(9, "Clara");
   cout << "Exibindo do Inicio ao Fim..." << endl;
   l->mostraIniFim();
   cout << "+---------------------------------------+" << endl;
   cout << "Exibindo do Fim ao Inicio..." << endl;
   l->mostraFimIni();
   cout << "+---------------------------------------+" << endl;
   l->removerInicio();
   l->removerFinal();
   l->mostraIniFim();
   cout << "+---------------------------------------+" << endl;
   l->remover(3);
   l->mostraIniFim();
}
