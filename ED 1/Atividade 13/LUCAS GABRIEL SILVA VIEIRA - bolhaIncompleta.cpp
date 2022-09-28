#include <stdio.h>
#include <stdlib.h>
#include <iostream>

using namespace std;

void bolha (int n,int* v) {
	int i, j;
	int troca;
	
	for(i=n-1; i>=1; i--){
		troca = 0;
		for(j=0; j<i; j++){
			if(v[j] > v[j+1]){
				int temp = v[j];
				v[j] = v[j+1];
				v[j+1] = temp;
				troca = 1;
			}
		}
		if(troca==0){
			break;
		}
	}
}

int PesquisaBinaria(int n, int *v, int procurado){
	int ini = 0;
	int fim = n-1;
	
	while (ini<=fim){
		int meio = (int)((ini+fim)/2);
		if(procurado < v[meio]){
			fim = meio - 1;
		}else if(procurado > v[meio]){
			ini = meio + 1;
		}else{
			return meio;
		}
	}
	return -1;
}

//ordene o vetor V usando o método da bolha	
//mostre o vetor ordenado
//pesquise no vetor usando o metodo de pesquisa binaria	 
main(){
	int v[4];
	for(int i=0;i<=3;i=i+1){
		printf("Digite o valor %d :",i);
		scanf("%d",&v[i]);
	}
	bolha(4,v);
	for(int x=0;x<4;x++){
		cout << v[x] << endl;
	}
	
	cout << "=======================================" << endl;
	cout << PesquisaBinaria(4, v, 222) << endl;
	cout << PesquisaBinaria(4, v, 13) << endl;
}
