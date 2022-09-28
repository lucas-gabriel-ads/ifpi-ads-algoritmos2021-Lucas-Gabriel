#include <stdio.h>
#include <iostream>
#include <stdlib.h>
#include <string.h>
#include <stack>
#include <queue>

using namespace std;


//=========================== QUESTÃO 7 ===========================

class FilaComPilhasStl{
	public:
		stack<int> p1;
		stack<int> p2;
		
		void entrar_com_pilhas(int n){		
			if (p1.empty() == true){
				p1.push(n);
			}else{
				while (p1.empty() != true){
					p2.push(p1.top());
					p1.pop();
				}
				p1.push(n);
				while (p2.empty() != true){
					p1.push(p2.top());
					p2.pop();
				}
			}
		}
		
		void sair_com_pilhas(){
			cout << p1.top() << endl;
			p1.pop();
		}
};


//=========================== QUESTÃO 8 ===========================

class PilhaComFilasStl{
	public:
		queue<int> f1;
		queue<int> f2;
		
		void empilhar_com_fila(int n){
			if (f1.empty()){
				f1.push(n);
			}else{
				f2.push(n);
				while(f1.empty()!=true){
					f2.push(f1.front());
					f1.pop();
				}
				while(f2.empty()!=true){
					f1.push(f2.front());
					f2.pop();
				}
			}
		}
		
		void desempilhar_com_fila(){
			cout << f1.front() << endl;
			f1.pop();
		}
};


//=========================== MAIN (TESTES) ===========================

int main(){
	
	FilaComPilhasStl *teste1 = new FilaComPilhasStl();
	teste1->entrar_com_pilhas(2);
	teste1->entrar_com_pilhas(3);
	teste1->entrar_com_pilhas(4);
	teste1->sair_com_pilhas();
	
	PilhaComFilasStl *teste2 = new PilhaComFilasStl();
	teste2->empilhar_com_fila(2);
	teste2->empilhar_com_fila(3);
	teste2->empilhar_com_fila(4);
	teste2->desempilhar_com_fila();
	
	return 0;	
};
