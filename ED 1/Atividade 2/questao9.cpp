#include <stdio.h>
#include <iostream>
#include <string.h>

using namespace std;

main() { 

    char nome1[20];
	char nome2[20];
    
    cout << "Informe um nome: ";
    cin >> nome1;
    
	cout << "Informe outro nome: ";
    cin >> nome2;

    if (strcmp(nome1, nome2) == 0){
    	cout << "São IGUAIS!";
	}else{
		cout << "São DIFERENTES!";
	}
}
