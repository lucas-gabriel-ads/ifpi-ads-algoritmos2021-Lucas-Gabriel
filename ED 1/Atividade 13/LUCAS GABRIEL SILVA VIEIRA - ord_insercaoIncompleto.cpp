#include <stdio.h>
#include <iostream>

using namespace std;

int myarray[]={10,5,6,1,3};

void ord_insercao(int v[],int tam){
	int j, i, temp;
	for (i=1;i<tam;i++){
		temp = v[i];
		j=i-1;
		while (v[j]>temp && j>=0){
			v[j+1] = v[j];
			j--;
		}
		v[j+1] = temp;
	}
}

// Defina o algoritmo de ordenação por inserção
// chame o algoritmo ord_insercao ordenando o vetor myarray
// mostre o vetor ordenado
main(){
	ord_insercao(myarray,5);
	for(int x=0;x<5;x++){
		cout << myarray[x] << endl;
	}
}
