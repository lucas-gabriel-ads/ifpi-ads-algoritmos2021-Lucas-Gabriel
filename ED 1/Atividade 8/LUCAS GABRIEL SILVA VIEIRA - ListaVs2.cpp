//Professora o código não esta funcionando na parte de criar e adicionar novos alunos
//no final ou inicio, não consegui identificar o que ocasionava o erro mas estou enviando
//mesmo assim para que veja ao menos até onde eu consegui chegar.

#include <stdio.h>
#include <iostream>
#include <stdlib.h>
using namespace std;

typedef struct aluno{
	int mat;
	string nome;
	aluno *prox;	
}*Aluno; 

Aluno inicio = NULL;
Aluno fim = NULL;

//inclui o elemento no final da lista
void incluirNoFinal(Aluno e){
	if (inicio == NULL){
		inicio = e;
		fim = e;
	}else{
		fim->prox = e;
		fim = e;
	}
}

//inclui o elemento no inicio da lista
void incluirNoInicio(Aluno e){
	if (inicio == NULL){
		inicio = e;
		fim = e;
	}else{
		e->prox = inicio;
		inicio = e;
	}
}


//retorna o elemento se encontrado
//senao encontrado retorna NULL
Aluno procura(int mat){
	Aluno atual = inicio;
	while (atual != NULL){
		if(atual->mat == mat){
			return atual;
		}else{
			atual = atual->prox;
		}
	}
	return NULL;
}

//mostra TODOS os elementos da lista
void mostra(){
	Aluno atual = inicio;
	if(inicio == NULL){
		cout << "Lista Vazia !!!" << endl;
	}else{
		while (atual != NULL){
		cout << "Matricula: " << atual->mat << endl;
		cout << "Nome: " << atual->nome << endl;
		cout << "+--------------------------+" << endl;
		atual = atual->prox;
		}
	}		
}

//remover o elemento da lista, retorna 1 se o elemento for encontrado e removido
//retorna 0 se o elemento nao existir na lista 
//pesquisem sobre como fazer esse metodo.. no video 4 ele nao foi explicado totalmente
int remover(int mat){
	Aluno atual = inicio;
	Aluno anterior = NULL;
	
	while (atual != NULL){
		if (atual->mat == mat){
			if (atual == inicio){
				inicio = inicio->prox;
			}else{
				if (atual == fim){
					fim = anterior;
					fim->prox = NULL;
				}else{
					anterior->prox = atual->prox;
				}
			}
			free(atual);
			return 1;
		}
		anterior = atual;
		atual = atual->prox;
	}
	return 0;
}

//faça um menu no metodo main com as opçoes para as funcoes acima

main(){
	
	while (true){
		int opc;
		cout << "+=============================================+" << endl;
		cout << "1 - Adicionar um aluno no final da lista" << endl;
		cout << "2 - Adicionar um aluno no inicio da lista" << endl;
		cout << "3 - Buscar um aluno pelo numero da matricula" << endl;
		cout << "4 - Exibir todos os alunos" << endl;
		cout << "5 - Remover um aluno pelo numero da matricula" << endl;
		cout << "6 - Sair" << endl;
		cout << "+=============================================+" << endl;
		cout << "Escolha uma opção: " << endl;
		cin >> opc;
		if (opc == 1){
			Aluno novo;
			novo = (Aluno)malloc(sizeof(Aluno));
			cout << "Matricula: " << endl;
			cin >> novo->mat;
			cout << "Nome: " << endl;
			cin >> novo->nome;
			novo->prox = NULL;
			incluirNoFinal(novo);
		}else{
			if (opc == 2){
				Aluno novo;
				novo = (Aluno)malloc(sizeof(Aluno));
				cout << "Matricula: " << endl;
				cin >> novo->mat;
				cout << "Nome: " << endl;
				cin >> novo->nome;
				novo->prox = NULL;
				incluirNoInicio(novo);
			}else{
				if (opc == 3){
					int m;
					cout << "Informe a matricula do aluno que esta buscando: " << endl;
					cin >> m;
					if (procura(m) == NULL){
						cout << "Matricula nao encontrada" << endl;
					}else{
						Aluno achou = procura(m);
						cout << "Aluno encontrado!" << endl;
						cout << "Matricula: " << achou->mat << endl;
						cout << "Nome: " << achou->nome << endl;
					}
				}else{
					if (opc == 4){
						mostra();
					}else{
						if (opc == 5){
							int ma;
							cout << "Informe a matricula do aluno a ser removido: " << endl;
							cin >> ma;
							if (remover(ma) == 1){
								cout << "Aluno removido com sucesso!" << endl;
							}else{
								cout << "Aluno nao encontrado!" << endl;
							}
						}else{
							if (opc == 6){
								break;
							}else{
								cout << "Opçao Invalida !" << endl;
							}
						}
					}
				}
			}
		}
	}
}

