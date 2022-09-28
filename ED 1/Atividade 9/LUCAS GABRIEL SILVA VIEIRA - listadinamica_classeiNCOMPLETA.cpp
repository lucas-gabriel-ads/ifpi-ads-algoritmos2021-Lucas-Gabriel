#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <iostream>
using namespace std;
class No{
	public:
		int mat;
		char nome[23];
		No *prox;
		No(int m,char n[23]){
			mat=m;
			strcpy(nome,n);			
			prox=NULL;
		}
};

class Lista{
	public:
		No *inicio;
		No *fim;
	
	    Lista(){
	    	inicio = NULL;
	    	fim = NULL;
		}	
		
		void addToFinal(int m, char n[23]){
			No *novo= new No(m,n);
			if (fim==NULL){
				inicio = novo;
				fim = novo;
			}
			else{
				fim->prox=novo;
				fim=novo;
			}
		}
		
			
		int lst_vazia(){
			return (inicio==NULL);
		}
		
		void addToInicio(int m,char n[23]){
			No *novo= new No(m,n);
			if (inicio == NULL){
				inicio = novo;
				fim = novo;
			}else{
				novo->prox = inicio;
				inicio = novo;
			}
		}
		
		void consultar(int mat){
			No *atual = inicio;
			while (atual != NULL){
				if(atual->mat == mat){
					cout << "Matricula: " << atual->mat << endl;
					cout << "Nome: " << atual->nome << endl;
					return;
				}else{
					atual = atual->prox;
				}
			}
			cout << "Aluno nao existente!" << endl;
		}
		
		void mostra(){
			if (lst_vazia()){
				cout<<"\nLista vazia!!!" << endl;
			}else{
				No *atual = inicio;
				while (atual != NULL){
					cout << "Matricula: " << atual->mat << endl;
					cout << "Nome: " << atual->nome << endl;
					atual = atual->prox;
				}
			}
		}
		
		int remove(int mat){
			No *atual = inicio;
			while (atual != NULL){
				if (atual->mat == mat){
					if (atual == inicio){
						inicio = inicio->prox;
					}else{
						if (atual == fim){
							fim = busca(atual->mat);
							fim->prox = NULL;
						}else{
							busca(atual->mat)->prox = atual->prox;
						}
					}
					free(atual);
					return 1;
				}
				atual = atual->prox;
			}
			return 0;
		}
		
		// auxiliar no metodo remove, vai 
		//retornar o endereco do anterior
		No *busca(int mat){
			No *atual = inicio;
			No *anterior = NULL;
			while (atual != NULL){
				if(atual->mat == mat){
					return anterior;
				}else{
					anterior = atual;
					atual = atual->prox;
				}
			}
		}
		
		void removeTodos(){
			No *atual=inicio;
			No *proximo=NULL;
			while (atual!=NULL){
				proximo=atual->prox;
				cout<<"\n Apaga:"<<atual->nome;
				free(atual);
				atual=proximo;						
			}
			inicio=atual;
		}
		
		// criar uma nova lista que seja o inverso da primeira
		void crialistainversa(){
			Lista *new_list = new Lista();
			No *atual = fim;
			while(true){
				new_list->addToFinal(atual->mat, atual->nome);
				if(atual == inicio){
					break;
				}
				atual = busca(atual->mat);
			}
			new_list->mostra();
		}
		
		//inverter a propria lista
		void listainvertida(){
			No *ant, *atual, *seg;
			ant = NULL;
			atual = inicio;
			while(atual != NULL){
				seg = atual->prox;
				atual->prox = ant;
				ant = atual;
				atual = seg;
			}
			fim = inicio;
			inicio = ant;
		}
};


main(){
	
	Lista *l=new Lista();
	l->addToFinal(1,"Joao");
	l->addToFinal(2,"Gabriela");
	l->addToFinal(3,"Fabiola");
	l->addToInicio(5,"Joana Oliveira");
	l->addToInicio(6,"Cristiano Oliveira");
	l->mostra();
	cout << "-----------------------------------" << endl;
	l->consultar(3);
	l->consultar(7);
	cout << "-----------------------------------" << endl;
	l->remove(1);
	l->mostra();
	cout << "-----------------------------------" << endl;
	l->listainvertida();
	l->mostra();
	cout << "-----------------------------------" << endl;
	l->crialistainversa();
	cout << "-----------------------------------" << endl;
	
}

