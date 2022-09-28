#include <stdio.h>
#include <iostream>
#include <string.h>

using namespace std;

main() {
	
	char nome1[20];
	char nome2[20];
	int i, res;
    
    cout << "Informe um nome: ";
    cin >> nome1;
    
    cout << "Informe outro nome: ";
    cin >> nome2;
    
    if (strlen(nome1) == strlen(nome2)){
    	for (i = 0; i < strlen(nome1); i++){
			res = 0;
			if (nome1[i] != nome2[i]){
    			res = 1;
    			break;
			}
		}
		if (res == 0){
			cout << "São IGUAIS!";
		}else{
			cout << "São DIFERENTES!";
		}
	}else{
		cout << "São DIFERENTES!";
	}	
}
